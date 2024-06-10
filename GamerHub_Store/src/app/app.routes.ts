import { Routes, provideRouter } from '@angular/router';
import { LoginComponent } from './modules/security/components/login/login.component';
import { ClientComponent } from './modules/clients/components/client/client.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProfileComponent } from './modules/management/components/profile/profile.component';


export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'client', component: ClientComponent },
    { path: 'management', 
    loadChildren: () => import('./modules/management/management.routes').then(m => m.MANAGEMENT_ROUTES)},

];

