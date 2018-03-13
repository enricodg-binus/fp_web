import { Component, OnInit } from '@angular/core';
import { Categories } from './categories';
import { NavServiceProviderService } from '../../services/nav-service-provider.service';
import {Observable} from 'rxjs/Observable';
import {AuthServiceProviderService} from '../../services/auth-service-provider.service';
import {Router} from '@angular/router';
import {Subject} from 'rxjs/Subject';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  categories_data: Categories[];
  loggedIn = false;
  results: Object;
  searchTerm: string;

  constructor(private navService: NavServiceProviderService, private authService: AuthServiceProviderService) { }

  checkAuth() {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    this.authService.validateToken(currentUser.token).subscribe(
      res => {
        this.loggedIn = true;
      },
        error => {
            this.loggedIn = false;
        }
    );
  }

  ngOnInit() {
    this.loggedIn = false;
    this.getCategories();
  }

  getCategories() {
    this.navService.getCategories().subscribe(categories_data => this.categories_data = categories_data);
  }

  search(form: NgForm): void {
    if (!form) { return; }
    this.searchTerm = form.value.searchTerm;
      this.navService.searchEntries(this.searchTerm)
          .subscribe(results => {
              this.results = results.results;
              console.log(this.searchTerm);
          });
  }

}
