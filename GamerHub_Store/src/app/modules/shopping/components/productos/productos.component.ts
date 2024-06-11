import { Component } from '@angular/core';

@Component({
    selector: 'app-productos',
    standalone: true,
imports: [],
    templateUrl: './productos.component.html',
    styleUrl: './productos.component.css'
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
