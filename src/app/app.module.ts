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


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    CategoryDdComponent,
    BannerSliderComponent,
    HomeComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
