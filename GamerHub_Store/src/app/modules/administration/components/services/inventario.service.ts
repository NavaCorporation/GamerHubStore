import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  private products: Producto[] = [];

  constructor() {}

  getProducts(): Producto[] {
    return this.products;
  }

  addProduct(product: Producto): void {
    this.products.push(product);
  }

  updateProduct(updatedProduct: Producto): void {
    const index = this.products.findIndex((p) => p.id === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
  }

  verifyProduct(productId: number): void {
    const product = this.products.find((p) => p.id === productId);
    if (product) {
      product.isVerified = !product.isVerified;
      this.updateProduct(product);
    }
  }

  removeProduct(productId: number): void {
    this.products = this.products.filter((p) => p.id !== productId);
  }

}
