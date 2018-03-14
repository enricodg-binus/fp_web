import { Component, OnInit } from '@angular/core';
import {DashboardProviderService} from '../../services/dashboard-provider.service';
import {User} from '../../model/user';
import {UserService} from '../../services/user.service';
import {AlertProviderService} from '../../services/alert-provider.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['../dashboard-sidebar.component.css']
})
export class EditProfileComponent implements OnInit {

  user_data: User;
  model: any = {};

  constructor(private dashboardService: DashboardProviderService, private userService: UserService,
              private alertService: AlertProviderService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.dashboardService.getUser()
      .subscribe(user_data => this.user_data = user_data);
  }

  updateProfile() {
    this.userService.update(this.model)
      .subscribe(data => {
          this.alertService.success('Profile updated!', true);
        },
        error => {
          this.alertService.error(error);
        });
  }

}
