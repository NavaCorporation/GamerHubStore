import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../../services/authService/authentication.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Usuario } from '../../../../interface/Usuario';
import { RegisterService } from '../../services/registerService/register.service';
import { AlertaComponent } from '../alerta/alerta.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ RouterLink, FormsModule, ReactiveFormsModule, HttpClientModule, CommonModule, AlertaComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  @Output() registrationSuccess = new EventEmitter<void>();
  profilePicturePreview: string | ArrayBuffer | null = null;
  perfilDefault: string = 'assets/img/fotoPerfil.jpg';
  passwordMatch: boolean = false;
  registerForm!: FormGroup;
  @ViewChild(AlertaComponent) alerta!: AlertaComponent ;

  constructor( private fb: FormBuilder, private router: Router, private _registerService: RegisterService) {}
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      profilePicture: [null],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.minLength(9)]],
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required] ], 
    });
    this.registerForm.statusChanges.subscribe(() => {
      this.passwordMatch = this.registerForm.get('password')?.value === this.registerForm.get('confirmPassword')?.value;
    });
    this._registerService.alertSubject.subscribe(alertData => {
      this.alerta.showAlert(alertData.title, alertData.message, alertData.iconClass, alertData.alertClass);
    });
  
    }

    onRegister(event: Event): void {
      event.preventDefault();
      const formData = new FormData();
      formData.append('nombre', this.registerForm.get('firstName')?.value);
      formData.append('apellido', this.registerForm.get('lastName')?.value);
      formData.append('correo', this.registerForm.get('email')?.value);
      formData.append('nombreUsuario', this.registerForm.get('userName')?.value);
      formData.append('contrasena', this.registerForm.get('password')?.value);
      formData.append('telefono', this.registerForm.get('phoneNumber')?.value);
      formData.append('rolId','1');
      formData.append('estado', 'A');
      if (this.registerForm.get('profilePicture')?.value) {
        formData.append('profilePicture', this.registerForm.get('profilePicture')?.value);
      }
      this._registerService.register(formData).subscribe(
        response => {
          setTimeout(() => {
            this.registrationSuccess.emit();
            if (this.alerta) {
              this.alerta.showAlert('Registro exitoso', 'Se ha registrado exitosamente', 'bi bi-check-circle-fill', 'alert-success');
            } else {
              console.error('Alerta no inicializada');
            }
          }, 2000);
        },
        error => {
          setTimeout(() => {
            if (this.alerta) {
              this.alerta.showAlert('Error', 'Hubo un problema al registrar. Inténtalo de nuevo.', 'bi bi-x-circle-fill', 'alert-danger');
            } else {
              console.error('Alerta no inicializada');
            }
          }, 0);
        }
      );
      /*
      this._registerService.register(formData).subscribe(response => {
        console.log('Registro exitoso', response);
        this.router.navigate(['/login']);
      }, error => {
        console.error('Error al registrar', error);
      });
      */
    }
    

    onProfilePictureChange(event: Event): void {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files[0]) {
        const file = input.files[0];
        const allowedMinetypes = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'];
        
        if (!allowedMinetypes.includes(file.type)) {
          alert('El archivo seleccionado no es una imagen válida. Por favor, seleccione una imagen con una extensión válida. (jpg, jpeg, png, gif)');
          return;
        }
    
        this.registerForm.patchValue({ profilePicture: file });
    
        const reader = new FileReader();
        reader.onload = () => {
          this.profilePicturePreview = reader.result;
        };
        reader.readAsDataURL(file);
      }

    }
    resetRegisterForm(): void {
      this.profilePicturePreview = null;
      this.registerForm.reset();
      const input = document.getElementById('profilePicture') as HTMLInputElement;
      if (input) {
        input.value = '';
      }
    }
    triggerFileInput(): void {
      const input = document.getElementById('profilePicture') as HTMLInputElement;
      input.click();
    }

}
