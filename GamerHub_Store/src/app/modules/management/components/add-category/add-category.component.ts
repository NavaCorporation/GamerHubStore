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
  isFormSubmitted = false;
  loading: boolean = false;

  constructor(private fb: FormBuilder, private _categoriaService: CategoriaService) {
    this.categoriaForm = this.fb.group({
      nombrecategoria: ['', Validators.required],
      descripcioncategoria: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadCategorias();
  }



  // Cargar las categorías desde el servicio
  loadCategorias()  {
this._categoriaService.getCategorias().subscribe(data => {
  this.loading = false;
  this.categories = data;
  console.log(data); // Verifica las propiedades aquí
}, error => {
  this.loading = false;
  console.error('Error al cargar las categorías', error);
});
  }

  // Manejar el envío del formulario
  onSubmit(): void {
    this.isFormSubmitted = true;
    if (this.categoriaForm.valid) {
      const categoria: Categoria = this.categoriaForm.value;
      this._categoriaService.addCategoria(categoria).subscribe(
        () => {
          this.loadCategorias(); // Recargar las categorías después de agregar
          this.categoriaForm.reset(); // Resetear el formulario
          this.isFormSubmitted = false;
        },
        (error: HttpErrorResponse) => { // Tipo explícito para el parámetro error
          console.error('Error adding category', error.message);
        }
      );
    }
  }
}