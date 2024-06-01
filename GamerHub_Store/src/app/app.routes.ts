import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/security/components/login/login.component';
import { ClientComponent } from './modules/clients/components/client/client.component';


export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'client', component: ClientComponent },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];
