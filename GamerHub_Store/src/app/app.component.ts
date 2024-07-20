import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { HeaderComponent } from "./modules/shared/components/header/header.component";
import { FooterComponent } from "./modules/shared/components/footer/footer.component";
import { SidebarComponent } from './modules/management/components/sidebar/sidebar.component';
import { EncabezadoComprasComponent } from "./modules/shopping/components/encabezado-compras/encabezado-compras.component";
import { SecurityModule } from './modules/security/security.module';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterLink, HeaderComponent, FooterComponent, EncabezadoComprasComponent, SidebarComponent, SecurityModule],
})
export class AppComponent {
  title = 'GameHub_Store';

  constructor(private router: Router ) { }
  
  
isLoginPage(): boolean {
    return this.router.url === '/login';
  }
}