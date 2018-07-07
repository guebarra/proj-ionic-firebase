import { Component, Query } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';
import { query } from '@angular/core/src/animation/dsl';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
  providers: [AngularFireDatabase, AngularFireAuth]
})
export class ChatPage {
  data = {usuario: '', mensagem: ''};
  mensagens: AngularFireList<any[]>;
  usuario: any;

  constructor(public navCtrl: NavController, private afDatabase: AngularFireDatabase, private afAuth: AngularFireAuth) {
  	this.afAuth.authState.subscribe(usr => {
      this.usuario = usr.displayName;

      this.mensagens = this.afDatabase.list('/mensagens', ref => {
        return ref.limitToLast(10);
      });
    })
  }

  enviarMsg(){
    let newMsg = firebase.database().ref('/mensagens').push();
    newMsg.set({
      usuario: this.usuario.displayName,
      mensagem: this.data.mensagem

    });
    
    this.data.mensagem = '';
  }
  
  autenticar(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then(res => this.usuario = res.user)
  }

  sair(){
    this.afAuth.auth.signOut();
  }

}

export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
  });

  return returnArr;
};