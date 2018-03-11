import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { CategoryDdComponent } from './category-dd/category-dd.component';
import { BannerSliderComponent } from './banner-slider/banner-slider.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { SignAuthComponent } from './sign-auth/sign-auth.component';
import { BackendApiService } from './services/backend-api.service.service';
import { AuthServiceProviderService } from './services/auth-service-provider.service';
import { DashboardSidebarComponent } from './dashboard-sidebar/dashboard-sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    CategoryDdComponent,
    BannerSliderComponent,
    HomeComponent,
    CartComponent,
    SignAuthComponent,
    DashboardSidebarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BackendApiService, AuthServiceProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
