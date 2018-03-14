import { Injectable } from '@angular/core';
import { ApiProvider } from '../libraries/api';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class NavServiceProviderService {

  baseUrl = 'https://localhost:8000/api/';
  queryUrl = '?search=';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get(this.baseUrl + 'api/viewcat');
  }

  searchEntries(term) {
      return this.http
          .get(this.baseUrl + this.queryUrl + term)
          .map(res => {
            return res;
          });
  }


}
