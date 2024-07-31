import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Categoria } from '../../../../interface/Categoria';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



export class CategoriaService {
  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/Categoria/';
  private categoriasser = new BehaviorSubject<Categoria[]>([]);
  categoria$ = this.categoriasser.asObservable();

  constructor(private http: HttpClient) { }
  
  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  setCategorias(categorias: Categoria[]) {
    this.categoriasser.next(categorias);
  }

  addCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.myApiUrl, categoria);
  }

}
