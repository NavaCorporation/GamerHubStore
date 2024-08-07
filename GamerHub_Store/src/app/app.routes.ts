import { Routes, provideRouter } from '@angular/router';
import { LoginComponent } from './modules/security/components/login/login.component';
import { ClientComponent } from './modules/clients/components/client/client.component';
import { DashboardComponent } from './modules/administration/components/dashboard/dashboard.component';
import { ProductosComponent } from './modules/shopping/components/productos/productos.component';
import { CarritoComponent } from './modules/shopping/components/carrito/carrito.component';
import { DetalleProductoComponent } from './modules/shopping/components/detalle-producto/detalle-producto.component';
import { InventarioComponent } from './modules/administration/components/inventario/inventario.component';
import { EmployeeManagementComponent } from './modules/management/components/employee-management/employee-management.component';
import { HeaderComponent } from './modules/shared/components/header/header.component';
import { FooterComponent } from './modules/shared/components/footer/footer.component';
import { AddProductoComponent } from './modules/management/components/add-product/add-product.component';
//import { ReturnsComponent } from './modules/management/components/returns/returns.component';
import { ProfileComponent } from './modules/administration/components/profile/profile.component';
import { RestablecimientoCComponent } from './modules/administration/components/restablecimiento-c/restablecimiento-c.component';
import { ReporteComponent } from './modules/administration/components/reporte/reporte.component';
import { ContactsComponent } from './modules/clients/components/contacts/contacts.component';
import { PreferencesComponent } from './modules/clients/components/preferences/preferences.component';
import { PurchaseHistoryComponent } from './modules/clients/components/purchase-history/purchase-history.component';
import { ReviewsComponent } from './modules/clients/components/reviews/reviews.component'; 
import { AddCategoryComponent } from './modules/management/components/add-category/add-category.component';


export const routes: Routes = [
    { path: '', redirectTo: 'product', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'client', component: ClientComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'product', component: ProductosComponent },
    { path: 'inventario', component: InventarioComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'restablecimiento-c', component: RestablecimientoCComponent },
    { path: 'reporte', component: ReporteComponent },


    //management
    { path: 'management', component: EmployeeManagementComponent },
    { path: 'addproduct', component: AddProductoComponent},
    { path: 'addcategory', component: AddCategoryComponent},
    //{ path: 'returns', component: ReturnsComponent},



    //compras
    { path: "carrito", component: CarritoComponent },
    { path: "productos", component: ProductosComponent},
    { path: "detalle-producto", component: DetalleProductoComponent },

    //Clients
    { path: 'contacts', component: ContactsComponent },
    { path: 'preferences', component: PreferencesComponent },
    { path: 'historial', component: PurchaseHistoryComponent },
    {path:'comentarios', component: ReviewsComponent},

    { path: '**', redirectTo: 'product', pathMatch: 'full' },
];

