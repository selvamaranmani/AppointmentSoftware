import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AuthService } from '../providers/auth-service/auth-service';

import { Welcome } from '../pages/welcome/welcome';
import { Login } from '../pages/login/login';
import { Signup } from '../pages/signup/signup';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {MomentModule} from 'angular2-moment';
import {LinkyModule} from 'angular-linky';
import { Common } from '../providers/common/common';

//import { SignaturePadModule } from 'angular2-signaturepad';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    Welcome,
    Login,
    Signup,
    TabsPage
  ],
  imports: [
    BrowserModule,HttpModule,MomentModule,LinkyModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    Welcome,
    Login,
    Signup,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen, AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Common,
    
  ]
})
export class AppModule {}
