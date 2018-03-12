import { Component, OnInit } from '@angular/core';
import {AuthServiceProviderService} from '../services/auth-service-provider.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-sign-auth',
  templateUrl: './sign-auth.component.html',
  styleUrls: ['./sign-auth.component.css']
})
export class SignAuthComponent implements OnInit {

  visible = true;
  hideLogin = false;
  // display = 'block';

  constructor(private authService: AuthServiceProviderService, private router: Router) { }

  ngOnInit() {
    if (this.router.url === '/register') {
      this.hideLogin = true;
    } else if (this.router.url === '/login') {
      this.hideLogin = false;
    }
  }

  toggle() {
    this.hideLogin = !this.hideLogin;
    // this.display = this.visible ? 'block' : 'none';
  }
}
