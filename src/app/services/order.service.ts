import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ApiProvider} from '../libraries/api';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class OrderService {

  constructor(private api: ApiProvider) {
  }

    private orderSubject = new Subject<any>();
    order_data: any;
    orderState = this.orderSubject.asObservable();

  createOrder(total: number, address_id: any) {
      return this.api.post('order',
          { order_status: 'Waiting For Payment', total_price: total , payment_status: 'Waiting Confirmation',
              shipment_address_id: address_id });
  }

    initRequestOrder() {
        this.api.get('request_order')
            .subscribe(res => {
                this.order_data = res;
                this.orderSubject.next(<any>{loaded: true, order_data: this.order_data});
            });
    }

    getRequestOrder(): Observable<any> {
        return this.api.get('request_order');
    }

    getStatusOrder(): Observable<any> {
        return this.api.get('order');
    }

    getOrderDetails(id: any) {
        return this.api.get(`order_items/${id}`);
    }

    cancelOrder(id: any) {
        return this.api.delete(`order/${id}`)
            .subscribe(
            res => {
                this.initRequestOrder();
            }
        );
    }

    getShipmentAddress(id: any) {
        return this.api.get(`shipment_address/${id}`);
    }

    getOrderItems() {
        return this.api.get('orderitem');
    }

    getCompleteOrder() {
      return this.api.get(`complete_order`);
    }
}
