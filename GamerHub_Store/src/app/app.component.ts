import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./modules/shared/components/header/header.component";
import { FooterComponent } from "./modules/shared/components/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, FooterComponent]
})
export class AppComponent {
  title = 'GameHub_Store';
}
