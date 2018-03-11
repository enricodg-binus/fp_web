import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CartComponent} from './cart/cart.component';
import {SignAuthComponent} from './sign-auth/sign-auth.component';
import {DashboardSidebarComponent} from './dashboard-sidebar/dashboard-sidebar.component';
import {DashboardComponent} from './dashboard/dashboard.component';

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
        component: DashboardSidebarComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
