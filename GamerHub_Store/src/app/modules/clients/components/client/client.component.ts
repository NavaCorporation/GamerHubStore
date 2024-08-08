import { Component } from '@angular/core';
import { EncabezadoComprasComponent } from "../../../shopping/components/encabezado-compras/encabezado-compras.component";
import { CommonModule } from '@angular/common';
import { OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder,FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClienteServiceService } from '../../service/cliente-service.service';
import { AuthenticationService } from '../../../security/services/authService/authentication.service';
import { Usuario } from '../../../../interface/Usuario';
import { SafeUrl, DomSanitizer, } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserService } from '../../../security/services/user-management/user.service';
@Component({
    selector: 'app-client',
    standalone: true,
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.css'],
    imports: [EncabezadoComprasComponent,FormsModule,ReactiveFormsModule,CommonModule,]
})
export class ClientComponent implements OnInit {
  userProfilePicture = 'assets/img/userPerfil.jpeg';
  profileForm: FormGroup;
  isEditing: boolean = false;
  showSuccessMessage: boolean = false;
  currentUser:Usuario|null=null;
  profileImage: SafeUrl | string = 'assets/img/fotoPerfil.jpg';
  
  constructor(private fb: FormBuilder,
    private clienteService: ClienteServiceService,
    private UserService : UserService ,
    private authService: AuthenticationService,private sanitizer:DomSanitizer, private Router:Router,userService :UserService ) { 
    this.profileForm = this.fb.group({
      firstName: [{ value: '', disabled: true }],
      lastName: [{ value: '', disabled: true }],
      email: [{ value: '', disabled: true }],
      phoneNumber: [{ value: '', disabled: true }],
      //address: [{ value: '', disabled: true }]
    });
  }
  
  ngOnInit(): void {
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
      if (this.currentUser && this.currentUser.id !== undefined) {
       // this.loadProfileImage(this.currentUser.id);
       // this.loadUserData();
      }
    });
  }
/* loadUserData(): void {
    const currentUser = this.authService.currentUserValue;
    if (currentUser) {
      this.clienteService.getUser(currentUser.id).subscribe(data => {
        this.profileForm.patchValue({
          firstName: data.nombre,
          lastName: data.apellido,
          email: data.correo,
          phoneNumber: data.telefono,
         // address: data.direccion // Asegúrate de que esta propiedad existe y es correcta
        });
  
        if (data.fotoProfile) {
          this.userProfilePicture = 'data:image/jpeg;base64,' + data.fotoProfile;
        }
      });
    }
  }*/
  toggleEdit(): void {
    this.isEditing = !this.isEditing;
    if (this.isEditing) {
      this.profileForm.enable();
    } else {
      this.profileForm.disable();
    }
  }

 saveChanges(): void {
    if (this.profileForm.valid) {
      const updatedUser: Usuario = {
        id: this.authService.currentUserValue?.id,
        nombre: this.profileForm.value.firstName,
        apellido: this.profileForm.value.lastName,
        correo: this.profileForm.value.email,
        telefono: this.profileForm.value.phoneNumber,
        nombreUsuario: '',
        contrasena: '',
        estado: '',
       fotoProfile: null!,
        rolId: 0
      };
  
      this.clienteService.updateUser(updatedUser).subscribe(() => {
        this.showSuccessMessage = true;
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 3000);
        this.toggleEdit();
      });
    }
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.userProfilePicture = e.target.result;
      };
      reader.readAsDataURL(file);
    //  this.UserService.getFotoPerfil(this.authService.currentUserValue?.id!, file).subscribe();
    }
  }
 /* loadProfileImage(id: number): void {
    this.UserService.getFotoPerfil(id).subscribe(
      (base64Image: string) => {
        this.profileImage = this.sanitizer.bypassSecurityTrustUrl(`data:image/jpeg;base64,${base64Image}`);
      },
      (error: any) => {
        console.error('Error al obtener la foto de perfil', error);
      }
    );
  }*/
}