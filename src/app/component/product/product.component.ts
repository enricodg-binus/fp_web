import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../services/product.service';
import {AuthServiceProviderService} from '../../services/auth-service-provider.service';

@Component({
  selector: 'app-item',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() product_data: any;
  @Input() data_detail: any;
  loggedIn: any;

  constructor(private productService: ProductService, private authService: AuthServiceProviderService) { }

  ngOnInit() {
    this.validateToken();
  }

  addToCart(id: any, qty: any, price: any) {
    this.productService.addToCart(id, qty, price).subscribe(
      res => {
         });
  }

  validateToken() {
    this.authService.validateToken().subscribe(
        res => {
          this.loggedIn = true;
          return true;
        }, err => {
          return false;
        }
    );
  }

}
