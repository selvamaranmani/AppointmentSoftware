import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AuthService } from "../../providers/auth-service/auth-service";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  responseData: any;
  userData = { "username": "", "password": "" };

  constructor(public navCtrl: NavController, public authService: AuthService, private toastCtrl: ToastController) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login() {
    // Your app login API web service call triggers 
    if (this.userData.username && this.userData.password) {
      this.authService.postData(this.userData, "login").then((result) => {
        this.responseData = result;
        console.log(this.responseData);
        if (this.responseData.userData) {
          localStorage.setItem('userData', JSON.stringify(this.responseData));
          this.navCtrl.push(TabsPage);
        }
        else {
          this.presentToast("Please Enter Valid Username and Password");
        }

      }, (err) => {
        // Error log
      });
    }
    else {
      this.presentToast("Enter Username and Password");
    }

  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

}
