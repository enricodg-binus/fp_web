import { ModuleWithProviders, NgModule } from '@angular/core';
import { ApiProvider } from './api';
import {NavService} from '../services/nav.service';
import {AuthServiceProviderService} from '../services/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {AlertProviderService} from '../services/alert.service';
import {UserService} from '../services/user.service';
import {DashboardProviderService} from '../services/dashboard.service';
import {ProductService} from '../services/product.service';
import {CartService} from '../services/cart.service';
import {OrderService} from '../services/order.service';
import {CurrencyPipe} from '@angular/common';

@NgModule()
export class ProviderModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ProviderModule,
      providers: [
        ApiProvider,
        NavService,
        AuthServiceProviderService,
        HttpClientModule,
        AlertProviderService,
        UserService,
        DashboardProviderService,
        ProductService,
        CartService,
        OrderService,
        CurrencyPipe
      ]
    };
  }
}
