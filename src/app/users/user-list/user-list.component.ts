import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {User} from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  list: User[];

  constructor(private userService: UsersService) { }

  ngOnInit() {
    // this.getConfig();
  }

  // getConfig() {
  //   this.userService.getList().subscribe(data => {
  //     this.list = data;
  //     console.log(this.list);

  //   } );

  // }
}
