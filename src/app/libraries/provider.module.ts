import { ModuleWithProviders, NgModule } from '@angular/core';
import { ApiProvider } from './api';
import {NavServiceProviderService} from '../services/nav-service-provider.service';
import {AuthServiceProviderService} from '../services/auth-service-provider.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule()
export class ProviderModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ProviderModule,
      providers: [
        ApiProvider,
        NavServiceProviderService,
        AuthServiceProviderService,
        HttpClientModule
      ]
    };
  }
}
