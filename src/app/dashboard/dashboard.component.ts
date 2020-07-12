import { Component, OnInit, APP_ID } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import API from '@aws-amplify/api';
import Amplify from '@aws-amplify/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {

    async function callApi() {
      const options = {  headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }};

      try {
        const items = await API.get('seller', '/items', options);
        console.log('myitems', items);
      } catch (err) {
        console.log('myitems err', err);
      }
    }
    callApi();
   }

    async ngOnInit() {
    const options = {
      headers: {} // OPTIONAL
    };
    console.log('items', API);

   }
   login(st: string) {
        this.router.navigate(['/login'], { queryParams: {status: st }});
  }
}
