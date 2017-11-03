import { Component } from '@angular/core';
import { NavController, App, AlertController } from 'ionic-angular';
import {AuthService} from "../../providers/auth-service/auth-service";
import {Common} from "../../providers/common/common";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html' 
})
export class AboutPage {
  public userDetails : any;
  public responseData : any;
  public dataSet : any;
  userPostData = {"user_id":"","token":"","feed":"","feed_id":""};

 constructor(public navCtrl: NavController, public app: App, public authService: AuthService, private alertCtrl: AlertController, public common: Common){
  const data = JSON.parse(localStorage.getItem('userData'));
  this.userDetails = data.userData;
  this.userPostData.user_id = this.userDetails.user_id;
  this.userPostData.token = this.userDetails.token;

  this.getFeed();
 }
 getFeed(){
   this.common.presentLoading();
  // this.common.closeLoading();
   this.authService.postData(this.userPostData,"feed").then((result) => {
   this.responseData = result;
    if(this.responseData.feedData){
      this.common.closeLoading();
    this.dataSet = this.responseData.feedData;
    //console.log(this.dataSet);
  }
  else{
    console.log("No Access");
  }
  }, (err) => {
    // Error log
 });
 }
 feedUpdate(){
   if(this.userPostData.feed){
    this.common.presentLoading();
    //this.common.closeLoading();
  this.authService.postData(this.userPostData,"feedUpdate").then((result) => {
    this.responseData = result;
     if(this.responseData.feedData){
      this.common.closeLoading();
     this.dataSet.unshift(this.responseData.feedData);
     this.userPostData.feed="";
     //console.log(this.dataSet);
   }
   else{
     console.log("No Access");
   }
   }, (err) => {
     // Error log
  });
 }
}
 feedDelete(feed_id, msgIndex){
  if(feed_id > 0){

    let alert = this.alertCtrl.create({
      title: 'Delete Feed',
      message: 'Do you want to delete this feed?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: ()=>{
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          handler: ()=>{
            this.userPostData.feed_id = feed_id;
            this.authService.postData(this.userPostData,"feedDelete").then((result) => {
              this.responseData = result;
               if(this.responseData.success){
               this.dataSet.splice(msgIndex,1);   
              }
             else{
               console.log("No Access");
             }
             }, (err) => {
               // Error log
            });
          }
        }
      ]
    });
    alert.present();


    
   }
 }
 converTime(time){
   let a = new Date(time*1000);
   return a;
 }
 backToWelcome(){
   const root = this.app.getRootNav();
   root.popToRoot();
 }
logout(){
  localStorage.clear();  
  setTimeout(()=>this.backToWelcome(),1000); 
}
}


