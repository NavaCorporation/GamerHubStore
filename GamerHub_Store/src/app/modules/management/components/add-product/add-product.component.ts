import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ManagerComponent } from '../manager/manager.component';
import { Producto } from '../../../../interface/Producto';
import { Categoria } from '../../../../interface/Categoria';
import { CategoriaService } from '../../services/Categoria/categoria.service';
import { ProductoService } from '../../services/Producto/producto.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgIf, RouterOutlet, SidebarComponent, ManagerComponent, RouterLink],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductoComponent implements OnInit {
  productoForm: FormGroup;
  categorias: Categoria[] = [];
  productos: Producto[] = [];
  isFormSubmitted = false;
  image: File | null = null;
  editingProductId: number | null = null;
  
  constructor(
    private fb: FormBuilder,
    private productoService: ProductoService,
    private categoriaService: CategoriaService
  ) {
    this.productoForm = this.fb.group({
      nombreProducto: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]],
      caracteristicas: ['', Validators.required],
      descripcion: ['', Validators.required],
      stock: ['', [Validators.required, Validators.min(0)]],
      categoriaId: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadCategorias();
    this.loadProductos();
  }

  loadCategorias(): void {
    this.categoriaService.getCategorias().subscribe(categorias => {
      this.categorias = categorias;
    });
  }
  loadProductos(): void {
    this.productoService.getProductos().subscribe({
      next: (data: Producto[]) => {
        this.productos = data;
      },
      error: (err) => {
        console.error('Error al cargar productos', err);
      }
    });
  }


  onFileChange(event: any) {
    if (event.target.files && event.target.files.length) {
      this.image = event.target.files[0];
    } else {
      this.image = null;
    }
  }

  iniciarEdicion(producto: Producto): void {
    this.editingProductId = producto.id || null;
    this.productoForm.patchValue(producto);
    this.image = null;
  }
  registrarOActualizar() {
    this.isFormSubmitted = true; // Marcar el formulario como enviado para mostrar errores

    if (this.productoForm.valid) {
      const producto: Producto = this.productoForm.value;
      const imagen: File | null = this.image; // Usar null

      if (this.editingProductId !== null) {
        producto.id = this.editingProductId;
        this.productoService.actualizarProducto(producto, imagen).subscribe(
          actualizado => {
            console.log('Producto actualizado exitosamente:', actualizado);
            this.productos = this.productos.map(p => p.id === actualizado.id ? actualizado : p);
            this.productoForm.reset();
            this.image = null;
            this.isFormSubmitted = false;
            this.editingProductId = null;
            alert('Producto actualizado exitosamente');
            window.location.reload();
          },
          error => {
            console.error('Error al actualizar el producto:', error);
          }
        );
      } else {
        this.productoService.registrarProducto(producto, imagen).subscribe(
          nuevoProducto => {
            console.log('Producto registrado exitosamente:', nuevoProducto);
            this.productos.push(nuevoProducto);
            this.productoForm.reset();
            this.image = null;
            this.isFormSubmitted = false;
            alert('Producto registrado exitosamente');
            window.location.reload();
          },
          error => {
            console.error('Error al registrar el producto:', error);
          }
        );
      }
    } else {
      console.log('Formulario inválido o imagen no seleccionada');
    }
  }


  eliminarProducto(id: number | undefined): void {
    if (id !== undefined) {
      if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
        this.productoService.deleteProducto(id).subscribe(
          () => {
            // Eliminar el producto de la lista en el frontend
            this.productos = this.productos.filter(producto => producto.id !== id);
            console.log('Producto eliminado exitosamente');
          },
          error => {
            console.error('Error al eliminar el producto:', error);
          }
        );
      }
    } else {
      console.error('ID del producto no definido');
    }
  }
  //Filtros
  filterByPrice(event: any): void {
    this.applyFilters();
  }
  
  filterByProductName(event: any): void {
    this.applyFilters();
  }
  
  filterByCategory(event: any): void {
    this.applyFilters();
  }
  
  applyFilters(): void {
    const priceFilter = parseFloat((document.getElementById('searchPrice') as HTMLInputElement).value);
    const productFilter = (document.getElementById('searchProductName') as HTMLInputElement).value.toLowerCase();
    const categoryFilter = (document.getElementById('searchCategory') as HTMLInputElement).value.toLowerCase();
  
    this.productos = this.productos.filter(product => {
      const matchesPrice = isNaN(priceFilter) || product.precio.toString().includes(priceFilter.toString());
      const matchesProduct = !productFilter || product.nombreProducto.toLowerCase().includes(productFilter);
      const matchesCategory = !categoryFilter || product.categoria?.nombreCategoria.toLowerCase().includes(categoryFilter);
      return matchesPrice && matchesProduct && matchesCategory;
      
    });
  }
  resetFilters(): void {
    this.loadProductos();
    (document.getElementById('searchPrice') as HTMLInputElement).value = '';
    (document.getElementById('searchProductName') as HTMLInputElement).value = '';
    (document.getElementById('searchCategory') as HTMLInputElement).value = '';
  } 

}


