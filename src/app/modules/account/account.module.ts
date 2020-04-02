import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// modules (angular)
import { CommonModule } from '@angular/common';

// modules
import { AccountRoutingModule } from './account-routing.module';
import { SharedModule } from '../../shared/shared.module';

// components
import { LayoutComponent } from './components/layout/layout.component';

// pages
import { PageAddressesListComponent } from './pages/page-addresses-list/page-addresses-list.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageOrdersListComponent } from './pages/page-orders-list/page-orders-list.component';
import { PagePasswordComponent } from './pages/page-password/page-password.component';
import { PageProfileComponent } from './pages/page-profile/page-profile.component';
import { PageForgotPassComponent } from './pages/page-forgot-pass/page-forgot-pass.component';
import { RegisterLayoutComponent } from './components/register-layout/register-layout.component';
import { PagePersonalComponent } from './pages/page-personal/page-personal.component';
import { PageBusinessComponent } from './pages/page-business/page-business.component';
import { PageKeypersonComponent } from './pages/page-keyperson/page-keyperson.component';
import { PageTradeComponent } from './pages/page-trade/page-trade.component';
import { PageConfirmationComponent } from './pages/page-confirmation/page-confirmation.component';

import { PagePurchaseOfferComponent } from './pages/page-purchase-offer/page-purchase-offer.component';
import { PageSalesOfferComponent } from './pages/page-sales-offer/page-sales-offer.component';
import { PurchaseOfferListComponent } from './pages/page-purchase-offer/purchase-offer-list/purchase-offer-list.component';
import { SalesOfferListComponent } from './pages/sales-offer-list/sales-offer-list.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptorService } from 'src/app/shared/services/http-token-interceptor.service';
import { TokenInterceptorModule } from '../tokenModule/token.module';

@NgModule({
    declarations: [
        // components
        LayoutComponent,
        RegisterLayoutComponent,
        // pages
        PageAddressesListComponent,
        PageDashboardComponent,
        PageLoginComponent,
        PageOrdersListComponent,
        PagePasswordComponent,
        PageProfileComponent,
        PageForgotPassComponent,
        PagePersonalComponent,
        PageBusinessComponent,
        PageKeypersonComponent,
        PageTradeComponent,
        PageConfirmationComponent,
        PagePurchaseOfferComponent,
        PageSalesOfferComponent,
        PurchaseOfferListComponent,
        SalesOfferListComponent
    ],
    imports: [
        CommonModule,
        AccountRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        TokenInterceptorModule
    ],
})
export class AccountModule { }
