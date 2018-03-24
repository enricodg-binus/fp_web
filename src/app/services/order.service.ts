import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class OrderService {

  baseUrl = 'http://localhost:8000/api/';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        })
    };

  constructor(private http: HttpClient) { }

  createOrder(total: number, address_id: any) {
      return this.http.post(this.baseUrl + 'inserto',
          { order_status: 'Menunggu Pembayaran', total_price: total , payment_status: 'Menunggu Pembayaran',
              shipment_address_id: address_id }, this.httpOptions)
          .map( res => {
              return res;
          })
          .catch( err => {
              return Observable.throw(err);
          });
  }

    getRequestOrder(): Observable<any> {
        return this.http.get(this.baseUrl + 'view_request_order', this.httpOptions)
            .map( res => {
                return res;
            })
            .catch( err => {
                return Observable.throw(err);
            });
    }

    getStatusOrder(): Observable<any> {
        return this.http.get(this.baseUrl + 'view_order', this.httpOptions)
            .map( res => {
                return res;
            })
            .catch( err => {
                return Observable.throw(err);
            });
    }

    getOrderDetails(id: any): Observable<any> {
        return this.http.get(this.baseUrl + 'view_order_details/' + id, this.httpOptions)
            .map( res => {
                return res;
            })
            .catch( err => {
                return Observable.throw(err);
            });
    }
}
