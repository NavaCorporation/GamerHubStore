import { Component } from '@angular/core';
import { EncabezadoComprasComponent } from "../encabezado-compras/encabezado-compras.component";

@Component({
    selector: 'app-carrito',
    standalone: true,
    templateUrl: './carrito.component.html',
    styleUrl: './carrito.component.css',
    imports: [EncabezadoComprasComponent]
})
export class CarritoComponent {

}
