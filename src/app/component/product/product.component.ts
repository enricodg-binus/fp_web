import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-item',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() data: any;
  @Input() data_detail: any;

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  addToCart() {
    this.productService.addToCart().subscribe(
      res => {
        console.log('trst'); });
  }

  addToCartDetail() {
    // this.productService.addToCartDetail().subscribe(res => {
    //   'test';
    // });
  }

}
