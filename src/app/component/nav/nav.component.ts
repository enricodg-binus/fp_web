import { Component, OnInit } from '@angular/core';
import { Categories } from '../../model/categories';
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
import {UserService} from '../../services/user.service';

declare let jQuery;

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
    chosenAddress: any;
    res: any;
    products: any[];
    private subscription: Subscription;
    total: number;

    constructor(private navService: NavServiceProviderService, private authService: AuthServiceProviderService,
                private productService: ProductService, private cartService: CartService,
                private router: Router, private alertService: AlertProviderService, private orderService: OrderService,
                private userService: UserService) {
    }

    checkAuth() {
        this.authService.validateToken().subscribe(
            res => {
                // console.log(localStorage.token);
                this.loggedIn = true;
                this.user_data = res;
                this.getCart();
                this.getAddress();
                this.initGetCart();
            },
            error => {
                this.loggedIn = false;
            }
        );
    }

    getCart() {
        this.subscription = this.cartService.CartState
            .subscribe((state: any) => {
                this.cart_data = state.cart_data;
                // console.log(state);
            });
    }

    initGetCart() {
        this.cartService.getAllcart_data().subscribe(
            res => {
                this.cart_data = res;
            }
        );
    }

    getAddress() {
        this.cartService.getAddressData().subscribe(
            res => {
                this.address_data = res;
            });
    }

    ngOnInit() {
        // this.getCategories();
        if (localStorage.getItem('token')) {
            this.checkAuth();
        }
        this.getCategories();
    }

    getCategories() {
        this.navService.getCategories().subscribe(
            categories_data => {
                this.categories_data = categories_data;
            });
    }

    toggleDropdown(id) {
        jQuery('#' + id).toggleClass('open');
    }

    search(form: NgForm): void {
        if (!form) {
            return;
        }
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
        this.cartService.validateCart().subscribe(
            res => {
                this.userService.validateAddress().subscribe(
                    res2 => {
                        // if (this.chosenAddress != null) {
                            this.total = 0;
                            for (const i of this.cart_data) {
                                this.total += Number(i.price);
                            }
                            this.orderService.createOrder(this.total, this.chosenAddress).subscribe(res1 => {
                                this.res = res1.msg;
                                this.cartService.deleteCart().subscribe(res3 => 'success');
                                window.alert(this.res);
                                this.router.navigate(['dashboard/request_order']);
                                window.location.reload(true);
                            }, err => {
                                this.alertService.error(err, false);
                            });
                        // } else {
                        //     this.alertService.error('Please choose an address!', false);
                        // }
                    }, err => {
                        this.alertService.error(err, false);
                    }
                );
                return res;
            }, err => {
                console.log(err);
                this.alertService.error(err, false);
            });
    }
}
