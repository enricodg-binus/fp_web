import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {AuthServiceProviderService} from '../../services/auth-service-provider.service';
import {CartService} from '../../services/cart.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() cart_data: any;
    products: any[];
    private subscription: Subscription;

  constructor(private productService: ProductService, private authService: AuthServiceProviderService, private cartService: CartService) { }

  ngOnInit() {
      this.subscription = this.cartService.CartState
          .subscribe((state: any) => {
              this.products = state.products;
              console.log('haha');
              console.log(this.products);
          });
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
    this.cartService.removeProduct(id);
  }

}
