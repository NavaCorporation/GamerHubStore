import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators,ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ManagerComponent } from '../manager/manager.component';
import { Producto } from '../../../../interface/Producto';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgIf, RouterOutlet, SidebarComponent, ManagerComponent, RouterLink],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  productoForm: FormGroup;
  //iniciamos las variables en el contructor para tener un buen codigo si hubieramos quedio podian haber estado en la parte de arriba 
    isFormSubmitted: boolean = false;
    productos: Producto[] = [];
    constructor () {

      this.productoForm = new FormGroup({
        nombreproducto: new FormControl('', [Validators.required]),
        precioproducto: new FormControl('', [Validators.required]),
        imagenproducto: new FormControl('', [Validators.required]),
        categoria: new FormControl('', [Validators.required]),
        stockproducto: new FormControl('', [Validators.required])
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

