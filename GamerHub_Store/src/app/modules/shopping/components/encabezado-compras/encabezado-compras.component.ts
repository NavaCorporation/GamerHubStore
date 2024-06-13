import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../../../security/services/authService/authentication.service';
import { DatosUser } from '../../../security/models/datosUser';

@Component({
  selector: 'app-encabezado-compras',
  standalone: true,
  imports: [ CommonModule, RouterLink], 
  templateUrl: './encabezado-compras.component.html',
  styleUrl: './encabezado-compras.component.css'
})
export class EncabezadoComprasComponent implements OnInit {
  currentUser: DatosUser | null = null;

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
