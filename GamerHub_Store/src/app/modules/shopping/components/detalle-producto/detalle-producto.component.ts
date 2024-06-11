import { Component } from '@angular/core';

@Component({
  selector: 'app-detalle-producto',
  standalone: true,
  imports: [],
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.css'
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
