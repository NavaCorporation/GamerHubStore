import { Component } from '@angular/core';
import { EncabezadoComprasComponent } from "../../../shopping/components/encabezado-compras/encabezado-compras.component";
import { CommonModule } from '@angular/common';
import { OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder,FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClienteServiceService } from '../../service/cliente-service.service';
import { AuthenticationService } from '../../../security/services/authService/authentication.service';
@Component({
    selector: 'app-client',
    standalone: true,
    templateUrl: './client.component.html',
    styleUrl: './client.component.css',
    imports: [EncabezadoComprasComponent,FormsModule,ReactiveFormsModule,CommonModule]
})
export class ClientComponent implements OnInit {
  userProfilePicture = 'assets/img/userPerfil.jpeg';
  profileForm: FormGroup;
  isEditing: boolean = false;
  showSuccessMessage: boolean = false;
  userId: number = 1;
  
  constructor(private fb: FormBuilder,
    private clienteService: ClienteServiceService,
    private authService: AuthenticationService) { 
    this.profileForm = this.fb.group({
      firstName: [{ value: '', disabled: true }],
      lastName: [{ value: '', disabled: true }],
      email: [{ value: '', disabled: true }],
      phoneNumber: [{ value: '', disabled: true }],
      address: [{ value: '', disabled: true }]
    });
  }
  
  ngOnInit(): void {
    this.loadUserData(); 
  }
  loadUserData(): void {
    this.clienteService.getUser(this.userId).subscribe(data => {
      this.profileForm.patchValue({
        Nombre: data.nombre,
        lastName: data.apellido,
        phoneNumber: data.telefono,
        address: data.correo
      });
      if (data.fotoProfile) {
        this.userProfilePicture = 'data:image/jpeg;base64,' + data.fotoProfile;
      }
    });
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
      this.clienteService.updateUser({
        id: this.userId,
        nombre: this.profileForm.value.firstName, 
        apellido: this.profileForm.value.lastName,
        correo: this.profileForm.value.email,
        telefono: this.profileForm.value.phoneNumber,
      }).subscribe(() => {
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
      this.clienteService.updateProfilePicture(this.userId, file).subscribe();
    }
  }
}