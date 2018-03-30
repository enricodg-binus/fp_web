import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {NgForm} from '@angular/forms';
import {ApiProvider} from '../libraries/api';
import {isPlatformBrowser} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable()
export class AuthServiceProviderService {

  constructor(private api: ApiProvider, @Inject(PLATFORM_ID) private platformId: Object, private router: Router) { }

  login(username: string, password: string) {
      if (isPlatformBrowser(this.platformId)) {
          const data = { email: username, password: password };
          return this.api.post('login', { email: username, password: password })
              .map(user => {
                  console.log(user);
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
  }

  logout() {
      if (isPlatformBrowser(this.platformId)) {
          localStorage.clear();
          return this.api.get('logout');
      }
  }

  validateToken() {
      if (isPlatformBrowser(this.platformId)) {
          return this.api.get('me');
      }
  }

}
