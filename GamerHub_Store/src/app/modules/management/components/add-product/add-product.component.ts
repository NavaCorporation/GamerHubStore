import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ManagerComponent } from '../manager/manager.component';
import { Producto } from '../../../../interface/Producto';
import { Categoria } from '../../../../interface/Categoria';
import { CategoriaService } from '../../services/Categoria/categoria.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgIf, RouterOutlet, SidebarComponent, ManagerComponent, RouterLink],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {
    productoForm: FormGroup;
    isFormSubmitted: boolean = false;
    productos: Producto[] = [];
    categorias: Categoria[] = [];

    constructor ( private categoriaService: CategoriaService) {
      this.productoForm = new FormGroup({
        nombreproducto: new FormControl('', [Validators.required]),
        precioproducto: new FormControl('', [Validators.required]),
        descripcionproducto: new FormControl('', [Validators.required]),
        imagenproducto: new FormControl('', [Validators.required]),
        categoria: new FormControl('', [Validators.required]),
        stockproducto: new FormControl('', [Validators.required])
      });
    }

    ngOnInit() {  
      this.categoriaService.getCategorias().subscribe(categorias => {
        this.categorias = categorias;
      });
    }

    onSubmit() {
      const isformValid = this.productoForm.valid;
      this.isFormSubmitted = true;
      this.productoForm.markAllAsTouched ;
      if (this.productoForm.valid) {
        const newProducto: Producto = this.productoForm.value;
        this.productos.push(newProducto);
        this.productoForm.reset();
        this.isFormSubmitted = false;
      }
    }

    deleteEvent(index: number) {
      this.productos.splice(index, 1);
    }

}

