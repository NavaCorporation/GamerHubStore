import { Component } from '@angular/core';
import { EncabezadoComprasComponent } from "../../../shopping/components/encabezado-compras/encabezado-compras.component";

@Component({
    selector: 'app-client',
    standalone: true,
    templateUrl: './client.component.html',
    styleUrl: './client.component.css',
    imports: [EncabezadoComprasComponent]
})
export class ClientComponent {
    userProfilePicture= 'assets/img/userPerfil.jpeg';
}
