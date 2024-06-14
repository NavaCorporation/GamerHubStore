import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})

export class ProfileComponent implements OnInit  {

  user = {
    name: '',
    email: '',
    photoUrl: ''
  };

  constructor(private userService: UserService) {}

  ngOnInit() {
    // Load user data from localStorage if available
    const savedName = localStorage.getItem('userName');
    const savedEmail = localStorage.getItem('userEmail');
    const savedPhotoUrl = localStorage.getItem('userPhotoUrl');

    if (savedName) {
      this.user.name = savedName;
    }
    if (savedEmail) {
      this.user.email = savedEmail;
    }
    if (savedPhotoUrl) {
      this.user.photoUrl = savedPhotoUrl;
    }

    this.userService.user$.subscribe(user => {
      this.user = { ...user };
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.user.photoUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  updateProfile() {
    if (confirm('¿Estás seguro de que deseas actualizar tu información?')) {
      localStorage.setItem('userName', this.user.name);
      localStorage.setItem('userEmail', this.user.email);
      localStorage.setItem('userPhotoUrl', this.user.photoUrl);

      this.userService.updateUser(this.user);
      console.log('Perfil actualizado', this.user);


    }
  }
}
