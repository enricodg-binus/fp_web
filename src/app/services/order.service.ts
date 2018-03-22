import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class OrderService {

  baseUrl = 'http://localhost:8000/api/insert';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        })
    };

  constructor(private http: HttpClient) { }

  createOrder(total: any) {
    this.http.post(this.baseUrl + 'inserto', { order_status: 'Menunggu Pembayaran', total_price: total }, this.httpOptions)
        .map( res => {
          return res;
        })
        .catch( err => {
          return Observable.throw(err);
        });
  }
}
