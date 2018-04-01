import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../../services/product.service';
import {CartService} from '../../../services/cart.service';
import {AlertProviderService} from '../../../services/alert.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent implements OnInit {

    link: any;
    product_data: any = {};

    constructor(private router: ActivatedRoute, private productService: ProductService,
                private cartService: CartService, private alertService: AlertProviderService) {
    }

    ngOnInit() {
        this.router.params.subscribe(result => {
            this.link = result['product_id'];
        });

        this.getProduct(this.link);
    }

    getProduct(id: any) {
        this.productService.getProduct(id).subscribe(
            res => {
                this.product_data = res;
            }, err => {
            }
        );
    }

    addToCart(id: any) {
        this.cartService.addProduct(id).subscribe(res => {
            this.cartService.init();
            // console.log(res);
            this.alertService.notify(res, false);
            setTimeout(() => {
                this.alertService.reset();
            }, 2000);
            return true;
        }, err => {
            window.alert('Please login to buy our products');
        });
    }

}
