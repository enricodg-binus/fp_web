import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../services/product.service';
import {Product} from '../../model/product';

@Component({
  selector: 'app-category-results',
  templateUrl: './category-results.component.html',
  styleUrls: ['../home/home.component.scss']
})
export class CategoryResultsComponent implements OnInit {

  product_data: Product[] = [];
  product_detail: any;

  link: any;

  constructor(private router: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.router.params.subscribe(result => {
      this.link = result['category_name'];
    });

    this.getAllProducts(this.link);
    console.log(this.link);
  }

  getAllProducts(link: string) {
    this.productService.getAllProducts(link).subscribe(product_data => this.product_data = product_data);
  }

  getProductDetail(link: string) {
    this.productService.getProductDetail(link).subscribe(product_detail => this.product_detail = product_detail);
  }

}
