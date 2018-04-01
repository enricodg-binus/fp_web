import {Inject, Injectable, OnInit, PLATFORM_ID} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {ApiProvider} from '../libraries/api';
import {AlertProviderService} from './alert.service';
import {isPlatformBrowser} from '@angular/common';
import {AuthServiceProviderService} from './auth.service';

@Injectable()
export class CartService {

    constructor(private api: ApiProvider, private alertService: AlertProviderService, @Inject(PLATFORM_ID) private platformId: Object,
                private authService: AuthServiceProviderService) {
        // console.log('constructor', localStorage.token);
        this.checkAuth();
    }

    private cartSubject = new Subject<any>();
    cart_data: any;
    CartState = this.cartSubject.asObservable();

    checkAuth() {
        if (isPlatformBrowser(this.platformId)) {
            if (localStorage.getItem('token')) {
                this.init();
            }
        }
    }

    addProduct(_product: any) {
        // console.log(_product);
        return this.api.post('cart',
            { product_id: _product, qty: 1});
        // console.log(this.CartState);
    }

    removeProduct(id: any) {
        return this.api.delete(`cart/${id}`)
            .subscribe( res => {
                this.init();
            });
    }

    getAllcart_data(): Observable <any> {
        // console.log('from service', this.httpOptions);
        return this.api.get('cart');
    }

    init() {
        this.api.get('cart')
            .subscribe(res => {
                this.cart_data = res;
                this.cartSubject.next(<any>{loaded: true, cart_data: this.cart_data});
            });
    }

    deleteCart() {
        return this.api.delete('cart');
    }

    addToCart(id: any, qty: any, price: any) {
        return this.api.post('cart', { product_id: id, qty: qty, price: price });
    }

    getAddressData() {
        return this.api.get('address');
    }

    validateCart() {
        return this.api.get('validateCart');
    }

    updateCart(product_id: any, qty: any) {

        return this.api.put('cart',  { product_id: product_id, qty: qty});
    }

}
