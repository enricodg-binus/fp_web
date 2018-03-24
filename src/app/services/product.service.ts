import { Injectable } from '@angular/core';
import {Product} from '../model/product';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class ProductService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': `Bearer ${localStorage.token}`
    })
  };

  constructor(private http: HttpClient) { }

  getAllProducts(link: string): Observable<any> {
    // http://localhost:8000/api/viewproduct?category=baju
    return this.http.get<any>('http://localhost:8000/api/viewp/' + link);
  // {params: { category: link } }
    // http://localhost:8000/api/viewproduct/baju
    // return this.http.get<any>('http://localhost:8000/api/viewproduct/' + link);
  }

  getProductDetail(link: string): Observable<any> {
    return this.http.get('http://localhost:8000/api/viewpd/');
  }

  getProduct(id: any) {
    return this.http.get('http://localhost:8000/api/product/' + id, this.httpOptions);
  }

  checkout() {
    return this.http.post('http://localhost:8000/api/insertorder', { }, this.httpOptions);
  }

  removeItem(id: any) {
    return this.http.delete('http://localhost:8000/api/delete_item_cart/' + id, this.httpOptions);
  }

  getVeritransURL(order_id: any) {
    return this.http.get<any>('http://localhost:8000/api/veritrans_url/' + order_id, this.httpOptions);
  }

}
