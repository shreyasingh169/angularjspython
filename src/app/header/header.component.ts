import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { BroadcastChannel } from 'broadcast-channel';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import Auth from '@aws-amplify/auth';

// broadcast-channel
const channel = new BroadcastChannel('auth');

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;
  showOnUI: any;
  public isMenuCollapsed = true;
  @Input() page: string;
  @Input() headerControls: TemplateRef<any>;

  constructor(private authService: AuthService, private route: Router) { }

  login(st: string) {
    this.route.navigate(['/login'], { queryParams: {status: st }});
}


  setDataUI(msg: any) {
    console.log('this.showonui ', this.showOnUI);
    this.showOnUI = msg;
  }

  signOutAWS() {
    Auth.signOut()
     .then(data => {
       console.log('signoutAWS', data);
       this.isLoggedIn = false;
       this.route.navigate(['']);
   })
     .catch(err => {
       console.log('signoutAWS', err);
     });
 }


  ngOnInit() {
    channel.onmessage = (messageEvent) => {
      const data = messageEvent.cmd;
      // If our broadcast message is 'update_title' then get the new title from localStorage
      switch (data) {
        case 'signIn':
          if (data.message) {
            this.setDataUI(data.message);
            this.isLoggedIn = true;
            console.log('data.message', data.message);
          }
          break;
          case 'signOut':
            if (data.message) {
              this.setDataUI(data.message);
              this.isLoggedIn = false;
              console.log('data.message', data.message);
            }
            break;
          default:
          console.log('we received a message');
      }
    };
  }



}
