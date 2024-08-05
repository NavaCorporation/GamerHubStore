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
  private apiUrl = 'api/categorias/'; // O lo que corresponda

  constructor(private http: HttpClient) { }

  // Método para obtener las categorías
  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.appUrl}${this.apiUrl}`);
  }

  // Método para agregar una categoría
  addCategoria(categoria: Categoria): Observable<void> {
    return this.http.post<any>(`${this.appUrl}${this.apiUrl}`, categoria, {
      headers: {
        'Content-Type': 'application/json'
      }
    });  }
}

