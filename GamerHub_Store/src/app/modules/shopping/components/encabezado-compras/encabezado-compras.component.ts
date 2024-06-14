import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../../../security/services/authService/authentication.service';
import { DatosUser } from '../../../security/models/datosUser';
import { SecurityNotificationsComponent } from "../../../security/components/security-notifications/security-notifications.component";

@Component({
    selector: 'app-encabezado-compras',
    standalone: true,
    templateUrl: './encabezado-compras.component.html',
    styleUrl: './encabezado-compras.component.css',
    imports: [CommonModule, RouterLink, SecurityNotificationsComponent]
})
export class EncabezadoComprasComponent implements OnInit {
  currentUser: DatosUser | null = null;
  notifications: [{ type: string, message: string }] = [{ type: 'Error', message: 'Intento fallido a la cuenta' }];

  constructor(private authService: AuthenticationService, private router: Router) {
    this.authService.currentUser.subscribe(user => this.currentUser = user);
  }

  ngOnInit(): void {
  }

  onUserLoggedIn(user: DatosUser): void {
    this.currentUser = user;
  }

  logout(): void {
    this.currentUser = null;
  }

  userEdit(): void {
    this.router.navigate(['/client']);
  }


}
