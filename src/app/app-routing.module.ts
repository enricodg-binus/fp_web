import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {CartComponent} from './component/cart/cart.component';
import {SignAuthComponent} from './component/sign-auth/sign-auth.component';
import {DashboardSidebarComponent} from './dashboard-user/dashboard-sidebar.component';
import {DashboardComponent} from './dashboard-user/dashboard/dashboard.component';
import {StatusorderComponent} from './dashboard-user/statusorder/statusorder.component';
import {RequestorderComponent} from './dashboard-user/requestorder/requestorder.component';
import {EditProfileComponent} from './dashboard-user/edit-profile/edit-profile.component';
import {PaymentComponent} from './dashboard-user/payment/payment.component';
import {RequestdetailComponent} from './dashboard-user/requestorder/requestdetail/requestdetail.component';
import {UserGuard} from './guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'cart',
        component: CartComponent
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
        // canActivate: [UserGuard],
        children: [
          {
              path: 'request_detail',
              component: RequestdetailComponent
          },
            {
                path: 'status_order',
                component: StatusorderComponent
            },
            {
                path: 'request_order',
                component: RequestorderComponent,
                children: [
                  {
                      path: 'request_detail',
                      component: RequestdetailComponent
                  }
                ]
            },
            {
                path: 'edit_profile',
                component: EditProfileComponent
            },
            {
                path: 'payment',
                component: PaymentComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
