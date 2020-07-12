import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { AuthService } from './auth/auth.service';
import Auth from '@aws-amplify/auth';
// import { Router } from '@angular/router';
// import Auth from '@aws-amplify/auth';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  constructor(private swUpdate: SwUpdate, private authService: AuthService) {
  }

   ngOnInit() {

    if (this.swUpdate.isEnabled) {
        this.swUpdate.available.subscribe(() => {
            if (confirm('New version available. Load New Version?')) {
                window.location.reload();
            }
        });
    }
  }

}
