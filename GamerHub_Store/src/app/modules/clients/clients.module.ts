import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { PurchaseHistoryComponent } from './components/purchase-history/purchase-history.component';
import { DatosUser } from '../security/interface/datosUser';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    PurchaseHistoryComponent
  ]
 
})
export class ClientsModule { }
