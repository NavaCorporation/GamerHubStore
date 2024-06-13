import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonEngine } from '@angular/ssr';
@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  contactoForm: FormGroup;
  showNotification: boolean = false;

  constructor(private fb: FormBuilder) {
    this.contactoForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactoForm.valid) {
     
      console.log(this.contactoForm.value);
      this.showNotification = true;
      
      setTimeout(() => {
        this.showNotification = false;
      }, 3000);
      
      this.contactoForm.reset();
    }
  }
}
