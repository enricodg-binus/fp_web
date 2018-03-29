import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {ApiProvider} from '../libraries/api';
import {AlertProviderService} from './alert.service';

@Injectable()
export class CartService {

    constructor(private api: ApiProvider, private alertService: AlertProviderService) {
        // console.log('constructor', localStorage.token);
        if (localStorage.getItem('token')) {
            this.init();
        }
    }

    private cartSubject = new Subject<any>();
    cart_data: any;
    CartState = this.cartSubject.asObservable();

    addProduct(_product: any) {
        // console.log(_product);
        return this.api.post('insertc',
            { product_id: _product, qty: 1});
        // console.log(this.CartState);
    }

    removeProduct(id: any) {
        return this.api.delete(`delete_item_cart/${id}`)
            .subscribe( res => {
                this.init();
            });
    }

    getAllcart_data(): Observable <any> {
        // console.log('from service', this.httpOptions);
        return this.api.get('viewc');
    }

    init() {
        this.api.get('viewc')
            .subscribe(res => {
                this.cart_data = res;
                this.cartSubject.next(<any>{loaded: true, cart_data: this.cart_data});
            });
    }

    deleteCart() {
        return this.api.delete('deletec');
    }

    addToCart(id: any, qty: any, price: any) {
        return this.api.post('insertc', { product_id: id, qty: qty, price: price });
    }

    getAddressData() {
        return this.api.get('viewuadd');
    }

    validateCart() {
        return this.api.get('validateCart');
    }

    updateCart(product_id: any, qty: any) {

        return this.api.put('update_cart_qty',  { product_id: product_id, qty: qty});
    }

}
