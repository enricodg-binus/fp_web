import { Component, OnInit } from '@angular/core';
import { Categories } from './categories';
import { NavServiceProviderService } from '../services/nav-service-provider.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  categories_data: Categories[];
  loggedIn = false;

  constructor(private navService: NavServiceProviderService) { }

  // checkAuth() {
  //   this.authService.validateToken().subscribe(
  //     res => {
  //       this.loggedIn = true;
  //     }
  //   )
  // }

  ngOnInit() {
    this.loggedIn = false;
    this.getCategories();
  }

  getCategories() {
    this.navService.getCategories().subscribe(categories_data => this.categories_data = categories_data);
  }

}
