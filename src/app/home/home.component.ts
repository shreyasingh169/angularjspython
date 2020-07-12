// import { Component, OnInit } from '@angular/core';

import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { of, Observable, Observer, noop } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

interface GitHubUserSearchResponse {
  total_count: number;
  items: Stores[];
}
interface CategoryType {
  type: string;
}
interface Stores {
  name: string;
  location: string;
  category: CategoryType[];
  pincode: number;
  contactno: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ordersData = [''];
  orders = [];

  // suggestions$: Observable<Stores[]>;

  selected: object;
  suggestions: object = [
    'Alabama',
    'Alaska',
    'Arizona'];

  // this.suggestions$ = [{name : 'Nandini',
  //   category: {Confectionaries },
  //   location: 'Whitefield',
  //   pincode; : 560048,
  //   contactno; : 9900452908;
  // ]}

  ngOnInit(): void {
    // this.suggestions$ = new Observable((observer: Observer<string>) => {
    //   observer.next(this.search);
    // })
   }


}
