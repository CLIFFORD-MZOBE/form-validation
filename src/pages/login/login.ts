import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email:string;
  password:string;
  registerForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.registerForm = new FormGroup({ 
      email: new FormControl(),
      password: new FormControl(),
      
    });
  }
  
  signIn(){
    firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((credentials)=>{this.navCtrl.push('ContentPage')
    console.log(credentials)})
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
