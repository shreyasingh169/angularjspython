import { Component, OnInit } from '@angular/core';
// import  from '@aws-amplify/core';
import { Auth } from '@aws-amplify/auth';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { UploadService } from '../services/upload.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signstatus = 'signin';
  toVerifyEmail = false;
  userName: string;
  isLoggedIn = false;
  constructor(private route: Router, private actroute: ActivatedRoute,
              private authService: AuthService, private appService: UploadService) {}
  ngOnInit() {
      console.log('this.authService.authUserData ', this.authService.authUserData);
      if (this.authService.authUserData) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }

      if (this.actroute.snapshot.queryParams.status === 'login') {
        this.signstatus = 'login';
      } else {
        this.signstatus = 'signup';
      }

      console.log('signstatus ',  this.actroute.snapshot.queryParams);
  }
  onSignUp() {
    this.signstatus = 'signup';
  }

  onSignIn() {
    this.signstatus = 'signin';
  }

  singUpToAWS(email: HTMLInputElement, contactNo: HTMLInputElement, username: HTMLInputElement, password: HTMLInputElement) {
    this.userName = username.value;

    const user = {
      username: username.value,
      password: password.value,
      attributes: {
          email: email.value,          // optional
          // phone_number: contactNo.value,   // optional - E.164 number convention
          // other custom attributes
      }
    };

    Auth.signUp(user)
      .then(data => {
        console.log(data);
        this.toVerifyEmail = true;
        this.signstatus = '';
      })
      .catch(err => console.log(err));
  // Auth.resendSignUp(username).then(() => {
  //     console.log('code resent successfully');
  // }).catch(e => {
  //     console.log(e);
  // });

  }

  onVerify(verifycode: HTMLInputElement) {
    // After retrieving the confirmation code from the user
    Auth.confirmSignUp(this.userName, verifycode.value, {
      // Optional. Force user confirmation irrespective of existing alias.
      //  By default set to True.
      forceAliasCreation: true
      }).then(data => {
        console.log(data);
        this.toVerifyEmail = false;
        this.signstatus = 'signin';
      })
        .catch(err => console.log(err));
  }

  async signInToAWS(username: HTMLInputElement, password: HTMLInputElement ) {

    const authInfo = {
      username: username.value,
      password: password.value
    };

    await Auth.signIn(authInfo).then(user => {
      console.log('in logincomponent');
      this.isLoggedIn = true;
      // this.hideAll = true;
      this.route.navigate(['home']);
      // const session = Auth.currentSession();
    }).catch(err => console.log(err));

  }



}
