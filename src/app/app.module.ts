import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavComponent } from './component/nav/nav.component';
import { CategoryDdComponent } from './component/category-dd/category-dd.component';
import { BannerSliderComponent } from './component/banner-slider/banner-slider.component';
import { HomeComponent } from './component/home/home.component';
import { CartComponent } from './component/cart/cart.component';
import { SignAuthComponent } from './component/sign-auth/sign-auth.component';
import { DashboardSidebarComponent } from './dashboard-user/dashboard-sidebar.component';
import { DashboardComponent } from './dashboard-user/dashboard/dashboard.component';
import { ProviderModule } from './libraries/provider.module';
import { StatusorderComponent } from './dashboard-user/statusorder/statusorder.component';
import {CommonModule} from '@angular/common';
import { RequestorderComponent } from './dashboard-user/requestorder/requestorder.component';
import { EditProfileComponent } from './dashboard-user/edit-profile/edit-profile.component';
import { PaymentComponent } from './dashboard-user/payment/payment.component';
import { RequestdetailComponent } from './dashboard-user/requestorder/requestdetail/requestdetail.component';
import {UserGuard} from './guards/auth.guard';
import {FormsModule} from '@angular/forms';
import {JwtInterceptor} from './JwtInterceptor';


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
    StatusorderComponent,
    RequestorderComponent,
    EditProfileComponent,
    PaymentComponent,
    RequestdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ProviderModule.forRoot(),
    HttpClientModule,
      FormsModule
  ],
  providers: [UserGuard,
      {
          provide: HTTP_INTERCEPTORS,
          useClass: JwtInterceptor,
          multi: true
      }],
  bootstrap: [AppComponent]
})
export class AppModule { }
