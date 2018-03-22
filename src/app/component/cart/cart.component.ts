import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {AuthServiceProviderService} from '../../services/auth-service-provider.service';
import {CartService} from '../../services/cart.service';
import {Subscription} from 'rxjs/Subscription';
import {OrderService} from '../../services/order.service';
import {AlertProviderService} from '../../services/alert-provider.service';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() cart_data: any;
    products: any[];
    private subscription: Subscription;
    link: any;
    total: number;

  constructor(private productService: ProductService, private authService: AuthServiceProviderService, private cartService: CartService,
              private orderService: OrderService, private alertService: AlertProviderService) { }

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

    getPaymentURL() {
        // this.productService.deleteCart().subscribe(res => 'success');
        this.total = 0;
        console.log(this.cart_data);
        for (let i of this.cart_data) {
            this.total += Number(i.price);
        }
        console.log(this.total);
        this.productService.getVeritransURL().subscribe(
            res => {
                this.link = res;
                window.open(this.link.url);
            }
        );
    }

  makeOrder(total: any) {
      this.orderService.createOrder(total).subscribe(
          res => {
              this.alertService.success(res, false);
          }, err => {
              this.alertService.error(err, false);
          }
      );
  }

  removeItem(id: any) {
      this.cartService.removeProduct(id);
  }

}
