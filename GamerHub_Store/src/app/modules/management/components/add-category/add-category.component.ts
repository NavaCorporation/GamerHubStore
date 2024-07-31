import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Categoria } from '../../../../interface/Categoria';
import { CategoriaService } from '../../services/Categoria/categoria.service';
import { Producto } from '../../../../interface/Producto';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgIf, RouterOutlet, SidebarComponent, RouterLink],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
categoriaForm: FormGroup;
isFormSubmitted: boolean = false;
categories: Categoria[] = [];
  constructor (private categoriaService: CategoriaService) {
    this.categoriaForm = new FormGroup({
      nombrecategoria: new FormControl('', [Validators.required]),
      descripcioncategoria: new FormControl('', [Validators.required])
    });
  }                        
  
  ngOnInit()  {
    this.loadCategorias();
  }
  loadCategorias() {
    this.categoriaService.getCategorias().subscribe(categorias => {
      this.categories = categorias;
    });
  }

  onSubmit() {
    this.isFormSubmitted = true;
    this.categoriaForm.markAllAsTouched();

    if (this.categoriaForm.valid) {
      const nuevaCategoria: Categoria = this.categoriaForm.value;
      this.categoriaService.addCategoria(nuevaCategoria).subscribe(() => {
        this.loadCategorias();
        this.categoriaForm.reset();
        this.isFormSubmitted = false;
      });
    }
  }
}
