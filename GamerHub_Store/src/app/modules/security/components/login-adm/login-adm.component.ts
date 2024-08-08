import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../../services/authService/authentication.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-login-adm',
  standalone: true,
  imports: [ CommonModule, RouterLink, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './login-adm.component.html',
  styleUrl: './login-adm.component.css'
})
export class LoginAdmComponent implements OnInit {

  loginForm: FormGroup;
  adminLoginForm: FormGroup;
  isAuthenticated: boolean = false;
  private readonly adminAccessCode: string = '12345';
  private readonly gestorAccessCode: string = '67890';

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthenticationService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.adminLoginForm = this.fb.group({
      adminCode: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onLogin(): void {
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password).subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.isAuthenticated = true;
      } else {
        alert('Invalid credentials');
      }
    });
  }

  onAdminLogin(): void {
    const { adminCode } = this.adminLoginForm.value;

    if (adminCode === this.adminAccessCode) {
      console.log('Login Admin exitoso!');
      alert('Login Admin exitoso!');
      this.router.navigate(['/dashboard']);
    } else if (adminCode === this.gestorAccessCode) {
      console.log('Login Gestor exitoso!');
      alert('Login Gestor exitoso!');
      this.router.navigate(['/management']);
    } else {
      alert('Solo personal autorizado');
    }
  }
}
