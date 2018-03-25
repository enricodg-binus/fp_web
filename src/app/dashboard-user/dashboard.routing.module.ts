import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {UserGuard} from '../guards/auth.guard';
import {AddressComponent} from './address/address.component';
import {PaymentComponent} from './payment/payment.component';
import {DashboardSidebarComponent} from './dashboard-sidebar.component';
import {StatusorderComponent} from './statusorder/statusorder.component';
import {RequestdetailComponent} from './requestorder/requestdetail/requestdetail.component';
import {RequestorderComponent} from './requestorder/requestorder.component';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import {AddAddressComponent} from './address/add-address/add-address.component';
import {DashboardComponent} from './dashboard/dashboard.component';

export const dashboardRoutes = [
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
                path: 'payment',
                component: PaymentComponent
            }
        ]
    },
];
