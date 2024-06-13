import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-purchase-history',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.css']
})
export class PurchaseHistoryComponent{
  devolucionForm: FormGroup;
  showNotification: boolean = false;
  

  constructor(private fb: FormBuilder) {
    this.devolucionForm = this.fb.group({
      numeroFactura: ['', Validators.required],
      motivoDevolucion: ['', Validators.required]
    });
}

onSubmit(): void {
  if (this.devolucionForm.valid) {
   
    console.log(this.devolucionForm.value);
    this.showNotification = true;
   
    setTimeout(() => {
      this.showNotification = false;
    }, 3000);
  }
}
};


