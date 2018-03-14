import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {NgForm} from '@angular/forms';

@Injectable()
export class AuthServiceProviderService {

  currentUser = JSON.parse(localStorage.getItem('currentUser'));
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ${currentUser.token}'
    })
  };

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
      return this.http.post<any>('http://localhost:8000/api/login', { email: username, password: password })
          .map(user => {
              // login successful if there's a jwt token in the response
              if (user && user.token) {
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem('currentUser', JSON.stringify(user));
              }

              return user;
          });
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
  }

  validateToken() {
    const current_user = JSON.parse(localStorage.getItem('currentUser'));
    console.log(current_user.email);

    return this.http.post<any>('http://localhost:8000/api/validatetoken', { email: current_user.email }, this.httpOptions)
        .map(user => {
            console.log(user);
            return user;
        });
  }

}
