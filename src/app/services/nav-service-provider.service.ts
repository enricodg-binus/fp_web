import { Injectable } from '@angular/core';
import { ApiProvider } from '../libraries/api';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class NavServiceProviderService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get('http://localhost:8000/api/tasks');
  }

}
