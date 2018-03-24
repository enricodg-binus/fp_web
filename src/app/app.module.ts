import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavComponent } from './component/nav/nav.component';
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
import {AlertComponent} from './component/alert/alert.component';
import { ItemComponent } from './component/product/product.component';
import { CategoryResultsComponent } from './component/category-results/category-results.component';
import { AddressComponent } from './dashboard-user/address/address.component';
import { ProductdetailComponent } from './component/product/productdetail/productdetail.component';
import { AddAddressComponent } from './dashboard-user/address/add-address/add-address.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import {MapToIterable} from './libraries/map-to-iterable.pipe';
import { PaymentSuccessComponent } from './component/payment-success/payment-success.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
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
    RequestdetailComponent,
    AlertComponent,
    ItemComponent,
    CategoryResultsComponent,
    AddressComponent,
    ProductdetailComponent,
    AddAddressComponent,
    PageNotFoundComponent,
    MapToIterable,
    PaymentSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ProviderModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [UserGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
