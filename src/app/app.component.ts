import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { DatabaseProvider } from '../providers/database/database';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBNxvxNzIdmfN7nlOJTUTGEchFl8LgrP0I",
  authDomain: "chat-proj-ionic.firebaseapp.com",
  databaseURL: "https://chat-proj-ionic.firebaseio.com",
  projectId: "chat-proj-ionic",
  storageBucket: "chat-proj-ionic.appspot.com",
  messagingSenderId: "62119085151"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, db: DatabaseProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    firebase.initializeApp(config);
  }
}
