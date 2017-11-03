import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Login } from '../login/login';
import { Signup } from '../signup/signup';
import {TabsPage} from '../tabs/tabs';
/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class Welcome {
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if(localStorage.getItem('userData')){
      this.navCtrl.setRoot(TabsPage);
    }
  }
  ionViewDidLoad() {
    //localStorage.clear();
    console.log('ionViewDidLoad Welcome');
  }
  login(){
    this.navCtrl.push(Login);
    }
  
    signup(){
    this.navCtrl.push(Signup,{},{animate:false});
    }
  }
