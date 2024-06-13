import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { ManagerComponent } from '../manager/manager.component';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterOutlet, ManagerComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
