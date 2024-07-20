import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../../../security/services/authService/authentication.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SecurityNotificationsComponent } from "../../../security/components/security-notifications/security-notifications.component";

@Component({
    selector: 'app-encabezado-compras',
    standalone: true,
    templateUrl: './encabezado-compras.component.html',
    styleUrl: './encabezado-compras.component.css',
    imports: [CommonModule, RouterLink, SecurityNotificationsComponent, HttpClientModule],
})
export class EncabezadoComprasComponent implements OnInit {
  notifications: [{ type: string, message: string }] = [{ type: 'Error', message: 'Intento fallido a la cuenta' }];

  constructor(private _authService: AuthenticationService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onUserLoggedIn(): void {
  }

  logout(): void {
  }

  userEdit(): void {
    this.router.navigate(['/client']);
  }


}
