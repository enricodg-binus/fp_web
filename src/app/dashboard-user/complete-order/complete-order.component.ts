import { Component, OnInit } from '@angular/core';
import {DashboardProviderService} from '../../services/dashboard-provider.service';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'app-payment',
  templateUrl: './complete-order.html',
  styleUrls: ['../dashboard-sidebar.component.css']
})
export class PaymentComponent implements OnInit {

  order_data: any;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.getOrder();
  }

  getOrder() {
    this.orderService.getCompleteOrder();
  }

}
