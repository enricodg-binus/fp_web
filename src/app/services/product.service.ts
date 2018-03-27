import { Injectable } from '@angular/core';
import {Product} from '../model/product';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiProvider} from '../libraries/api';

@Injectable()
export class ProductService {

  constructor(private api: ApiProvider) { }

  getAllProducts(link: string): Observable<any> {
    // http://localhost:8000/api/viewproduct?category=baju
    return this.api.get(`viewp/${link}`);
  // {params: { category: link } }
    // http://localhost:8000/api/viewproduct/baju
    // return this.http.get<any>('http://localhost:8000/api/viewproduct/' + link);
  }

  getProductDetail(link: string): Observable<any> {
    return this.api.get('viewpd');
  }

  getProduct(id: any) {
    return this.api.get(`product/${id}`);
  }

  checkout() {
    return this.api.post('insertorder', { });
  }

  removeItem(id: any) {
    return this.api.delete('delete_item_cart/${id}');
  }

  getVeritransURL(order_id: any) {
    return this.api.get(`veritrans_url/${order_id}`);
  }

  getPage(link: any) {
    return this.api.get(link);
  }

  validateQty(product_id: any, qty: number) {
      return this.api.get(`validateProductQty/${product_id}/${qty}`);
  }

  getTopProduct() {
    return this.api.get('view_top_product');
  }

}
