import {NgModule} from '@angular/core';
import {NavComponent} from './nav/nav.component';
import {CartComponent} from './cart/cart.component';
import {FooterComponent} from './footer/footer.component';
import {BannerSliderComponent} from './banner-slider/banner-slider.component';
import {SignAuthComponent} from './sign-auth/sign-auth.component';
import {HomeComponent} from './home/home.component';
import {ItemComponent} from './product/product.component';
import {CategoryResultsComponent} from './category-results/category-results.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AlertModule} from './alert/alert.module';
import {MainRoutingModule} from './main.routing.module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PaymentSuccessComponent} from '../dashboard-user/payment-success/payment-success.component';
import {UserGuard} from '../guards/auth.guard';
import {AppComponent} from '../app.component';
import {MainComponent} from './main.component';
import {DashboardModule} from '../dashboard-user/dashboard.module';
import {PaymentFailComponent} from './payment-fail/payment-fail.component';
import {SearchResultComponent} from './search-result/search-result.component';
import {NgAisModule} from 'angular-instantsearch';
import {AboutUsComponent} from './about-us/about-us.component';
import {TrackingOrderComponent} from './tracking-order/tracking-order.component';

@NgModule({
    declarations: [
        MainComponent,
        BannerSliderComponent,
        HomeComponent,
        SignAuthComponent,
        ItemComponent,
        CategoryResultsComponent,
        NavComponent,
        FooterComponent,
        CartComponent,
        PageNotFoundComponent,
        SearchResultComponent,
        TrackingOrderComponent,
        AboutUsComponent
    ],
    imports: [
        CommonModule,
        MainRoutingModule,
        FormsModule,
        AlertModule,
        NgAisModule.forRoot(),
        DashboardModule
    ],
    providers: [UserGuard],
    exports: [
        BannerSliderComponent,
        HomeComponent,
        SignAuthComponent,
        ItemComponent,
        CategoryResultsComponent,
        NavComponent,
        FooterComponent,
        CartComponent,
        PageNotFoundComponent
    ]
})
export class MainModule { }
