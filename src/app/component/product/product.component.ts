import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../services/product.service';
import {AuthServiceProviderService} from '../../services/auth-service-provider.service';
import {CartService} from '../../services/cart.service';
import {AlertProviderService} from '../../services/alert-provider.service';

@Component({
  selector: 'app-item',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() product_data: any;
  @Input() data_detail: any;
  loggedIn: any;

  constructor(private productService: ProductService, private authService: AuthServiceProviderService, private cartService: CartService, private alertService: AlertProviderService ) { }

  ngOnInit() {
    // console.log(this.product_data);
  }

  addToCart(id: any) {
    this.cartService.addProduct(id).subscribe(res => {
            this.cartService.init();
            console.log(res);
            this.alertService.notify(res, false);
            setTimeout(() => {
                         this.alertService.reset();
                     }, 2000);
            return true;
        }, err => {
            window.alert('Please login to buy our products');
            this.alertService.notify(err, false);
            setTimeout(() => {
                         this.alertService.reset();
                     }, 2000);
            console.log(err);
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
