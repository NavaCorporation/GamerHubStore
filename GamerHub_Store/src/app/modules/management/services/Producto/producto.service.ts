import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';
import { Producto } from '../../../../interface/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor( private http: HttpClient) { }
  private appUrl = environment.endpoint;
  private apiUrl = 'api/productos';
  
  //Metodo para obtener los productos
  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.appUrl}${this.apiUrl}`);
  }

  //Metodo para agregar un producto
  registrarProducto(producto: Producto, imagen: File | null): Observable<Producto> {
    const formData = new FormData();
    formData.append('nombreProducto', producto.nombreProducto);
    formData.append('precio', producto.precio.toString());
    formData.append('caracteristicas', producto.caracteristicas);
    formData.append('descripcion', producto.descripcion || '');
    formData.append('stock', producto.stock.toString());
    formData.append('categoriaId', producto.categoriaId.toString());
    
    if (imagen !== null) {

        formData.append('imagen', imagen);
      
    }
    
    console.log('Datos del FormData:', formData);
  
    return this.http.post<Producto>(`${this.appUrl}${this.apiUrl}/registrar`, formData);
  }


  //Metodo para actualizar un producto

  actualizarProducto(producto: Producto, imagen: File | null): Observable<Producto> {
    if (producto.id === undefined) {
      throw new Error('El producto debe tener un id');
    }
    const formData = new FormData();
    formData.append('id', producto.id.toString());
    formData.append('nombreProducto', producto.nombreProducto);
    formData.append('precio', producto.precio.toString());
    formData.append('caracteristicas', producto.caracteristicas);
    formData.append('descripcion', producto.descripcion || '');
    formData.append('stock', producto.stock.toString());
    formData.append('categoriaId', producto.categoriaId.toString());
    
    if (imagen !== null) {

        formData.append('imagen', imagen);
      
    }
    return this.http.put<Producto>(`${this.appUrl}${this.apiUrl}/actualizar/${producto.id}`, formData);
  }


  //Metodo para borrar un producto
  deleteProducto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.appUrl}${this.apiUrl}/${id}`);
  }
}
