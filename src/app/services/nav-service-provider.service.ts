import { Injectable } from '@angular/core';
import { ApiProvider } from '../libraries/api';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class NavServiceProviderService {

  queryUrl = '?search=';

  constructor(private http: HttpClient, private  api: ApiProvider) { }

  getCategories(): Observable<any> {
    return this.api.get('viewcat');
  }

  searchEntries(term) {
      return this.api
          .get(this.queryUrl + term)
          .map(res => {
            return res;
          });
  }


}
