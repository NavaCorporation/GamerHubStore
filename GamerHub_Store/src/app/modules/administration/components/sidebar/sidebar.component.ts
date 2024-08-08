import { Component, Input, OnInit} from '@angular/core';
import { UserService } from '../services/user.service';
import { AutenticacionService } from '../services/autenticacion.service';
import { Router } from '@angular/router';
import { Usuario } from '../../../../interface/Usuario';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';



@Component({
    selector: 'app-sidebar',
    standalone: true,
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css',
    imports: []
})
export class SidebarComponent  implements OnInit {
  
  currentUser: Usuario | null = null;
  fotoPerfilAdmin: SafeUrl | string = 'assets/img/fotoPerfil.jpg';

  constructor(
    private _authService: AutenticacionService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this._authService.currentUser.subscribe(user => {
      if (user && user.rolId === 3) { 
        this.currentUser = user;
        this.loadProfileImage(user.id!);
      }
    });
  }
  logout(): void {
    this._authService.logoutUser();
    this.router.navigate(['/login']);
  }

  private loadProfileImage(id: number): void {
    this._authService.getFotoPerfil(id).subscribe(
      (base64Image: string) => {
        this.fotoPerfilAdmin = this.sanitizer.bypassSecurityTrustUrl(`data:image/jpeg;base64,${base64Image}`);
      },
      (error: any) => {
        console.error('Error al obtener la foto de perfil', error);
      }
    );
  }
}