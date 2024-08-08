import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncabezadoComprasComponent } from "../encabezado-compras/encabezado-compras.component";
import {Producto} from '../../../../interface/Producto';

@Component({
    selector: 'app-carrito',
    standalone: true,
    templateUrl: './carrito.component.html',
    styleUrl: './carrito.component.css',
    imports: [EncabezadoComprasComponent, CommonModule]
})

export class CarritoComponent {

  productos: { nombreProducto: string; precio: number;}[] = [];
  total = 0;
  iva = 0.12;

  agregarProductoAlCarrito(producto: Producto) {
    this.productos.push(producto);
    this.total += producto.precio;
  }

  calcularTotalConIva(): number {
    return this.total * (1 + this.iva);
  }
}
