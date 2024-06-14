import { Component } from '@angular/core';
import { EncabezadoComprasComponent } from "../encabezado-compras/encabezado-compras.component";

@Component({
    selector: 'app-productos',
    standalone: true,
    templateUrl: './productos.component.html',
    styleUrl: './productos.component.css',
    imports: [EncabezadoComprasComponent]
})
export class ProductosComponent {

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
