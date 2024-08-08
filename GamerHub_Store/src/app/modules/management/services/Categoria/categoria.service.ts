import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, throwError } from 'rxjs';
import { Categoria } from '../../../../interface/Categoria';
import { environment } from '../../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CategoriaService {
  private appUrl = environment.endpoint;
  private apiUrl = 'api/Categorias'; 

  constructor(private http: HttpClient) { }

  // Método para obtener las categorías
  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.appUrl}${this.apiUrl}`);
  }

  // Método para agregar una categoría
  addCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(`${this.appUrl}${this.apiUrl}`, categoria);  
  }

  //Metodo para borrar una categoría
  deleteCategoria(id: number): Observable<void> {
    return this.http.delete<void>(`${this.appUrl}${this.apiUrl}/${id}`);
  }

   // Método para actualizar una categoría
   updateCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(`${this.appUrl}${this.apiUrl}/${categoria.id}`, categoria);
  }
  
}

