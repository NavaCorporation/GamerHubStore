import { Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { SalesHistoryComponent } from './components/sales-history/sales-history.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ReturnsComponent } from './components/returns/returns.component';
import { BillingComponent } from './components/billing/billing.component';
import { EmployeeManagementComponent } from './components/employee-management/employee-management.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

export const MANAGEMENT_ROUTES: Routes = [
    {
        path:'', component: BillingComponent, children: [
            { path: 'profile', component: ProfileComponent},
            { path: '', redirectTo: 'profile', pathMatch: 'full' },
        ]

    },


];