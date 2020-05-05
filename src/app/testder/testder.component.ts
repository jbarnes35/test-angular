import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-testder',
  templateUrl: './testder.component.html',
  styleUrls: ['./testder.component.css']
})
export class TestderComponent implements OnInit {
  user: Observable<firebase.User>;
  inputDisplayName = '';
  inputEmail = '';
  inputPassword = '';

  private userData = {
    uid: null,
    email: null,
    displayName: null
  };

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  ngOnInit() {
    
  }

  signup() {
    const authC = this;
    this.firebaseAuth.auth.createUserWithEmailAndPassword(this.inputEmail,this.inputPassword).then(value=>{
      console.log("Success!",value);
      authC.userData.uid=value.user.uid;
      authC.userData.email=this.inputEmail;
      value.user.updateProfile({
        displayName: this.inputDisplayName
      }).then(()=>{
        console.log("Update Display Success")
        authC.userData.displayName=value.user.displayName
      })
    })
  }
}
