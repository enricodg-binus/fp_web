import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {AuthServiceProviderService} from '../../services/auth-service-provider.service';
import {CartService} from '../../services/cart.service';
import {Subscription} from 'rxjs/Subscription';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() cart_data: any;
    products: any[];
    private subscription: Subscription;
    update_qty: any;
    formattedAmount: any;

  constructor(private productService: ProductService, private authService: AuthServiceProviderService, private cartService: CartService,
              private orderService: OrderService) { }

  ngOnInit() {
      this.subscription = this.cartService.CartState
          .subscribe((state: any) => {
              this.products = state.products;
              // console.log(this.products);
          });
  }

  removeItem(id: any) {
      this.cartService.removeProduct(id);
  }

  updateCart(cart_id: any, qty: any) {
      this.cartService.updateCart(cart_id, qty).subscribe( res => res);
  }
}
