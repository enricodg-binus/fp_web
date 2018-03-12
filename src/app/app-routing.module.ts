import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CartComponent} from './cart/cart.component';
import {SignAuthComponent} from './sign-auth/sign-auth.component';
import {DashboardSidebarComponent} from './dashboard-user/dashboard-sidebar.component';
import {DashboardComponent} from './dashboard-user/dashboard/dashboard.component';
import {StatusorderComponent} from './dashboard-user/statusorder/statusorder.component';
import {RequestorderComponent} from './dashboard-user/requestorder/requestorder.component';

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
        children: [
          // {
          //   path: '',
          //   component: DashboardComponent
          // },
          {
            path: 'status_order',
            component: StatusorderComponent
          },
          {
            path: 'request_order',
            component: RequestorderComponent
          }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
