import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {AuthServiceProviderService} from '../../services/auth-service-provider.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() cart_data: any;

  constructor(private productService: ProductService, private authService: AuthServiceProviderService) { }

  ngOnInit() {
  }

  validateToken() {
      this.authService.validateToken().subscribe(
          res => {
            return true;
          }, err => {
            return false;
          }
      );
  }

  removeItem(id: any) {
    this.productService.removeItem(id).subscribe(
        res => this.cart_data = res
    );
  }

  checkout() {
    this.productService.deleteCart().subscribe(res => 'success');
    this.productService.checkout();
  }

}
