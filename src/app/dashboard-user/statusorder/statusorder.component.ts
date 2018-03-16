import { Component, OnInit } from '@angular/core';
import {DashboardProviderService} from '../../services/dashboard-provider.service';

@Component({
  selector: 'app-statusorder',
  templateUrl: './statusorder.component.html',
  styleUrls: ['../dashboard-sidebar.component.css']
})
export class StatusorderComponent implements OnInit {

  status_order: any

  constructor(private dashboardService: DashboardProviderService) { }

  ngOnInit() {
    this.displayStatusOrder();
  }

  displayStatusOrder(){
    this.dashboardService.getStatusOrder().subscribe(res => this.status_order = res)
  }

}
