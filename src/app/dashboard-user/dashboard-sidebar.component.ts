import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {DashboardProviderService} from '../services/dashboard.service';
import {UserService} from '../services/user.service';
import {AuthServiceProviderService} from '../services/auth.service';
import {AlertProviderService} from '../services/alert.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html'
})
export class DashboardSidebarComponent implements OnInit {

  user_data: any = {};

  constructor(private dashboardService: DashboardProviderService, private authService: AuthServiceProviderService,
              private alertService: AlertProviderService,
              private router: Router) { }

  ngOnInit() {
    // console.log(localStorage.token);
    this.getUser();
  }

  getUser() {
    // this.dashboardService.getUser()
    //   .subscribe(user_data => this.user_data = user_data);

    this.authService.validateToken().subscribe(
      res => {
        this.user_data = res;
        // console.log(this.user_data);
      },
      error => {
        window.alert('Please re-login to continue');
        this.router.navigate(['/login']);
      }
    );
  }

  logout() {
    this.authService.logout().subscribe(res => {
      return res;
    });
  }

}
