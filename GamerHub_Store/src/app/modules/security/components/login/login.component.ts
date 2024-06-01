import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  showLogin: boolean = true;
  profilePicturePreview: string | ArrayBuffer | null = null;
  loginForm!: FormGroup;
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.registerForm = this.fb.group({
      profilePicture: [null],
      firsName: [''],
      lastName: [''],
      userName: [''],
      email: [''],
      phoneNumber: [''],
      password: ['']

    });
  }
  toggleForm(): void {
    this.showLogin = !this.showLogin;
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      console.log('Login data:', this.loginForm.value);
    }
  }

  onRegister(event: Event): void {
    event.preventDefault(); 
    if (this.registerForm.valid) {
      console.log('Register data:', this.registerForm.value);
    }
  }
  onProfilePictureChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.registerForm.patchValue({ profilePicture: file });

      const reader = new FileReader();
      reader.onload = () => {
        this.profilePicturePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
