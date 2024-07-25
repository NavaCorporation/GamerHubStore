import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../../../security/services/authService/authentication.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SecurityNotificationsComponent } from "../../../security/components/security-notifications/security-notifications.component";
import { Usuario } from '../../../../interface/Usuario';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-encabezado-compras',
    standalone: true,
    templateUrl: './encabezado-compras.component.html',
    styleUrl: './encabezado-compras.component.css',
    imports: [CommonModule, RouterLink, SecurityNotificationsComponent, HttpClientModule],
})
export class EncabezadoComprasComponent implements OnInit {
  @Input() loggedInUser: Usuario | null = null;
  currentUser: Usuario | null = null;

  constructor(private _authService: AuthenticationService, private router: Router, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this._authService.currentUser.subscribe(user  => this.currentUser = user );
    
  }

  logout(): void {
    this._authService.logoutUser();
    this.router.navigate(['/login']);
    this.loggedInUser = null;
  }

  userEdit(): void {
    this.router.navigate(['/client']);
  }
  getProfileImage(): SafeUrl | string {
    if (this.currentUser && this.currentUser.fotoProfile) {
      return this.sanitizer.bypassSecurityTrustUrl(`data:image/png;base64,${this.currentUser.fotoProfile}`);
    }
    return 'assets/img/fotoPerfil.jpg';
  }

}
