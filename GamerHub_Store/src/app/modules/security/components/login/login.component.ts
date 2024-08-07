import { CommonModule } from '@angular/common';
import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../../services/authService/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { Usuario } from '../../../../interface/Usuario';
import { RegisterComponent } from "../register/register.component";
import { LoginAdmComponent } from "../login-adm/login-adm.component";
import { EncabezadoComprasComponent } from "../../../shopping/components/encabezado-compras/encabezado-compras.component";
import { NotificationService } from '../../services/notifications/notification.service';
import { AlertaComponent } from "../alerta/alerta.component";
@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterLink, HttpClientModule, RegisterComponent, LoginAdmComponent, EncabezadoComprasComponent, AlertaComponent],
})

export class LoginComponent implements OnInit {
  @Output() userLoggedIn = new EventEmitter<Usuario>();
  @ViewChild(AlertaComponent) alerta!: AlertaComponent;
  showLogin: boolean = true;
  showAdminLogin: boolean = false;
  loginForm!: FormGroup;
  loggedInUser: Usuario | null = null;

  constructor(private fb: FormBuilder, private router: Router, private _authService: AuthenticationService, private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.loginForm.get('email')?.valueChanges.subscribe(value => {
    });
    this._authService.alertSubject.subscribe(alertData => {
      this.alerta.showAlert(alertData.title, alertData.message, alertData.iconClass, alertData.alertClass);
    });
  }

  toggleAdminLogin(): void {
    this.showAdminLogin = !this.showAdminLogin;
  }

  resetForm() {
    this.loginForm.reset();
  }
  toggleForm(): void {
    this.showLogin = !this.showLogin;
    this.resetForms();
  }
  onLogin(): void {
    const { email, password } = this.loginForm.value;

    this._authService.login(email, password).subscribe(
      user => {
        if (user) {
          this.loggedInUser = user;
          this.userLoggedIn.emit(user);
          if (email.endsWith('@ghs.com')) {
            this.showAdminLogin = true;
          } else {
           //this.router.navigate(['/productos']);
          setTimeout(() => {
            this.router.navigate(['/productos']);
          }, 2000);
          }
        }
      },
      error => {
        this.notificationService.addNotification({ type: 'Error de inicio de sesión', message: 'Se ha detectado un error al iniciar sesión' });
      }
    );
  }
  logoutUser(): void {
    this._authService.logoutUser();
    this.loggedInUser = null;
    this.resetForms();
  }
  resetForms(): void {
    this.loginForm.reset();
    this.showAdminLogin = false;
  }
  hasNotification(): boolean {
    return this.notificationService.hasNotifications();
  }
  onRegistrationSuccess(): void {
    this.showLogin = true;
  }

}
