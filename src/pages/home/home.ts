import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  signUp(){
    this.navCtrl.push('SignupPage')
  }
  signIn(){
    this.navCtrl.push('LoginPage')
  }
  googleSign(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result)=>{
      this.navCtrl.push('ContentPage'),
      console.log(result)});
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  ionViewDidEnter() {
   

   
  
    
  }

}
