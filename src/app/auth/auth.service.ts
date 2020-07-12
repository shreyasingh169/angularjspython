import { Injectable } from '@angular/core';
import { Hub } from '@aws-amplify/core';
import { Auth } from '@aws-amplify/auth';
import { BroadcastChannel } from 'broadcast-channel';

const channel = new BroadcastChannel('auth');

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState: { isLoggedIn: boolean; id: any; username: any; email: any; };
  initialAuthState = {
    isLoggedIn: false,
    username: null,
    id: null,
    email: null
  };
  isloggedIn: boolean;
  public authUserData: any;
  headers: any;
  constructor() {
    // test for amplify hub working
    Hub.listen('auth', (event) => {
      const { event: type, data, message } = event.payload;
      console.log('event ', event);

      if (type === 'signIn') {
         const session = data.signInUserSession;
         console.log('SESSION', message, data.signInUserSession);
         this.setUser(event.payload.data);
       }
      if (type === 'signOut') {
        this.setUser('');
        }
        // this is for broadcast channel only
      channel.postMessage({cmd: event.payload.event, message: event.payload.message});

    });

    // this.checkLoggedIn();
  }

  setUser(user: any) {
    if (!user) {
      return this.authState = this.initialAuthState;
    }
    const { attributes: { sub: id, email }, username } = user;
    this.authState = { isLoggedIn: true, id, username, email };
    console.log(this.authState);
    return this.authState;
  }


  async checkLoggedIn() {
      try {
        const CS = await Auth.currentSession();

        this.headers = CS.getIdToken().getJwtToken();

        console.log('cur session headers in auth service', CS, this.headers);
        const curuserinfo = await Auth.currentUserInfo();
        console.log ('current USER: ' + JSON.stringify(curuserinfo));
        return this.setUser(curuserinfo);
      } catch (err) {
        console.log('error happened', err);
      }

    }

    getAuthData() {
      return this.authUserData;
    }
}
