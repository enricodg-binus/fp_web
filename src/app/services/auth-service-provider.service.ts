import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {NgForm} from '@angular/forms';

@Injectable()
export class AuthServiceProviderService {

  token = localStorage.token;
  httpOptions;

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
      return this.http.post<any>('http://localhost:8000/api/login', { email: username, password: password })
          .map(user => {
              // login successful if there's a jwt token in the response
              if (user && user.token) {
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem('token', user.token);
                  // { status: 'haha', token: 'token' }
                  return user;
              }
          })
          .catch(err => {
              return Observable.throw(err);
          });
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('token');
      return this.http.get('http://localhost:8000/api/logout', this.httpOptions);
  }

  validateToken() {
    if (localStorage.token) {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': `Bearer ${localStorage.token}`
        })
      };
    }

    // const headers = {
    //   'Authorization': `Bearer ${this.currentUser.token}`
    // }


    return this.http.get<any>('http://localhost:8000/api/me', this.httpOptions)
        .map(user => {
            return user;
        });
  }

}
