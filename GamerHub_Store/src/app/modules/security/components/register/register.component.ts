import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../../services/authService/authentication.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Usuario } from '../../../../interface/Usuario';
import { RegisterService } from '../../services/registerService/register.service';

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

  constructor( private fb: FormBuilder, private router: Router, private _registerService: RegisterService) {}
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
    });
    this.registerForm.statusChanges.subscribe(() => {
      this.passwordMatch = this.registerForm.get('password')?.value === this.registerForm.get('confirmPassword')?.value;
    });
    }

    onRegister(event: Event): void {
      event.preventDefault();
      const formData = new FormData();
      formData.append('nombre', this.registerForm.get('firstName')?.value);
      formData.append('apellido', this.registerForm.get('lastName')?.value);
      formData.append('correo', this.registerForm.get('email')?.value);
      formData.append('nombreUsuario', this.registerForm.get('userName')?.value);
      formData.append('contrasena', this.registerForm.get('password')?.value);
      formData.append('telefono', this.registerForm.get('phoneNumber')?.value);
      formData.append('rolId','1');
      formData.append('estado', 'A');
      if (this.registerForm.get('profilePicture')?.value) {
        formData.append('profilePicture', this.registerForm.get('profilePicture')?.value);
      }
    
      this._registerService.register(formData).subscribe(response => {
        console.log('Registro exitoso', response);
        this.router.navigate(['/login']);
      }, error => {
        console.error('Error al registrar', error);
      });
    }
    onProfilePictureChange(event: Event): void {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files[0]) {
        const file = input.files[0];
        const allowedMinetypes = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'];
        
        if (!allowedMinetypes.includes(file.type)) {
          alert('El archivo seleccionado no es una imagen válida. Por favor, seleccione una imagen con una extensión válida. (jpg, jpeg, png, gif)');
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
