import { Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { SalesHistoryComponent } from './components/sales-history/sales-history.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ReturnsComponent } from './components/returns/returns.component';
import { EmployeeManagementComponent } from './components/employee-management/employee-management.component';
import { ManagerComponent } from './components/manager/manager.component';

export const MANAGEMENT_ROUTES: Routes = [
   
   { path:'', component: ManagerComponent, children: [

    ]},
    { path: '', component: EmployeeManagementComponent, outlet: 'secundario' },
    { path: 'profile', component: ProfileComponent, outlet: 'secundario' },
    { path: 'saleshistory', component: SalesHistoryComponent, outlet: 'secundario' },
    { path: 'add-product', component: AddProductComponent, outlet: 'secundario' },
    { path: 'reports', component: ReturnsComponent, outlet: 'secundario' },
    { path: 'employee', component: EmployeeManagementComponent, outlet: 'secundario' },


];