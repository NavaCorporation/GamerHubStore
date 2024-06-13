import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../../services/authService/authentication.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomValidators } from '../../models/customValidators';
import { DatosUser } from '../../models/datosUser';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ RouterLink, FormsModule, ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  profilePicturePreview: string | ArrayBuffer | null = null;
  perfilDefault: string = 'assets/img/fotoPerfil.jpg';
  passwordMatch: boolean = false;
  registerForm!: FormGroup;

  constructor( private fb: FormBuilder, private router: Router) {}
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      profilePicture: [null],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.minLength(9)]],
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required] ], 
    }, { validators: CustomValidators.noIgual('password', 'confirmPassword') });
    this.registerForm.statusChanges.subscribe(() => {
      this.passwordMatch = this.registerForm.get('confirmPassword')?.valid || false;
    });
    }

    onRegister(event: Event): void {
      event.preventDefault(); 
      if (this.registerForm.valid) {
        console.log('Register data:', this.registerForm.value);
        alert('Registro exitoso!\n\n' + JSON.stringify(this.registerForm.value, null, 2));
        this.router.navigate(['/login']);
      } else { 
        alert ('Por favor, rellene todos los campos');
      }
    }
    onProfilePictureChange(event: Event): void {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files[0]) {
        const file = input.files[0];
        const allowedMinetypes = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'];
        
        if (!allowedMinetypes.includes(file.type)) {
          alert('El archivo seleccionado no es una imagen válida. Por favor, seleccione una imagen con una extensión válida. (jpg, jpeg, png, gif)');
          return;
        }
  
        this.registerForm.patchValue({ profilePicture: file });
  
        const reader = new FileReader();
        reader.onload = () => {
          this.profilePicturePreview = reader.result;
        };
        reader.readAsDataURL(file);
      }
    }
    triggerFileInput(): void {
      const input = document.getElementById('profilePicture') as HTMLInputElement;
      input.click();
    }

}
