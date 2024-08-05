import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../../../../interface/Producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  private myAppUrl: string = environment.endpoint;

  private myApiUrl: string = 'api/Productos/';

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Producto[]>{

    return this.http.get<Producto[]>(`${this.myAppUrl}${this.myApiUrl}`)
  }
 

  getProducto(id:number ): Observable <Producto>{

    return this.http.get<Producto>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }


  
  getCrearProducto(producto: Producto ): Observable <Producto>{

    return this.http.post<Producto>(`${this.myAppUrl}${this.myApiUrl}`, producto);
  }


  
  eliminarProducto(id: number): Observable <void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  
  modificarProducto(producto: Producto): Observable<number>{
    return this.http.put<number>(`${this.myAppUrl}${this.myApiUrl}${producto.id}`,producto);
  }
}