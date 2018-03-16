import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart_data: any;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getCart();
  }

  getCart() {
    this.productService.getCart().subscribe(
      res => this.cart_data = res
    );
  }

  checkout() {
    this.productService.deleteCart().subscribe(res => 'success');
    this.productService.checkout();
  }

}
