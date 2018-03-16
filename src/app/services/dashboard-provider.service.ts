import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class DashboardProviderService {

  baseUrl = 'https://localhost:8000/api/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': `Bearer ${localStorage.token}`
    })
  };

  constructor(private http: HttpClient) { }

  getUser(): Observable<any> {
    return this.http.get(this.baseUrl + 'me', this.httpOptions);
  }

  getRequestOrder(): Observable<any> {
    return this.http.get(this.baseUrl + 'viewio', this.httpOptions);
  }

  getStatusOrder(): Observable<any> {
    return this.http.get(this.baseUrl + 'viewso', this.httpOptions);
  }

  getPaymentInfo(): Observable<any> {
    return this.http.get(this.baseUrl + 'viewpi', this.httpOptions);
  }

}
