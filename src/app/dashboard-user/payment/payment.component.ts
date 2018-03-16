import { Component, OnInit } from '@angular/core';
import {DashboardProviderService} from '../../services/dashboard-provider.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['../dashboard-sidebar.component.css']
})
export class PaymentComponent implements OnInit {

  payment_data: any;

  constructor(private dashboardService: DashboardProviderService) { }

  ngOnInit() {
    this.getPayment();
  }

  getPayment() {
    this.dashboardService.getPaymentInfo().subscribe(res => this.payment_data = res);
  }

}
