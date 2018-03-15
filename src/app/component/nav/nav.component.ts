import { Component, OnInit } from '@angular/core';
import { Categories } from './categories';
import { NavServiceProviderService } from '../../services/nav-service-provider.service';
import {Observable} from 'rxjs/Observable';
import {AuthServiceProviderService} from '../../services/auth-service-provider.service';
import {Router} from '@angular/router';
import {Subject} from 'rxjs/Subject';
import {NgForm} from '@angular/forms';
import {User} from '../../model/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  categories_data: Categories[];
  loggedIn = false;
  results: any;
  searchTerm: string;
  user_data: any;

  constructor(private navService: NavServiceProviderService, private authService: AuthServiceProviderService) { }

  checkAuth() {
    // const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    this.authService.validateToken().subscribe(
      res => {
        console.log(res);
        this.loggedIn = true;
        this.user_data = res;
        // console.log(this.user_data);
      },
      error => {
        this.loggedIn = false;
      }
    );
  }

  ngOnInit() {
    this.getCategories();
    this.checkAuth();
  }

  getCategories() {
    this.navService.getCategories().subscribe(categories_data => this.categories_data = categories_data);
  }

  search(form: NgForm): void {
    if (!form) { return; }
    this.searchTerm = form.value.searchTerm;
      this.navService.searchEntries(this.searchTerm)
          .subscribe(results => {
              this.results = results;
              console.log(this.searchTerm);
          });
  }

}
