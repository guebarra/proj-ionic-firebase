import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ConfigPage } from '../pages/config/config';
import { SalasPage } from '../pages/salas/salas';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ChatPage } from '../pages/chat/chat';
import { LoginPage } from '../pages/login/login';
import { CreateuserPage } from '../pages/createuser/createuser';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { UserProvider } from '../providers/user/user';
import { SalasProvider } from '../providers/salas/salas';
import { SQLite } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../providers/database/database';
import { DatePipe } from '@angular/common'; 
import { IonicStorageModule } from '@ionic/storage';
import { Firebase } from '@ionic-native/firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { StorageProvider } from '../providers/storage/storage';

const config = {
  apiKey: "AIzaSyBNxvxNzIdmfN7nlOJTUTGEchFl8LgrP0I",
  authDomain: "chat-proj-ionic.firebaseapp.com",
  databaseURL: "https://chat-proj-ionic.firebaseio.com",
  projectId: "chat-proj-ionic",
  storageBucket: "chat-proj-ionic.appspot.com",
  messagingSenderId: "62119085151"
};

@NgModule({
  declarations: [
    MyApp,
    ConfigPage,
    SalasPage,
    HomePage,
    TabsPage,
    ChatPage,
    LoginPage,
    CreateuserPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
     IonicModule.forRoot(MyApp, {
        tabsHideOnSubPages: true,
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ConfigPage,
    SalasPage,
    HomePage,
    TabsPage,
    ChatPage,
    LoginPage,
    CreateuserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    UserProvider,
    SalasProvider,
    DatabaseProvider,
    SQLite,
    DatePipe,
    Firebase,
    AngularFireDatabase,
    AngularFireModule,
    StorageProvider
  ]
})
export class AppModule {}
