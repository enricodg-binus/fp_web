import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AlertProviderService} from './alert-provider.service';

@Injectable()
export class DashboardProviderService {

  baseUrl = 'http://localhost:8000/api/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': `Bearer ${localStorage.token}`
    })
  };

  constructor(private http: HttpClient, private alertService: AlertProviderService) { }

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

  addAddress(name: string, phone: string, address: string) {
    return this.http.post(this.baseUrl + 'insertuadd', { name: name, phone: phone, address: address }, this.httpOptions)
        .map( res => {
          return res;
        })
        .catch( err => {
          return Observable.throw(err);
        });
  }

  getUserAddress(): Observable<any> {
    return this.http.get(this.baseUrl + 'viewuadd', this.httpOptions);
  }

  deleteAddress(id: any) {
    return this.http.delete(this.baseUrl + 'deleteuadd/' + id, this.httpOptions, );
  }

}
