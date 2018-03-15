import { Component, OnInit } from '@angular/core';
import {DashboardProviderService} from '../../services/dashboard-provider.service';

@Component({
  selector: 'app-requestorder',
  templateUrl: './requestorder.component.html',
  styleUrls: ['../dashboard-sidebar.component.css']
})
export class RequestorderComponent implements OnInit {

  request_order_data: any;

  constructor(private dashboardService: DashboardProviderService) { }

  ngOnInit() {
    this.displayRequestOrder();
  }

  displayRequestOrder() {
    this.dashboardService.getRequestOrder().subscribe(res => this.request_order_data = res);
  }

}
