import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PurchaseHistoryComponent } from './components/purchase-history/purchase-history.component';
import { UserService } from '../administration/components/services/user.service';
import { ClientComponent } from './components/client/client.component';
import { AppComponent } from '../../app.component';
import { DatosUser } from '../security/interface/datosUser';






@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,PurchaseHistoryComponent],
  imports: [
    CommonModule,
    BrowserModule,
    PurchaseHistoryComponent,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[
    HttpClientModule,
    ReactiveFormsModule,
    AppComponent,
    ClientComponent,
    PurchaseHistoryComponent,
    UserService  
  ],
  providers: [
    UserService ],
  
  bootstrap: [ClientComponent]
 
})
export class ClientsModule { }
