import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../../services/product.service';
import {CartService} from '../../../services/cart.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent implements OnInit {

    link: any;
    product_data;

    constructor(private router: ActivatedRoute, private productService: ProductService,
                private cartService: CartService) {
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

        this.cartService.addProduct(id);
    }

}
