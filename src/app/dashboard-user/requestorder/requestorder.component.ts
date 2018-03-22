import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../services/order.service';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-requestorder',
  templateUrl: './requestorder.component.html',
  styleUrls: ['../dashboard-sidebar.component.css']
})
export class RequestorderComponent implements OnInit {

  request_order_data: any;
  link: any = {};

  constructor(private orderService: OrderService, private productService: ProductService) { }

  ngOnInit() {
    this.displayRequestOrder();
  }

  displayRequestOrder() {
    this.orderService.getRequestOrder().subscribe(res => this.request_order_data = res);
  }

  getPaymentURL(order_id: any) {
      this.productService.getVeritransURL(order_id).subscribe(
          res => {
              this.link = res;
              window.open(this.link.url);
          }
      );
  }

}
