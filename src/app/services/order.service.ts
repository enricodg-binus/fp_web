import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ApiProvider} from '../libraries/api';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class OrderService {

  baseUrl = 'http://localhost:8000/api/';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        })
    };

  constructor(private http: HttpClient) {
  }

    private orderSubject = new Subject<any>();
    order_data: any;
    orderState = this.orderSubject.asObservable();

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

    initRequestOrder() {
        this.http.get(this.baseUrl + 'view_request_order', this.httpOptions)
            .subscribe(res => {
                // console.log('from service', res);
                this.order_data = res;
                this.orderSubject.next(<any>{loaded: true, order_data: this.order_data});
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

    getOrderDetails(id: any) {
        return this.http.get(this.baseUrl + 'view_order_details/' + id, this.httpOptions)
            .map( res => {
                return res;
            })
            .catch( err => {
                return Observable.throw(err);
            });
    }

    cancelOrder(id: any) {
        return this.http.delete(this.baseUrl + 'delete_order/' + id, this.httpOptions)
            .subscribe(
            res => {
                this.initRequestOrder();
            }
        );
    }

    getShipmentAddress(id: any) {
        return this.http.get(this.baseUrl + 'shipment_address/' + id, this.httpOptions)
            .map( res => {
                return res;
            })
            .catch( err => {
                return Observable.throw(err);
            });
    }

    getOrderItems() {
        return this.http.get(this.baseUrl + 'order_item', this.httpOptions)
            .map( res => {
                return res;
            })
            .catch( err => {
                return Observable.throw(err);
            });
    }
}
