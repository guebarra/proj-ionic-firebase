import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
import { StorageProvider } from '../../providers/storage/storage';
import * as firebase from 'Firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  salas: {};

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private storageProvider: StorageProvider,
    private toast: ToastController){
  }

  getSalas(){
    return new Promise (function (resolve) {
      let ref = firebase.database().ref('rooms/');
      let rooms = [];

      ref.orderByChild('distancia').on('value', function(snapshot){
        snapshot.forEach(childSnapshot => {
          rooms.push(childSnapshot.val())
        })
        resolve(rooms);
      })

    });
  }

  ionViewDidEnter(){
    this.getSalas()
    .then((result) => {
      this.salas = result;
    });
  }

  static get parameters() {
      return [[NavController]];
  }

  pushChatPage(item) {
    console.log(item);
    this.navCtrl.push(ChatPage,{item:item});
  }

  /*public retornaSalas() {
    this.storageProvider.getAllSalas()
    .then(results => {
      this.salas = results;
    })
  }*/

  /*getItems(ev: any) {
    this.retornaSalas();
    const val = ev.target.value;

    if (val && val.trim() != '') {
      this.salas = this.salas.filter((sala) => {
        return (sala.nomeDaSala.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }*/

}