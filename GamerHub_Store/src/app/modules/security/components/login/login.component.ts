import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../../services/authService/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { trigger } from '@angular/animations';
import { DatosUser } from '../../models/datosUser';
import { RegisterComponent } from "../register/register.component";

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterLink, HttpClientModule, RegisterComponent]
})
export class LoginComponent  implements OnInit {
  showLogin: boolean = true;
  showAdminLogin: boolean = false;
  logueo: DatosUser[] = [];
  loginForm!: FormGroup;
  adminLoginForm!: FormGroup;
  passwordVisible: boolean = false;

  //Esto es una prueba
  private readonly adminEmail: string = 'admin@ghs.com';
  private readonly adminPassword: string = 'admin123';
  private readonly adminAccessCode: string = '12345';

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.adminLoginForm = this.fb.group({
      adminCode : ['', Validators.required]
    })
  }

  toggleForm(): void {
    this.showLogin = !this.showLogin;
  }

  onLogin(): void {
    // Prueba de admin
    const {email, password} = this.loginForm.value;
    if (email === this.adminEmail && password === this.adminPassword) {
      this.showAdminLogin = true;
    } 
    // sin el else 
    else if (this.loginForm.valid) {
      if (this.loginForm.valid) {
      console.log('Login data:', this.loginForm.value);
      alert('Login exitoso!\n\n' + JSON.stringify(this.loginForm.value, null, 2));
      this.router.navigate(['/order']);

    } else {
      alert('Error en algun lado');
    }
    }
    
  }

  // Solo es una prueba, manejar con el backend y en authService
  onAdminLogin(): void {
    const {adminCode} = this.adminLoginForm.value;

    if (adminCode === this.adminAccessCode) {
      console.log('Login Admin exitoso!');
      alert('Login Admin exitoso!');
      this.router.navigate(['/dashboard']);
    } else {
      alert('Código de acceso incorrecto');
    }
  }
}
