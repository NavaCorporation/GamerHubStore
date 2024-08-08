import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Categoria } from '../../../../interface/Categoria';
import { CategoriaService } from '../../services/Categoria/categoria.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgIf, RouterOutlet, SidebarComponent, RouterLink],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent implements OnInit {
  categoriaForm: FormGroup;
  categories: Categoria[] = [];
  selectedCategoria: Categoria | null = null;
  isFormSubmitted = false;
  loading: boolean = false;

  constructor(private fb: FormBuilder, private _categoriaService: CategoriaService) {
    this.categoriaForm = this.fb.group({
      id: [null],
      nombreCategoria: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadCategorias();
  }



  // Cargar las categorías desde el servicio
  loadCategorias(): void {
    this.loading = true;
    this._categoriaService.getCategorias().subscribe(
      data => {
        this.loading = false;
        this.categories = data;
        console.log(data); // Verifica las propiedades aquí
      },
      (error: HttpErrorResponse) => {
        this.loading = false;
        console.error('Error al cargar categorías:', error);
      }
    );
  }

  // Método para registrar una nueva categoría
onsubmit(categoria: Categoria): void {
  if (this.categoriaForm.valid) {
    const newCategoria: Categoria = {
      nombreCategoria: this.categoriaForm.value.nombreCategoria,
      descripcion: this.categoriaForm.value.descripcion
    };

    this._categoriaService.addCategoria(newCategoria).subscribe(
      data => {
        this.categories.push(data);
        this.categoriaForm.reset();
        this.isFormSubmitted = false;
      },
      (error: HttpErrorResponse) => {
        console.error('Error al agregar categoría:', error);
      }
    );
  }
}

// Método para guardar la edición de una categoría
saveCategoria(): void {
  this.isFormSubmitted = true;

  if (this.categoriaForm.valid) {
    const categoria: Categoria = {
      id: this.categoriaForm.value.id || null,
      nombreCategoria: this.categoriaForm.value.nombreCategoria,
      descripcion: this.categoriaForm.value.descripcion
    };

    if (categoria.id) {
      // Si se ha seleccionado una categoría, actualizarla
      this._categoriaService.updateCategoria(categoria).subscribe(
        data => {
          const index = this.categories.findIndex(c => c.id === categoria.id);
          if (index !== -1) {
            this.categories[index] = data;
          }
          this.selectedCategoria = null;
          this.categoriaForm.reset();
          this.isFormSubmitted = false;
        },
        (error: HttpErrorResponse) => {
          console.error('Error al actualizar categoría:', error);
        }
      );
    }
  }
}

    // Seleccionar una categoría para editar
    editCategoria(categoria: Categoria): void {
      this.selectedCategoria = categoria;
      this.categoriaForm.patchValue(categoria);
      this.categoriaForm.get('id')?.setValue(categoria.id);
    }

  eliminarCategoria(id: number | undefined): void {
    if (id !== undefined) {
      this._categoriaService.deleteCategoria(id).subscribe(
        () => {
          this.categories = this.categories.filter(categoria => categoria.id !== id);
        },
        (error: HttpErrorResponse) => {
          console.error('Error al eliminar categoría:', error);
        }
      );
    }
  }


}
