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

  
  crearProducto(): void {
    if (this.formularioProducto.valid ) {
      const formData = new FormData();
      formData.append('nombreProducto', this.formularioProducto.get('nombreProducto')?.value);
      formData.append('precio', this.formularioProducto.get('precio')?.value);
      formData.append('caracteristicas', this.formularioProducto.get('caracteristicas')?.value);
      formData.append('descripcion', this.formularioProducto.get('descripcion')?.value);
      formData.append('stock', this.formularioProducto.get('stock')?.value);
      
      // Asegúrate de que `categoria` sea un ID o la estructura correcta esperada por la API
      const categoriaId = this.formularioProducto.get('categoria')?.value;
      formData.append('categoriaId', categoriaId); 
  
      this._productoService.crearProducto(formData).subscribe({
        next: () => {
          alert('Producto creado con éxito');
          this.obtenerProducto();
          this.formularioProducto.reset();
         
        },
        error: error => {
          console.error('Error al crear el producto:', error);
          alert('Error al crear el producto: ' + error.error?.message || 'Verifica los datos e intenta nuevamente.');
        }
      });
    } else {
      alert('Por favor, complete todos los campos requeridos');
    }
  }
  

 
  

  

}


