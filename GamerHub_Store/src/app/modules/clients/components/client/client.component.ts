import { Component } from '@angular/core';
import { EncabezadoComprasComponent } from "../../../shopping/components/encabezado-compras/encabezado-compras.component";
import { CommonModule } from '@angular/common';
import { OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder,FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
    selector: 'app-client',
    standalone: true,
    templateUrl: './client.component.html',
    styleUrl: './client.component.css',
    imports: [EncabezadoComprasComponent,FormsModule,ReactiveFormsModule,CommonModule]
})
export class ClientComponent implements OnInit {
    userProfilePicture= 'assets/img/userPerfil.jpeg';
    fotoProfilePicture= 'assets/img/fotoPerfil.jpeg';
    profileForm: FormGroup;
    isEditing: boolean = false;
    showSuccessMessage: boolean = false;
  
    constructor(private fb: FormBuilder) {
      this.profileForm = this.fb.group({
        firstName: [{ value: '', disabled: true }],
        lastName: [{ value: '', disabled: true }],
        email: [{ value: '', disabled: true }],
        phoneNumber: [{ value: '', disabled: true }],
        address: [{ value: '', disabled: true }]
      });
      
    }
    ngOnInit(): void {
      
      this.profileForm.patchValue({
        firstName: 'UserName',
        lastName: 'UserLastName',
        email: 'user@gmail.com',
        phoneNumber: '0987654321',
        address: '12 de octubre Guayaquil'
      })
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
     
      console.log(this.profileForm.value);
      this.showSuccessMessage = true;
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 3000);
      this.toggleEdit();
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
    console.log(file); 
  }
  }
}
