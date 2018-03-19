import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-item',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() product_data: any;
  @Input() data_detail: any;

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  addToCart(id: any, qty: any, price: any) {
    this.productService.addToCart(id, qty, price).subscribe(
      res => {
        console.log('trst'); });
  }

}
