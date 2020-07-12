import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from './user';
import { Observable } from 'rxjs';
// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' },
//   {'Access-Control-Allow-Origin' : * })
// };
const httpOptions = {
headers : new HttpHeaders('Access-Control-Allow-Origin: *')
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // configUrl = 'http://www.mocky.io/v2/5e919a643300001455e9cf72';
  configUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  // methods
  saveUser(): Observable<User[]> {
    return this.http.get<User[]>(this.configUrl + '/users/saveUser', httpOptions);
  }
}
