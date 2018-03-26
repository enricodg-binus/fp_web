import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {NgForm} from '@angular/forms';
import {ApiProvider} from '../libraries/api';

@Injectable()
export class AuthServiceProviderService {

  token = localStorage.token;

  constructor(private api: ApiProvider, private http: HttpClient) { }

  login(username: string, password: string) {
      const data = { email: username, password: password };
      return this.api.post('login', { email: username, password: password })
          .map(user => {
              // login successful if there's a jwt token in the response
              if (user && user.token) {
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem('token', user.token);
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
      return this.api.get('logout');
  }

  validateToken() {
      if (localStorage.token) {
          return this.api.get('me');
      }
  }

}
