import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
// import { Observable } from 'rxjs';
import {AuthService} from '../auth/auth.service';
import { Auth } from '@aws-amplify/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise < boolean >  {

      // Algo
      // 1 check if there is logged in user by service method some getAuthUser() which shud return true or false
      // 2 if fails then
      const CS = await this.authService.checkLoggedIn();
      console.log('this.AuthGuard.isloggedIn', CS);

      try {
      const curAuthUser = await Auth.currentAuthenticatedUser();
      this.authService.authUserData = curAuthUser;
      this.authService.setUser(curAuthUser);
      console.log('this.authService.authUserData auth guard', this.authService.authUserData);
    } catch (err) {
      this.authService.authUserData = null;
      console.log('error happened', err);
    }

      return new Promise((resolve) => {
      Auth.currentAuthenticatedUser({bypassCache: false}).then(session => {
          // Do something with session.
          console.log('cur session in auth guard', session);
          // const curuserinfo = await Auth.currentUserInfo();
          // console.log ('auth guard current USER: ' + JSON.stringify(session));
          if (session) {
            this.router.navigate(['/home']);

            // resolve(true);
          }
        }).catch (err => {
            this.router.navigate(['/login']);
            this.authService.setUser(null);
            // window.alert('You are not logged in');
            resolve(false);
        });
      });

    }
  }
