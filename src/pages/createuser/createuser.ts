import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { UserProvider } from '../../providers/user/user';
import * as firebase from 'Firebase';

@IonicPage()
@Component({
  selector: 'page-createuser',
  templateUrl: 'createuser.html',
})
export class CreateuserPage {
  user = {firstname: '', lastname: '', user: '', password: '', confirmpassword: ''};
  ref = firebase.database().ref('users/');

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public toast: ToastController
  ){

  }

  setUser(){
    if(this.user.password === this.user.confirmpassword){
      this.ref.push().set({
        firstname: this.user.firstname,
        lastname: this.user.lastname,
        user: this.user.user,
        password: this.user.password
      });
      console.log(this.user.firstname, this.user.lastname, this.user.user, this.user.password);
      this.toast.create({ message: 'Usuário criado.', duration: 3000, position: 'botton' }).present();
      this.navCtrl.pop();
    } else {
      this.showAlert();
    }
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Não foi possível criar Conta.',
      subTitle: 'Senhas não coincidem!',
      buttons: ['OK']
    });
    alert.present();
  }
}