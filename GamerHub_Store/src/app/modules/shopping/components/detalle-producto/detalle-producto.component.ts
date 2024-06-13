import { Component } from '@angular/core';
import { EncabezadoComprasComponent } from "../encabezado-compras/encabezado-compras.component";

@Component({
    selector: 'app-detalle-producto',
    standalone: true,
    templateUrl: './detalle-producto.component.html',
    styleUrl: './detalle-producto.component.css',
    imports: [EncabezadoComprasComponent]
})
export class DetalleProductoComponent {

  addToCart() {
    const messageElement = document.getElementById('floating-message');
    if (messageElement) {
      messageElement.style.display = 'block';
      setTimeout(() => {
        messageElement.style.display = 'none';
      }, 3000); // El mensaje desaparecerá después de 3 segundos
    }
  } 

}
