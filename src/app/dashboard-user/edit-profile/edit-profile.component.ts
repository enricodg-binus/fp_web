import { Component, OnInit } from '@angular/core';
import {DashboardProviderService} from '../../services/dashboard-provider.service';
import {User} from '../../model/user';
import {UserService} from '../../services/user.service';
import {AlertProviderService} from '../../services/alert-provider.service';
import {AuthServiceProviderService} from '../../services/auth-service-provider.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['../dashboard-sidebar.component.css']
})
export class EditProfileComponent implements OnInit {

  model: any;

  constructor(private dashboardService: DashboardProviderService, private authService: AuthServiceProviderService,
              private userService: UserService,
              private alertService: AlertProviderService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    // this.dashboardService.getUser()
    //   .subscribe(user_data => user_data = user_data);
    this.authService.validateToken().subscribe(
      res => {
        this.model = res;
      },
      error => {
          return error;
      }
    );
  }

  updateProfile() {
    this.userService.update(this.model)
      .subscribe(data => {
          window.alert(data.msg);
          window.location.reload(true);
        },
        error => {
          this.alertService.error(error, false);
        });
  }

}
