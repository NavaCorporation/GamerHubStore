import { Component, OnInit } from '@angular/core';
import { EncabezadoComprasComponent } from "../encabezado-compras/encabezado-compras.component";
import { CommonModule } from '@angular/common';
import { Producto } from '../../../../interface/Producto';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ProductServicesService } from '../../services/products/product-services.service';
import { Categoria } from '../../../../interface/Categoria';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-productos',
    standalone: true,
    templateUrl: './productos.component.html',
    styleUrl: './productos.component.css',
    imports: [EncabezadoComprasComponent, CommonModule, FormsModule]
})
export class ProductosComponent implements OnInit {
[x: string]: any;
  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];
  selectedProduct: Producto | null = null;
  ImagenProduct: { [key: number]: SafeUrl | null } = {};
  selectCategoria: number | null = null;
  minPrice: number = 0;
  maxPrice: number = 1000;
  searchName: string = '';
  categorias: Categoria[] = [];
  pagina: number = 1;
  paginaSize: number = 10;
  totalItems: number = 0;
  paginas: number[] = [];
  defaultImage: SafeUrl;
  noProductsImage: SafeUrl;
  producto ={
    
  }
  

  constructor (private productService: ProductServicesService, private sanitizer: DomSanitizer) {
    this.defaultImage = this.sanitizer.bypassSecurityTrustUrl('assets/img/noImagenP.jpg');
    this.noProductsImage = this.sanitizer.bypassSecurityTrustUrl('assets/img/error404.avif');
  }
  ngOnInit(): void {
    this.loadProductos();
    this.loadCategorias();
  }

  loadProductos(): void {
    if (this.selectCategoria) {
      this.productService.getProductosPorCategoria(this.selectCategoria, this.pagina, this.paginaSize).subscribe(
          (productos: Producto[]) => {
              this.productos = productos;
              this.totalItems = productos.length;
              this.calculatePages();
              this.productos.forEach(producto => this.loadProductImage(producto.id));
              this.filtrarProductos();
          },
          (error: any) => console.error('Error al obtener los productos', error)
      );
    } else {
        this.productService.getProductos(this.pagina, this.paginaSize).subscribe(
            (productos: Producto[]) => {
                this.productos = productos;
                this.totalItems = productos.length;
                this.calculatePages();
                this.productos.forEach(producto => this.loadProductImage(producto.id));
                this.filtrarProductos();
            },
            (error: any) => console.error('Error al obtener los productos', error)
        );
    }
  
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

  setSelectedProducto(producto: Producto): void {
    this.selectedProduct = producto;
  }

  loadCategorias(): void {
    this.productService.getCategorias().subscribe(
      (categorias: Categoria[]) => {
        this.categorias = categorias;
      },
      (error: any) => console.error('Error al obtener las categorías', error)
    );
  }



  addToCart() {
    const messageElement = document.getElementById('floating-message');
    if (messageElement) {
      messageElement.style.display = 'block';
      setTimeout(() => {
        messageElement.style.display = 'none';
      }, 3000); 
    }
  }


  applyFilters(productos: Producto[]): Producto[] {
    return productos.filter(producto => {
        const matchesCategory = this.selectCategoria ? producto.categoriaId === this.selectCategoria : true;
        const matchesPrice = producto.precio >= this.minPrice && producto.precio <= this.maxPrice;
        const matchesName = producto.nombreProducto.toLowerCase().includes(this.searchName.toLowerCase());
        return matchesCategory && matchesPrice && matchesName;
    });
}

  filtrarProductos(): void {
    this.productosFiltrados = this.applyFilters(this.productos);
  }
  onCategoryChange(event: any): void {
    this.selectCategoria = event.target.value ? Number(event.target.value) : null;
    this.filtrarProductos();
  }
  mostrarSiNoHayProducto(): boolean {
    return this.productosFiltrados.length === 0;
  }
  
  //agregar 





}
