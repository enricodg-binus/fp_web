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
  cart_data: any;
  link: any;
    products: any[];
    private subscription: Subscription;

  constructor(private navService: NavServiceProviderService, private authService: AuthServiceProviderService,
              private productService: ProductService, private cartService: CartService, private router: Router) { }

  checkAuth() {
    // const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    this.authService.validateToken().subscribe(
      res => {
        this.loggedIn = true;
        this.user_data = res;
        console.log(this.user_data);
      },
      error => {
        this.loggedIn = false;
      }
    );
  }

  getCart() {
      // this.cartService.getAllProducts().subscribe(
      //     res => this.cart_data = res
      // );
      this.subscription = this.cartService.CartState
          .subscribe((state: any) => {
              this.cart_data = state.cart_data;
              console.log('haha');
              console.log(state);
          });
  }

  ngOnInit() {
    this.getCategories();
    this.checkAuth();
    this.getCart();
  }

  getCategories() {
    this.navService.getCategories().subscribe(categories_data => this.categories_data = categories_data);
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

  checkout() {
      this.productService.deleteCart().subscribe(res => 'success');
      this.productService.checkout();
      this.productService.getVeritransURL().subscribe(
          res => {
            this.link = res;
            window.open(res.url);
          }
      );
      console.log(this.link);
  }

}
