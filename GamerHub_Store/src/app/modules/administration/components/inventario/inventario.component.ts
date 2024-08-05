import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Inventario } from '../models/inventario';
import { InventarioService } from '../services/inventario.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Producto } from '../../../../interface/Producto';
import { Categoria } from '../../../../interface/Categoria';
import { CategoriasService } from '../services/categorias.service';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule,RouterModule],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.css'
})
export class InventarioComponent {

  id!:number;
  listadoProductor!: Producto[];
  listadoCategoria!: Categoria[];

  formularioProducto: FormGroup;

  constructor(private _productoService: InventarioService,
    private _categoriasService: CategoriasService, 
     private router: Router,
     private fb: FormBuilder){

    this.formularioProducto = this.fb.group({
      nombreProducto: ['', Validators.required],
      imagen: ['', Validators.required],
      precio:  ['', Validators.required],
      caracteristicas: ['', Validators.required],
      descripcion: ['', Validators.required],
      stock:  ['', Validators.required],
      categoria:  ['', Validators.required],
    });

  }




  ngOnInit(): void{

  this.obtenerProducto();
  this.obtenerCategoria();
  
  }



  obtenerProducto(): void{

    this._productoService.getProductos().subscribe({

      next: data =>{
         console.log(data);
         this.listadoProductor = data;
      },
      error: error =>{
        alert("Ocurrio un Error");
      },
      complete:()=>{
        console.info('obtencion completa de producto ');
      }
      

    });

  }

  obtenerCategoria(){
    this._categoriasService.getCategorias().subscribe({
      next: data => {
        console.log(data);
        this.listadoCategoria = data;
      },
      error: error => {
        alert("Ocurrió un error");
      },
      complete: () => {
        console.info('Obtención de categoria completa');
      }
    });

  }


  agregarProducto(): void {
    if (this.formularioProducto.valid) {
      
      const nuevaProducto: Producto = {
        nombreProducto: this.formularioProducto.value.nombreProducto,
        imagen: this.formularioProducto.value.imagen,
        precio: this.formularioProducto.value.precio,
        caracteristicas: this.formularioProducto.value.caracteristicas,
        descripcion: this.formularioProducto.value.descripcion,
        stock: this.formularioProducto.value.stock,
        categoriaId: this.formularioProducto.value.categoria
      };

      this._productoService.getCrearProducto(nuevaProducto).subscribe({
        next: producto => {
          console.log(' Producto creada:', producto);
          // Puedes realizar acciones adicionales después de agregar la persona
          // Por ejemplo, redireccionar a otra página o mostrar un mensaje de éxito.
        },
        error: producto =>{
          alert("Ocurrio un Error al añadir a la producto");
        },
        complete:()=>{
          console.info('obtencion completa de producto');
          alert("Se agrego correctamente");
        }
      
      });
    } 
  }





  goBack() {
    window.history.back();
  }


  

}


