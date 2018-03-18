import { Component, OnInit } from '@angular/core';
import {AuthServiceProviderService} from '../../services/auth-service-provider.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertProviderService} from '../../services/alert-provider.service';
import {UserService} from '../../services/user.service';
import {User} from '../../model/user';

@Component({
  selector: 'app-sign-auth',
  templateUrl: './sign-auth.component.html',
  styleUrls: ['./sign-auth.component.css']
})
export class SignAuthComponent implements OnInit {

  hideLogin = false;
  model: any = {};
  returnUrl: string;

  constructor(private userService: UserService, private authService: AuthServiceProviderService, private router: Router,
              private alertService: AlertProviderService, private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.router.url === '/register') {
      this.hideLogin = true;
    } else if (this.router.url === '/login') {
      this.hideLogin = false;
    }

      // reset login status
      this.authService.logout();

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  toggle() {
    this.hideLogin = !this.hideLogin;
    // this.display = this.visible ? 'block' : 'none';
  }

    login() {
        this.authService.login(this.model.email, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error, false);
                    console.log(error);
                });
    }

    register() {
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error, false);
                });
    }
}
