import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class CartService {

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        })
    };

    constructor(private http: HttpClient) {
        // console.log('constructor', localStorage.token);
        this.init();
    }

    private cartSubject = new Subject<any>();
    cart_data: any;
    CartState = this.cartSubject.asObservable();

    addProduct(_product: any) {
        console.log(_product);
        this.http.post('http://localhost:8000/api/insertc',
            { product_id: _product.id, qty: 1, price: _product.product_price }, this.httpOptions)
            .subscribe(res => {
                this.init();
            });
        // console.log(this.CartState);
    }

    removeProduct(id: any) {
        this.http.delete('http://localhost:8000/api/delete_item_cart/' + id, this.httpOptions)
            .subscribe( res => {
                this.init();
            });
    }

    getAllcart_data(): Observable <any> {
        // console.log('from service', this.httpOptions);
        return this.http.get('http://localhost:8000/api/viewc', this.httpOptions).map(res => {
            return res;
        })
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }

    init() {
        this.http.get('http://localhost:8000/api/viewc', this.httpOptions)
            .subscribe(res => {
                this.cart_data = res;
                this.cartSubject.next(<any>{loaded: true, cart_data: this.cart_data});
            });
    }

    deleteCart() {
        return this.http.delete('http://localhost:8000/api/deletec', this.httpOptions);
    }

    addToCart(id: any, qty: any, price: any) {
        return this.http.post('http://localhost:8000/api/insertc', { product_id: id, qty: qty, price: price }, this.httpOptions);
    }

    getAddressData() {
        return this.http.get('http://localhost:8000/api/viewuadd', this.httpOptions);
    }

    validateCart() {
        return this.http.get('http://localhost:8000/api/validateCart', this.httpOptions)
            .map( res => {
                return res;
            }).catch( err => {
                return Observable.throw(err);
            });
    }

    updateCart(product_id: any, qty: any) {

        return this.http.put('http://localhost:8000/api/update_cart_qty', { product_id: product_id, qty: qty}, this.httpOptions)
            .map( res => {
                return res;
            }).catch( err => {
                return Observable.throw(err);
            });
    }

}
