import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { CategoryDdComponent } from './category-dd/category-dd.component';
import { BannerSliderComponent } from './banner-slider/banner-slider.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { SignAuthComponent } from './sign-auth/sign-auth.component';
import { DashboardSidebarComponent } from './dashboard-user/dashboard-sidebar.component';
import { DashboardComponent } from './dashboard-user/dashboard/dashboard.component';
import { ProviderModule } from './libraries/provider.module';
import { LoginComponent } from './sign-auth/login/login.component';
import { StatusorderComponent } from './dashboard-user/statusorder/statusorder.component';
import {CommonModule} from '@angular/common';
import { RequestorderComponent } from './dashboard-user/requestorder/requestorder.component';


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
    DashboardComponent,
    LoginComponent,
    StatusorderComponent,
    RequestorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ProviderModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
