import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageOrdersListComponent } from './pages/page-orders-list/page-orders-list.component';
import { PageAddressesListComponent } from './pages/page-addresses-list/page-addresses-list.component';
import { PageProfileComponent } from './pages/page-profile/page-profile.component';
import { PagePasswordComponent } from './pages/page-password/page-password.component';
import { PageForgotPassComponent } from './pages/page-forgot-pass/page-forgot-pass.component';
import { PagePersonalComponent } from './pages/page-personal/page-personal.component';
import { RegisterLayoutComponent } from './components/register-layout/register-layout.component';
import { PageBusinessComponent } from './pages/page-business/page-business.component';
import { PageKeypersonComponent } from './pages/page-keyperson/page-keyperson.component';
import { PageTradeComponent } from './pages/page-trade/page-trade.component';
import { PageConfirmationComponent } from './pages/page-confirmation/page-confirmation.component';
import { PagePurchaseOfferComponent } from './pages/page-purchase-offer/page-purchase-offer.component';
import { PageSalesOfferComponent } from './pages/page-sales-offer/page-sales-offer.component';
import { PurchaseOfferListComponent } from './pages/page-purchase-offer/purchase-offer-list/purchase-offer-list.component';
import { SalesOfferListComponent } from './pages/sales-offer-list/sales-offer-list.component';
import { UserGuardGuard } from 'src/app/shared/services/user-guard.guard';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                component: PageDashboardComponent
            },
            {
                path: 'profile',
                component: PageProfileComponent
            },
            {
                path: 'addresses',
                component: PageAddressesListComponent
            },
            {
                path: 'orders',
                component: PageOrdersListComponent
            },
            {
                path: 'password',
                component: PagePasswordComponent
            }
        ]
    },
    {
        path: 'login',
        component: PageLoginComponent
    },
    {
        path: 'forgotPass',
        component: PageForgotPassComponent
    },
    {
        path: 'purchaseOffer',
        component: PagePurchaseOfferComponent,
        canActivate : [UserGuardGuard]
    },
    {
        path: 'saleseOffer',
        component: PageSalesOfferComponent,
        canActivate : [UserGuardGuard]
    },
    {
        path: 'purchaseList',
        component: PurchaseOfferListComponent,
        canActivate : [UserGuardGuard]
    },
    {
        path: 'salesList',
        component: SalesOfferListComponent,
        canActivate : [UserGuardGuard]
    },
    {
        path: '',
        component: RegisterLayoutComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'dashboard'
            },
            {
                path: 'personal',
                component: PagePersonalComponent
            },
            {
                path: 'business',
                component: PageBusinessComponent
            },
            {
                path: 'keyperson',
                component: PageKeypersonComponent
            },
            {
                path: 'trade',
                component: PageTradeComponent,
                // canActivate : [UserGuardGuard]
            },
            {
                path: 'confirm',
                component: PageConfirmationComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }
