import { Component, OnInit } from '@angular/core';
import { Categories } from './categories';
import { NavServiceProviderService } from '../../services/nav-service-provider.service';
import {Observable} from 'rxjs/Observable';
import {AuthServiceProviderService} from '../../services/auth-service-provider.service';
import {Router} from '@angular/router';
import {Subject} from 'rxjs/Subject';
import {NgForm} from '@angular/forms';
import {User} from '../../model/user';
import {ProductService} from '../../services/product.service';
import {Subscription} from 'rxjs/Subscription';
import {CartService} from '../../services/cart.service';
import {AlertProviderService} from '../../services/alert-provider.service';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  categories_data: Categories[];
  loggedIn = false;
  results: any;
  searchTerm: string;
  user_data: any;
  address_data: any;
  cart_data: any;
    products: any[];
    private subscription: Subscription;
    total: number;

  constructor(private navService: NavServiceProviderService, private authService: AuthServiceProviderService,
              private productService: ProductService, private cartService: CartService,
              private router: Router, private alertService: AlertProviderService, private orderService: OrderService) { }

  checkAuth() {
    this.authService.validateToken().subscribe(
      res => {
        this.loggedIn = true;
        this.user_data = res;
        this.getCart();
        this.getAddress();
        // console.log(this.user_data);
      },
      error => {
        this.loggedIn = false;
      }
    );
  }

  getCart() {
      this.cartService.getAllcart_data().subscribe(
          res => {
              this.cart_data = res;
              }, err => {
              // this.alertService.error(err, false);
          });
      this.subscription = this.cartService.CartState
          .subscribe((state: any) => {
              this.cart_data = state.cart_data;
              console.log(state);
          });
  }

  getAddress() {
      this.cartService.getAddressData().subscribe(
          res => {
              this.address_data = res;
          }, err => {
              // this.alertService.error(err, false);
        });
  }

  ngOnInit() {
    this.getCategories();
    this.checkAuth();
  }

  getCategories() {
    this.navService.getCategories().subscribe(
        categories_data => {
            this.categories_data = categories_data;
        });
  }

  search(form: NgForm): void {
    if (!form) { return; }
    this.searchTerm = form.value.searchTerm;
      this.navService.searchEntries(this.searchTerm)
          .subscribe(results => {
              this.results = results;
              console.log(this.searchTerm);
          });
  }

  addAddress() {
      window.location.reload(true);
      this.router.navigate(['dashboard/add_address']);
  }

  checkout() {
      if (this.address_data != null && this.cart_data != null ) {
          this.total = 0;
          console.log(this.cart_data);
          for (const i of this.cart_data) {
              this.total += Number(i.price);
          }
          console.log(this.total);
          this.orderService.createOrder(this.total).subscribe( res1 => 'success');
          this.cartService.deleteCart().subscribe(res => 'success');
      } else {
      }
  }
}
