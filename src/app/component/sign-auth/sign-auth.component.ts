import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {AuthServiceProviderService} from '../../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertProviderService} from '../../services/alert.service';
import {UserService} from '../../services/user.service';
import {isPlatformBrowser, Location} from '@angular/common';

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
              private alertService: AlertProviderService, private route: ActivatedRoute, private location: Location,
              @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    this.checkAuth();
    if (this.router.url === '/register') {
      this.hideLogin = true;
    } else if (this.router.url === '/login') {
      this.hideLogin = false;
    }


      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

    checkAuth() {
        this.authService.validateToken().subscribe(
            res => {
                this.router.navigate(['/']);
            },
            error => {
            }
        );
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
                    window.location.reload(true);
                },
                error => {
                    // console.log(error);
                    this.alertService.error(error, false);
                });
    }

    register() {
        this.userService.create(this.model)
            .subscribe(
                data => {
                    window.alert('registration successful');
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error, false);
                });
    }
}
