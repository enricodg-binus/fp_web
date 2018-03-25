import {NgModule} from '@angular/core';
import {AddAddressComponent} from './address/add-address/add-address.component';
import {AddressComponent} from './address/address.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import {PaymentComponent} from './payment/payment.component';
import {RequestorderComponent} from './requestorder/requestorder.component';
import {RequestdetailComponent} from './requestorder/requestdetail/requestdetail.component';
import {StatusorderComponent} from './statusorder/statusorder.component';
import {DashboardSidebarComponent} from './dashboard-sidebar.component';
import {CommonModule} from '@angular/common';
import {AlertModule} from '../component/alert/alert.module';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {dashboardRoutes} from './dashboard.routing.module';
import {PaymentSuccessComponent} from './payment-success/payment-success.component';

@NgModule({
    declarations: [
        AddAddressComponent,
        AddressComponent,
        DashboardComponent,
        EditProfileComponent,
        PaymentComponent,
        RequestorderComponent,
        RequestdetailComponent,
        StatusorderComponent,
        DashboardSidebarComponent,
        PaymentSuccessComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(dashboardRoutes),
        AlertModule,
        FormsModule
    ],
    exports: [
        AddAddressComponent,
        AddressComponent,
        DashboardComponent,
        EditProfileComponent,
        PaymentComponent,
        RequestorderComponent,
        RequestdetailComponent,
        StatusorderComponent,
        DashboardSidebarComponent
    ]
})
export class  DashboardModule { }
