import { Routes, provideRouter } from '@angular/router';
import { LoginComponent } from './modules/security/components/login/login.component';
import { ClientComponent } from './modules/clients/components/client/client.component';
import { DashboardComponent } from './modules/administration/components/dashboard/dashboard.component';
import { ProductosComponent } from './modules/shopping/components/productos/productos.component';

import { ManagerComponent } from './modules/management/components/manager/manager.component';


export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'client', component: ClientComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'product', component: ProductosComponent },
    { path: 'management', component: ManagerComponent, 
    loadChildren: () => import('./modules/management/management.routes').then(m => m.MANAGEMENT_ROUTES)},

];

