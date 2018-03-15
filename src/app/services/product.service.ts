import { Injectable } from '@angular/core';
import {Product} from '../model/product';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts(link: string): Observable<any> {
    // http://localhost:8000/api/viewproduct?category=baju
    return this.http.get<any>('http://localhost:8000/api/viewproduct', {params: { category: link } });

    // http://localhost:8000/api/viewproduct/baju
    // return this.http.get<any>('http://localhost:8000/api/viewproduct/' + link);
  }

}
