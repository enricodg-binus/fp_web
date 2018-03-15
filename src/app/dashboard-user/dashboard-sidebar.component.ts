import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {DashboardProviderService} from '../services/dashboard-provider.service';
import {UserService} from '../services/user.service';
import {AuthServiceProviderService} from '../services/auth-service-provider.service';

@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.css']
})
export class DashboardSidebarComponent implements OnInit {

  user_data: any;

  constructor(private dashboardService: DashboardProviderService, private authService: AuthServiceProviderService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    // this.dashboardService.getUser()
    //   .subscribe(user_data => this.user_data = user_data);

    this.authService.validateToken().subscribe(
      res => {
        console.log(res);
        this.user_data = res;
        // console.log(this.user_data);
      },
      error => {
      }
    );
  }

  logout() {
    this.authService.logout();
  }

}
