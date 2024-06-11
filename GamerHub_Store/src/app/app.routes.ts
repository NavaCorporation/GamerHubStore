import { Routes, provideRouter } from '@angular/router';
import { LoginComponent } from './modules/security/components/login/login.component';
import { ClientComponent } from './modules/clients/components/client/client.component';
import { DashboardComponent } from './modules/administration/components/dashboard/dashboard.component';
import { ProductosComponent } from './modules/shopping/components/productos/productos.component';
import { CarritoComponent } from './modules/shopping/components/carrito/carrito.component';
import { DetalleProductoComponent } from './modules/shopping/components/detalle-producto/detalle-producto.component';


export const routes: Routes = [
    { path: '', redirectTo: 'product', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'client', component: ClientComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'product', component: ProductosComponent },
    { path: '**', redirectTo: 'login', pathMatch: 'full' },
    { path: 'management', 
    loadChildren: () => import('./modules/management/management.routes').then(m => m.MANAGEMENT_ROUTES)},


    //compras
    { path: "carrito", component: CarritoComponent },
    { path: "productos", component: ProductosComponent},
    { path: "detalle-producto", component: DetalleProductoComponent }


];

