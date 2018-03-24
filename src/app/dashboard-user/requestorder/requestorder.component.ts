import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../services/order.service';
import {ProductService} from '../../services/product.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-requestorder',
  templateUrl: './requestorder.component.html',
  styleUrls: ['../dashboard-sidebar.component.css']
})
export class RequestorderComponent implements OnInit {

  request_order_data: any;
  link: any = {};
    private subscription: Subscription;

  constructor(private orderService: OrderService, private productService: ProductService) { }

  ngOnInit() {
    this.displayRequestOrder();
  }

  displayRequestOrder() {
    this.orderService.getRequestOrder().subscribe(res => this.request_order_data = res);
      this.subscription = this.orderService.orderState
          .subscribe((state: any) => {
              console.log(state.order_data);
              this.request_order_data = state.order_data;
              // console.log(this.products);
          });
  }

  getPaymentURL(order_id: any) {
      this.productService.getVeritransURL(order_id).subscribe(
          res => {
              this.link = res;
              window.open(this.link.url);
          }
      );
  }

  cancelOrder(order_id: any) {
      if (confirm('Are you sure to delete ' + order_id)) {
          this.orderService.cancelOrder(order_id);
      }
  }

}
