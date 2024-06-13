import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ManagerComponent } from '../manager/manager.component';

@Component({
  selector: 'app-employee-management',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './employee-management.component.html',
  styleUrl: './employee-management.component.css'
})
export class EmployeeManagementComponent {

}
