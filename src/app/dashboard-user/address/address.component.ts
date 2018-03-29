import { Component, OnInit } from '@angular/core';
import {DashboardProviderService} from '../../services/dashboard.service';
import {Observable} from 'rxjs/Observable';
import {AlertProviderService} from '../../services/alert.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['../dashboard-sidebar.component.css']
})
export class AddressComponent implements OnInit {

    address_data: any;

    constructor(private dashboardService: DashboardProviderService, private alertService: AlertProviderService, private router: Router) {
    }

    ngOnInit() {
        this.getUserAddress();
    }

    getUserAddress() {
        this.dashboardService.getUserAddress()
            .subscribe(res => {
              this.address_data = res;
            });
    }

    deleteAddress(id: any) {
        this.dashboardService.deleteAddress(id)
            .subscribe( res => {
                window.alert(res);
                window.location.reload(true);
            }, err => {
                this.alertService.error(err, false);
            });
    }

}
