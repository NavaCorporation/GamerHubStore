import { Component, Input, OnInit} from '@angular/core';
import { UserService } from '../services/user.service';



@Component({
    selector: 'app-sidebar',
    standalone: true,
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css',
    imports: []
})
export class SidebarComponent  implements OnInit {
  nameAdmin: string = 'AdminSteven';
  emailAdmin: string = 'admin@ghs.com';
  ImgAdmin: string = 'assets/img/userPerfil.jpeg';
  user = {
    name: this.nameAdmin,
    email: this.ImgAdmin,
    photoUrl: this.ImgAdmin
  };

  constructor(private userService: UserService) {}

  isActive: boolean = true; // Activa por defecto

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



 
}