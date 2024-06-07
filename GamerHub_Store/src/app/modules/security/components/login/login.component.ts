import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authService/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit {
  showLogin: boolean = true;
  profilePicturePreview: string | ArrayBuffer | null = null;
  perfilDefault: string = 'assets/img/fotoPerfil.jpg';
  loginForm!: FormGroup;
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.registerForm = this.fb.group({
      profilePicture: [null],
      firstName: [''],
      lastName: [''],
      userName: [''],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: [''],
    });
  }

  toggleForm(): void {
    this.showLogin = !this.showLogin;
    if (this.showLogin) {
      this.registerForm.reset();
      this.profilePicturePreview = null;
    }
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      console.log('Login data:', this.loginForm.value);
      alert('Login exitoso!\n\n' + JSON.stringify(this.loginForm.value, null, 2));
    } else {
      alert('Error en algun lado');
    }
  }

  onRegister(event: Event): void {
    event.preventDefault(); 
    if (this.registerForm.valid) {
      console.log('Register data:', this.registerForm.value);
      alert('Registro exitoso!\n\n' + JSON.stringify(this.registerForm.value, null, 2));
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
