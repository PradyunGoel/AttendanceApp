import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FormsModule } from '@angular/forms';

import { OtherPage } from '../pages/other/other';
import { AttendancePage } from '../pages/attendance/attendance';
import { TabsPage } from '../pages/tabs/tabs';
import { DetailsPage } from '../pages/details/details';
import { ContactPage } from '../pages/contact/contact';
import { EditorPage } from '../pages/editor/editor';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { firebaseConfig } from './credentials';
import { ReadProvider } from '../providers/read/read';
import { NewTaskProvider } from '../providers/new-task/new-task';
import { TasksProvider } from '../providers/tasks/tasks';
import { WriteProvider } from '../providers/write/write';

@NgModule({
  declarations: [
    MyApp,
    OtherPage,
    AttendancePage,
    TabsPage,
    DetailsPage,
    ContactPage,
    EditorPage
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    OtherPage,
    AttendancePage,
    TabsPage,
    DetailsPage,
    ContactPage,
    EditorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ReadProvider,
    NewTaskProvider,
    TasksProvider,
    WriteProvider
  ]
})
export class AppModule {}
