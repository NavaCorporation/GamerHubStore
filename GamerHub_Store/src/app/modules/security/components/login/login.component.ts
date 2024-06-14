import { CommonModule } from '@angular/common';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../../services/authService/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { DatosUser } from '../../models/datosUser';
import { RegisterComponent } from "../register/register.component";
import { LoginAdmComponent } from "../login-adm/login-adm.component";
import { EncabezadoComprasComponent } from "../../../shopping/components/encabezado-compras/encabezado-compras.component";
import { NotificationService } from '../../services/notifications/notification.service';
@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterLink, HttpClientModule, RegisterComponent, LoginAdmComponent, EncabezadoComprasComponent]
})
export class LoginComponent  implements OnInit {
  @Output() userLoggedIn = new EventEmitter<DatosUser>();
  showLogin: boolean = true;
  showAdminLogin: boolean = false;
  loginForm!: FormGroup;
  loggedInUser: DatosUser | null = null;

  //Esto es una prueba para el admin
  private readonly adminEmail: string = 'admin@ghs.com';
  private readonly adminPassword: string = 'admin123';
  //Esto es una prueba para el gestor
  private readonly gestorEmail: string = 'gestor@ghs.com';
  private readonly gestorPassword: string = 'gestor123';
  //Esto es una prueba para user
  useName= 'Usuario1';
  userPassword= 'user123';
  userEmail= 'user@gmail.com';
  userProfilePicture= 'assets/img/userPerfil.jpeg';

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthenticationService, private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  toggleAdminLogin(): void {
    this.showAdminLogin = !this.showAdminLogin;
  }

  toggleForm(): void {
    this.showLogin = !this.showLogin;
  }

  onLogin(): void {
    // Prueba de admin
    const {email, password} = this.loginForm.value;

    if ((email === this.adminEmail && password === this.adminPassword || email === this.gestorEmail && password === this.gestorPassword)) {
      this.showAdminLogin = true;
    } 
    // sin el else 
    else if (email === this.userEmail && password === this.userPassword) {
      // Autenticación exitosa, establece el usuario actual
      const user: DatosUser = {
        profilePicture: this.userProfilePicture,
        firstName: this.useName,
        lastName: this.useName,
        userName: this.useName,
        email: this.userEmail,
        phoneNumber: '123456789',
        password: this.userPassword
      }
      this.authService.loginUser(user);
      //this.notificationService.clearNotifications();
      console.log('Login data:', this.loginForm.value);
      //alert('Login exitoso!\n\n' + JSON.stringify(this.loginForm.value, null, 2));
      this.router.navigate(['/product']);
    } 
    else {
      // Autenticación fallida, muestra un mensaje de error
      this.notificationService.addNotification({type: 'Error de inicio de sesión', message: 'Se ha detectado un error al iniciar sesión'});
      alert('Credenciales incorrectas');
    }
    
    
  }
  logoutUser(): void {
    this.authService.logoutUser();
  }
  
  
  resetForms (): void {
    this.loginForm.reset();
    this.showAdminLogin = false;
  }
  hasNotification(): boolean {
    return this.notificationService.hasNotifications();
  }
}
