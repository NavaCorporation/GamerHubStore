import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Categoria } from '../../../../interface/Categoria';

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
  constructor () {
    this.categoriaForm = new FormGroup({
      nombrecategoria: new FormControl('', [Validators.required]),
      descripcioncategoria: new FormControl('', [Validators.required])
    });
  }                        
  
  OnSubmit() {
    const isformValid = this.categoriaForm.valid;
    this.isFormSubmitted = true;
    this.categoriaForm.markAllAsTouched ;

    if (this.categoriaForm.valid) {
      const newCategoria: Categoria = this.categoriaForm.value;
      this.categories.push(newCategoria);
      this.categoriaForm.reset();
      this.isFormSubmitted = false;
    }
  }
}
