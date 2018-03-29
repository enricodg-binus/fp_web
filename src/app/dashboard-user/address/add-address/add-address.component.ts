import { Component, OnInit } from '@angular/core';
import {DashboardProviderService} from '../../../services/dashboard.service';
import {AlertProviderService} from '../../../services/alert.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['../../dashboard-sidebar.component.css']
})
export class AddAddressComponent implements OnInit {

  model: any = {};

  constructor(private dashboardService: DashboardProviderService, private alertService: AlertProviderService, private router: Router) { }

  ngOnInit() {
  }

  addAddress() {
    this.dashboardService.addAddress(this.model.name, this.model.phone, this.model.address)
        .subscribe(data => {
                this.router.navigate(['/dashboard/list_alamat']);
                window.alert(data.msg);
                this.alertService.success(data, true);
            },
            error => {
                this.alertService.error(error, false);
            });
  }

}
