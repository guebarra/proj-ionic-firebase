import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { CreateuserPage } from '../createuser/createuser';
import { UserProvider } from '../../providers/user/user';
import * as firebase from 'Firebase';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
  login = {user: '', password: ''};
  value: any;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public user: UserProvider
  ){ }

  ionViewDidEnter(){
    if(localStorage.getItem("IsLogged")){
      this.navCtrl.push(TabsPage);
    }
  }

  signIn(user){
    return new Promise (function (resolve) {
      let ref = firebase.database().ref('users/');

      ref.orderByChild('user').equalTo(user).once('value', function(snapshot){
        snapshot.forEach(childSnapshot => {
          resolve(childSnapshot.val());
        })
      })

    });
  }

  logIn(){
    this.signIn(this.login.user)
    .then((result) => {
      console.log(this.login);
      this.value = result;
      
      if(this.value.password === this.login.password){
        this.navCtrl.push(TabsPage);
        localStorage.setItem("IsLogged", "yes");
      } else {
        this.showAlert();
      }

    })
  }

 pushCreatePage(){
   this.navCtrl.push(CreateuserPage);
 }

 showAlert() {
   let alert = this.alertCtrl.create({
     title: 'Erro!',
     subTitle: 'Usuário e/ou Senha inválidos!',
     buttons: ['OK']
   });
   alert.present();
 }
}
