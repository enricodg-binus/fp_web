import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProviderModule } from './libraries/provider.module';
import {CommonModule} from '@angular/common';
import {UserGuard} from './guards/auth.guard';
import {MainModule} from './component/main.module';
import {DashboardModule} from './dashboard-user/dashboard.module';
import {appRoutes} from './app.routing.module';
import {RouterModule} from '@angular/router';
import { NgAisModule } from 'angular-instantsearch';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'fp_web' }),
    CommonModule,
    ProviderModule.forRoot(),
    RouterModule.forChild(appRoutes),
    HttpClientModule,
    MainModule,
    DashboardModule,
  ],
  providers: [UserGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
    // constructor(
    //     @Inject(PLATFORM_ID) private platformId: Object,
    //     @Inject(APP_ID) private appId: string) {
    //     const platform = isPlatformBrowser(platformId) ?
    //         'in the browser' : 'on the server';
    //     console.log(`Running ${platform} with appId=${appId}`);
    // }
}

