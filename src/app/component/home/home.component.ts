import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  product_data: any;
  obj: any = {};

  constructor(private productService: ProductService) { }

  ngOnInit() {
      this.getMostPopularProduct();
  }

  getMostPopularProduct() {
    this.productService.getTopProduct().subscribe(
        res => {

            this.obj = res;
            console.log(this.obj.data);
          this.product_data = this.obj.data;
        });
  }
}
