import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncabezadoComprasComponent } from "../encabezado-compras/encabezado-compras.component";
import {Producto} from '../../../../interface/Producto';
import { ProductosComponent } from '../productos/productos.component';
import { RouterOutlet } from '@angular/router';
import { CarritopruebaService } from '../../services/carritoprueba/carritoprueba.service';

@Component({
    selector: 'app-carrito',
    standalone: true,
    templateUrl: './carrito.component.html',
    styleUrl: './carrito.component.css',
    imports: [EncabezadoComprasComponent, CommonModule, ProductosComponent, RouterOutlet]
})

export class CarritoComponent {

  productosCarrito: Producto[]= [];
  total = 0;
  iva = 0.12;
agregarAlCarrito: any;
 constructor(private carritopruebaservice: CarritopruebaService) {}


 ngOnInit() {
  this.carritopruebaservice.productosCarrito$.subscribe(productos => {
    this.productosCarrito = productos;
    this.total = this.carritopruebaservice.calcularTotal();
  });
}
  calcularTotalConIva(): number {
    return this.total * (1 + this.iva);
  }
}
