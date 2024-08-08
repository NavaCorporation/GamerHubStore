import { Component, OnInit } from '@angular/core';
import {  RouterLink } from '@angular/router';
import { Tarea } from '../models/tarea';
import { Ventas } from '../models/ventas';
import { VentasService } from '../services/ventas.service';
import { UserService } from '../services/user.service';
import { SidebarComponent } from "../sidebar/sidebar.component";


@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [RouterLink, SidebarComponent]
})
export class DashboardComponent implements OnInit {
    user = {
    name: '',
    email: '',
    photoUrl: ''
  };

  
  tasks: Tarea[] = [];
  pendingTasksCount: number = 0;
  sales: Ventas = new Ventas(0, 0, '', '');
  pendingTasksCount2: number = 0;



  constructor( private salesService: VentasService,
    private userService: UserService
  ) { 
    // Load user data from localStorage
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

    ngOnInit(): void {
   
    this.salesService.getSales().subscribe(sales => {
      this.sales = sales;
    });


  }







  
}
  

  
  

 
