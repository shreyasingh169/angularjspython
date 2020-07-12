import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
// import { Observable } from 'rxjs';
import {AuthService} from '../auth/auth.service';
import Auth from '@aws-amplify/auth';

@Injectable({
  providedIn: 'root'
})
export class LoggedInAuthGuard implements CanActivate {
  isAuthenticated: boolean;
  constructor(private authService: AuthService, private route: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise <boolean> {
      return new Promise((resolve) => {
        // this.authService.checkLoggedIn().then(res => {
          Auth.currentAuthenticatedUser({bypassCache: false}).then(session => {
        console.log('ressss ', session);
        resolve(true);
        }).catch (err => {
          this.route.navigate(['/dashboard']);

          resolve(false);
          console.log('ressss ', err);

            });
          });
      // }

      // if (this.authService.authState) {
      //   return true;
      // } else {
      //   this.route.navigate(['/login']);
      //   return false;
      // }
  }
}
