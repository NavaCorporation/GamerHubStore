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

  adminLoginForm: FormGroup;
  showAdminLogin: boolean = false;
  private readonly adminAccessCode: string = '12345';
  private readonly gestorAccessCode: string = '67890';
  constructor(private fb: FormBuilder, private router: Router) {
    this.adminLoginForm = this.fb.group({
      adminCode : ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.adminLoginForm = this.fb.group({
      adminCode: ['', [Validators.required]]
    });
  }

  onAdminLogin(): void {
    const {adminCode} = this.adminLoginForm.value;

    if (adminCode === this.adminAccessCode) {
      console.log('Login Admin exitoso!');
      alert('Login Admin exitoso!');
      this.router.navigate(['/dashboard']);
    } else if (adminCode === this.gestorAccessCode) {
      console.log('Login Gestor exitoso!');
      alert('Login Gestor exitoso!');
      this.router.navigate(['/management']);
    }
    
    else {
      alert('Código de acceso incorrecto');
    }
  }

}
