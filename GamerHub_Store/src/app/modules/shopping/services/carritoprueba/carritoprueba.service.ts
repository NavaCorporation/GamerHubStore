import { Injectable } from '@angular/core';
import { Producto } from '../../../../interface/Producto';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritopruebaService {
  private productosCarritoSubject = new BehaviorSubject<Producto[]>([]);
  productosCarrito$ = this.productosCarritoSubject.asObservable();

  agregarProductoalCarrito(producto: Producto) {
    const productosActuales = this.productosCarritoSubject.value;
    this.productosCarritoSubject.next([...productosActuales, producto]); // Aquí se agrega el nuevo producto
  }

  getProductosCarrito(): Producto[] {
    return this.productosCarritoSubject.value;
  }

  calcularTotal(): number {
    return this.getProductosCarrito().reduce((acc, producto) => acc + producto.precio, 0);
  }

  calcularTotalConIva(): number {
    return this.calcularTotal() * 1.12; // 12% de IVA
  }
}