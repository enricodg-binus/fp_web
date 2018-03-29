import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavService} from '../../services/nav.service';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  product_data: any = {};
  keyword: any;
  error_msg: any;

  constructor(private route: ActivatedRoute, private navService: NavService,
              private productService: ProductService) { }

  ngOnInit() {
      this.route.queryParamMap.subscribe(params => {
          this.keyword = params.get('keyword');
          this.getSearchResult(this.keyword);
      });
  }

  getSearchResult(term: any) {
    this.navService.searchEntries(term).subscribe(
        res => {
            console.log(res);
          this.product_data = res;
        }, err => {
          this.error_msg = err;
        }
    );
  }

  getPage(link: any) {
      this.productService.getPage(link).subscribe( res => this.product_data = res);
  }

}
