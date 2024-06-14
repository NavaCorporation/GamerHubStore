import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AutenticacionService } from '../services/autenticacion.service';

@Component({
  selector: 'app-restablecimiento-c',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './restablecimiento-c.component.html',
  styleUrl: './restablecimiento-c.component.css'
})
export class RestablecimientoCComponent {

  resetPasswordForm: FormGroup;
  passwordResetSuccess = false;
  showSuccessMessage = false;

  constructor(private fb: FormBuilder) {
    this.resetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.resetPasswordForm.valid) {
      // Simulate password reset process
      this.passwordResetSuccess = true;
      this.showSuccessMessage = true;
      this.resetPasswordForm.reset();
      
      // Hide the success message after 5 seconds
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 5000);
    }
  }

  reset() {
    this.passwordResetSuccess = false;
    this.showSuccessMessage = false;
  }
  
}
