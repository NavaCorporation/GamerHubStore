import { Routes, provideRouter } from '@angular/router';
import { LoginComponent } from './modules/security/components/login/login.component';
import { ClientComponent } from './modules/clients/components/client/client.component';
import { DashboardComponent } from './modules/administration/components/dashboard/dashboard.component';
import { ProductosComponent } from './modules/shopping/components/productos/productos.component';
import { CarritoComponent } from './modules/shopping/components/carrito/carrito.component';
import { DetalleProductoComponent } from './modules/shopping/components/detalle-producto/detalle-producto.component';
import { AgregarTareaComponent } from './modules/administration/components/agregar-tarea/agregar-tarea.component';
import { InventarioComponent } from './modules/administration/components/inventario/inventario.component';
import { TareaPendienteComponent } from './modules/administration/components/tarea-pendiente/tarea-pendiente.component';
import { VerificacionesComponent } from './modules/administration/components/verificaciones/verificaciones.component';
import { VerificacionDetallesComponent } from './modules/administration/components/verificacion-detalles/verificacion-detalles.component';



export const routes: Routes = [
    { path: '', redirectTo: 'product', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'client', component: ClientComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'product', component: ProductosComponent },
    { path: 'agregar-tarea', component: AgregarTareaComponent },
    { path: 'inventario', component: InventarioComponent },
    { path: 'tarea-pendiente', component: TareaPendienteComponent },
    { path: 'verificaciones', component: VerificacionesComponent },
    { path: 'verificacion-detalles', component: VerificacionDetallesComponent },
    { path: '**', redirectTo: 'login', pathMatch: 'full' },
    { path: 'management', 
    loadChildren: () => import('./modules/management/management.routes').then(m => m.MANAGEMENT_ROUTES)},


    //compras
    { path: "carrito", component: CarritoComponent },
    { path: "productos", component: ProductosComponent},
    { path: "detalle-producto", component: DetalleProductoComponent }


];

