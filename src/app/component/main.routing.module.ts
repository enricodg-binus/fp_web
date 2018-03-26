import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CartComponent} from './cart/cart.component';
import {SignAuthComponent} from './sign-auth/sign-auth.component';
import {CategoryResultsComponent} from './category-results/category-results.component';
import {DashboardSidebarComponent} from '../dashboard-user/dashboard-sidebar.component';
import {UserGuard} from '../guards/auth.guard';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PaymentSuccessComponent} from '../dashboard-user/payment-success/payment-success.component';
import {MainComponent} from './main.component';
import {AddressComponent} from '../dashboard-user/address/address.component';
import {PaymentComponent} from '../dashboard-user/complete-order/complete-order.component';
import {StatusorderComponent} from '../dashboard-user/statusorder/statusorder.component';
import {RequestdetailComponent} from '../dashboard-user/requestorder/requestdetail/requestdetail.component';
import {RequestorderComponent} from '../dashboard-user/requestorder/requestorder.component';
import {EditProfileComponent} from '../dashboard-user/edit-profile/edit-profile.component';
import {AddAddressComponent} from '../dashboard-user/address/add-address/add-address.component';
import {DashboardComponent} from '../dashboard-user/dashboard/dashboard.component';
import {PaymentFailComponent} from './payment-fail/payment-fail.component';
import {ProductdetailComponent} from './product/productdetail/productdetail.component';

const routes: Routes = [

    {
        path: 'complete-order',
        children: [
            {
                path: 'payment_failed',
                component: PaymentFailComponent
            },
            {
                path: 'payment_success/:id',
                component: PaymentSuccessComponent
            }
        ]
    },
    {
        path: 'login',
        component: SignAuthComponent
    },
    {
        path: 'register',
        component: SignAuthComponent
    },
    {
        path: 'dashboard',
        component: DashboardSidebarComponent,
        canActivate: [UserGuard],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                component: DashboardComponent,
            },
            {
                path: 'request_order/details/:id',
                component: RequestdetailComponent
            },
            {
                path: 'list_alamat',
                component: AddressComponent
            },
            {
                path: 'add_address',
                component: AddAddressComponent
            },
            {
                path: 'status_order',
                component: StatusorderComponent
            },
            {
                path: 'request_order',
                component: RequestorderComponent,
            },
            {
                path: 'edit_profile',
                component: EditProfileComponent
            },
            {
                path: 'complete_order',
                component: PaymentComponent
            }
        ]
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'cart',
                component: CartComponent
            },
            {
                path: 'category',
                children: [
                    {
                        path: ':category_name',
                        component: CategoryResultsComponent
                    }
                ]
            },
            {
                path: 'product',
                children: [
                    {
                        path: ':product_id',
                        component: ProductdetailComponent
                    }
                ]
            },
            {
                path: 'payment_success',
                component: PaymentSuccessComponent
            }
        ]
    },
    {
        path: '**',
        component: PageNotFoundComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
