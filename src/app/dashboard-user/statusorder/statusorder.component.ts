import { Component, OnInit } from '@angular/core';
import {DashboardProviderService} from '../../services/dashboard-provider.service';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'app-statusorder',
  templateUrl: './statusorder.component.html',
  styleUrls: ['../dashboard-sidebar.component.css']
})
export class StatusorderComponent implements OnInit {

  status_order: any

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.displayStatusOrder();
  }

  displayStatusOrder() {
    this.orderService.getStatusOrder().subscribe(res => this.status_order = res);
  }

}
