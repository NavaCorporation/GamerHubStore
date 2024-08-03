import { Component, OnInit } from '@angular/core';
import { EncabezadoComprasComponent } from "../encabezado-compras/encabezado-compras.component";
import { CommonModule } from '@angular/common';
import { Producto } from '../../../../interface/Producto';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ProductServicesService } from '../../services/products/product-services.service';

@Component({
    selector: 'app-productos',
    standalone: true,
    templateUrl: './productos.component.html',
    styleUrl: './productos.component.css',
    imports: [EncabezadoComprasComponent, CommonModule]
})
export class ProductosComponent implements OnInit {
[x: string]: any;
  productos: Producto[] = [];
  ImagenProduct: { [key: number]: SafeUrl | null  } = {};
  pagina: number = 1;
  paginaSize: number = 10;
  totalItems: number = 0;
  paginas: number[] = [];
  defaultImage: SafeUrl;
  

  constructor (private productService: ProductServicesService, private sanitizer: DomSanitizer) {
    this.defaultImage = this.sanitizer.bypassSecurityTrustUrl('assets/img/noImagenP.jpg');
  }
  ngOnInit(): void {
    this.loadProductos();
    this.calculatePages();
  }
  loadProductos(): void {
    this.productService.getProductos(this.pagina, this.paginaSize).subscribe(
      (productos: Producto[]) => {
        this.productos = productos;
        this.totalItems = productos.length; 
        this.calculatePages();
        this.productos.forEach(producto => {
          this.loadProductImage(producto.id);
      });

      },
      (error: any) => console.error('Error al obtener los productos', error)
    );
  }
  calculatePages(): void {
    this.paginas = Array(Math.ceil(this.totalItems / this.paginaSize)).fill(0).map((x, i) => i + 1);
  }

  loadProductImage(id: number | undefined): void {
    if (id === undefined) {
      return;
  }
    this.productService.getFotoProducto(id).subscribe(
      (base64Image: string) => {
        this.ImagenProduct[id] = this.sanitizer.bypassSecurityTrustUrl(`data:image/jpeg;base64,${base64Image}`);
      },
      (error: any) => {
        this.ImagenProduct[id] = this.defaultImage;
                console.error('Error al obtener la imagen del producto', error);
      }
    )
  }

  changePage(pagina: number): void {
    this.pagina = pagina;
    this.loadProductos();
  }



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
