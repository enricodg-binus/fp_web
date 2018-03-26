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
      return this.api.post('inserto',
          { order_status: 'Waiting for payment', total_price: total , payment_status: 'Waiting Confirmation',
              shipment_address_id: address_id });
  }

    initRequestOrder() {
        this.api.get('view_request_order')
            .subscribe(res => {
                this.order_data = res;
                this.orderSubject.next(<any>{loaded: true, order_data: this.order_data});
            });
    }

    getRequestOrder(): Observable<any> {
        return this.api.get('view_request_order');
    }

    getStatusOrder(): Observable<any> {
        return this.api.get('view_order');
    }

    getOrderDetails(id: any) {
        return this.api.get(`view_order_items/${id}` + id);
    }

    cancelOrder(id: any) {
        return this.api.delete(`delete_order/${id}`)
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
        return this.api.get('order_item');
    }
}
