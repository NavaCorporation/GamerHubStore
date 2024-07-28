import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../../../security/services/authService/authentication.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SecurityNotificationsComponent } from "../../../security/components/security-notifications/security-notifications.component";
import { Usuario } from '../../../../interface/Usuario';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../../../security/services/user-management/user.service';


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
  profileImage: SafeUrl | string = 'assets/img/fotoPerfil.jpg';

  constructor(private _authService: AuthenticationService, private router: Router, private sanitizer: DomSanitizer, private _userService: UserService) {
  }

  ngOnInit(): void {
    this._authService.currentUser.subscribe(user => {
      this.currentUser = user;
      if (this.currentUser && this.currentUser.id !== undefined) {
        this.loadProfileImage(this.currentUser.id);
      }
    });
    
  }

  logout(): void {
    this._authService.logoutUser();
    this.router.navigate(['/login']);
    this.loggedInUser = null;
  }

  userEdit(): void {
    this.router.navigate(['/client']);
  }

  loadProfileImage(id: number): void {
    this._userService.getFotoPerfil(id).subscribe(
      (base64Image: string) => {
        this.profileImage = this.sanitizer.bypassSecurityTrustUrl(`data:image/jpeg;base64,${base64Image}`);
      },
      (error: any) => {
        console.error('Error al obtener la foto de perfil', error);
      }
    );
  }

}
