import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  email:string;
  password:string;
  first_name: string;
  last_name: string;
  registerForm: FormGroup;
  confirmPassword:string;
  timer:any;
  maxTime:any;
  hidevalue:any;
  maxtime: any=30;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
  
    this.registerForm = new FormGroup({
      first_name: new FormControl(), 
      last_name: new FormControl(), 
      email: new FormControl(),
      password: new FormControl(),
      confirmPassword: new FormControl() 
    });
  }
  
    signUp(){
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(credentials=>this.navCtrl.push('LoginPage'))
    }
    

  ionViewDidLoad() {
    this.registerForm = this.formBuilder.group({
      first_name: ['', Validators.compose([Validators.required])],
      last_name: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      confirmPassword: ['', Validators.compose([Validators.required])]
    });
    console.log('ionViewDidLoad SignupPage');
  }

}
