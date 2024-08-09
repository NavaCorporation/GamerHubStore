import { Component, ElementRef, ViewChild } from '@angular/core';
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
  usuario : Usuario = {} as Usuario;
  fotoPerfilBase64: string | undefined;
  selectedFile: File | null = null;
  @ViewChild('fileInput') fileInput: ElementRef<HTMLInputElement> | undefined;

  
  constructor(private fb: FormBuilder,
    public clienteService: ClienteServiceService,
    private UserService : UserService ,
    private authService: AuthenticationService,private sanitizer:DomSanitizer, private Router:Router,userService :UserService ) { 
    this.profileForm = this.fb.group({
      firstName: [{ value: '', disabled: true }],
      lastName: [{ value: '', disabled: true }],
      email: [{ value: '', disabled: true }],
      phoneNumber: [{ value: '', disabled: true }],
    });
  }
  
  ngOnInit(): void {
    this.loadUserData();
    this.clienteService.getFotoPerfil().subscribe(
      (base64Image: string) => {
        this.fotoPerfilBase64 = `data:image/jpeg;base64,${base64Image}`;
      },
      error => {
        console.error('Error al obtener la foto de perfil', error);
      }
    );
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
      if (this.currentUser && this.currentUser.id !== undefined) {
      }
    });
  }
  

  loadUserData(): void {
    this.authService.currentUser.subscribe(
      (currentUser: Usuario | null) => {
        if (currentUser && currentUser.id) {
          this.clienteService.getUser(currentUser.id).subscribe(
            (user: Usuario) => {
              this.usuario = user;
              
              this.profileForm.patchValue({
                id: user.id,
                image: user.fotoProfile,
                firstName: user.nombre,
                lastName: user.apellido,
                email: user.correo,
                phoneNumber: user.telefono
              });

              this.profileImage = user.fotoProfile;
            },
            (error) => {
              console.error('Error al cargar los datos del usuario:', error);
            }
          );
        }
      },
      (error) => {
        console.error('Error al obtener el usuario autenticado:', error);
      }
    );
  }


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
        ...this.usuario,
        nombre: this.profileForm.value.firstName,
        apellido: this.profileForm.value.lastName,
        correo: this.profileForm.value.email,
        telefono: this.profileForm.value.phoneNumber
      };

      this.clienteService.updateUserProfile(updatedUser).subscribe(
        response => {
          console.log('Perfil actualizado con éxito', response);
          this.isEditing = false; // Desactivar el modo de edición
        },
        error => {
          console.error('Error al actualizar el perfil', error);
        }
      );
    } else {
      console.warn('El formulario no es válido');
    }
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.fotoPerfilBase64 = e.target.result;
      };
      reader.readAsDataURL(file); // Convierte la imagen a base64
    }
  }

  onSavePhoto(): void {
    if (this.selectedFile) {
      this.clienteService.updateProfilePicture(this.selectedFile).subscribe(
        response => {
          console.log('Foto de perfil actualizada con éxito', response);
          // Actualiza la vista o muestra un mensaje de éxito aquí
          this.fotoPerfilBase64 = undefined; // Opcionalmente, puedes limpiar la vista previa
          this.selectedFile = null; // Limpiar el archivo seleccionado
          window.location.reload();
        },
        error => {
          console.error('Error al actualizar la foto de perfil', error);
          // Manejo de errores
        }
      );
    } else {
      console.warn('No se ha seleccionado ninguna foto');
    }
  }

  onEditPhotoClick(): void {
    if (this.fileInput) {
      this.fileInput.nativeElement.click(); // Abre el selector de archivos
    }
  }
}

