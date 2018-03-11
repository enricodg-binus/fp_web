import { Component, OnInit } from '@angular/core';
import {AuthServiceProviderService} from '../services/auth-service-provider.service';

@Component({
  selector: 'app-sign-auth',
  templateUrl: './sign-auth.component.html',
  styleUrls: ['./sign-auth.component.css']
})
export class SignAuthComponent implements OnInit {

  constructor(private authService: AuthServiceProviderService) { }

  ngOnInit() {
  }



}
