import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  product_data: any = {};

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  getMostPopularProduct() {
    this.productService.getTopProduct().subscribe(
        res => {
          this.product_data = res;
        }, err => {
        }
    );
  }

}
