import { ModuleWithProviders, NgModule } from '@angular/core';
import { ApiProvider } from './api';
import {NavServiceProviderService} from '../services/nav-service-provider.service';
import {AuthServiceProviderService} from '../services/auth-service-provider.service';
import {HttpClientModule} from '@angular/common/http';
import {AlertProviderService} from '../services/alert-provider.service';
import {UserService} from '../services/user.service';
import {DashboardProviderService} from '../services/dashboard-provider.service';
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
        NavServiceProviderService,
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
