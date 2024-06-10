import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BillingComponent } from '../billing/billing.component';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterOutlet, BillingComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
