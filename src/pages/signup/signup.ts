import { Component } from '@angular/core';
import {  NavController, ToastController} from 'ionic-angular';
import {AuthService} from "../../providers/auth-service/auth-service";
//import { Welcome } from '../welcome/welcome';
//import { HomePage } from '../home/home';
import { Login } from '../login/login';
//import { Login } from '../login/login';
//import { AuthService } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class Signup {
  responseData : any;
  userData = {"username": "","password": "", "name": "","email": "","phone":"","dob":"","gender":"","addl":"","addll":"","village":"","district":"","city":"","pincode":"","state":"","confirmpassword":""};

  constructor(public navCtrl: NavController, public authService: AuthService, private toastCtrl: ToastController ) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup');
  }

  signup(){
    //Api connections && this.userData.addl && this.userData.addll && this.userData.village && this.userData.district && this.userData.city && this.userData.pincode && this.userData.state
    if(this.userData.name && this.userData.phone && this.userData.email && this.userData.gender && this.userData.dob && this.userData.username && this.userData.password && this.userData.confirmpassword ){
      this.authService.postData(this.userData,'signup').then((result) => {
        this.responseData = result;
        console.log(this.responseData);
        localStorage.setItem('userData', JSON.stringify(this.responseData));
       // localStorage.clear();
        this.navCtrl.push(Login);
      }, (err) => {
        // Error log
      });
    } 
    else{
      this.presentToast("Give valid information.");
    }

  }
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }
  login(){
    //Login page link
   this.navCtrl.push(Login);
  }
}
 // 
  
  //signup(){
    //this.navCtrl.push(Login);
   // }
  

//export class Signup {

 // constructor(public navCtrl: NavController, public navParams: NavParams) {
 // }

 


