import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAboutUsComponent } from './pages/page-about-us/page-about-us.component';
import { PageContactUsComponent } from './pages/page-contact-us/page-contact-us.component';
import { PageContactUsAltComponent } from './pages/page-contact-us-alt/page-contact-us-alt.component';
import { PageTermsComponent } from './pages/page-terms/page-terms.component';
import { PageFaqComponent } from './pages/page-faq/page-faq.component';
import { PageComponentsComponent } from './pages/page-components/page-components.component';
import { PageTypographyComponent } from './pages/page-typography/page-typography.component';
import { PageStoreLocationComponent } from './pages/page-store-location/page-store-location.component';
import { PageSupportComponent } from './pages/page-support/page-support.component';
import { PageCareerComponent } from './pages/page-career/page-career.component';
import { PageAppComponent } from './pages/page-app/page-app.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'about-us'
    },
    {
        path: 'about-us',
        component: PageAboutUsComponent
    },
    {
        path: 'contact-us',
        component: PageContactUsComponent
    },
    {
        path: 'contact-us-alt',
        component: PageContactUsAltComponent
    },
    {
        path: 'terms',
        component: PageTermsComponent
    },
    {
        path: 'faq',
        component: PageFaqComponent
    },
    {
        path: 'components',
        component: PageComponentsComponent
    },
    {
        path: 'typography',
        component: PageTypographyComponent
    },
    {
        path: 'store',
        component: PageStoreLocationComponent
    },
    {
        path: 'support',
        component: PageSupportComponent
    },
    {
        path: 'career',
        component: PageCareerComponent
    },
    {
        path: 'app',
        component: PageAppComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SiteRoutingModule { }
