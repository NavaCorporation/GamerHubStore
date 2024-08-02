import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Categoria } from '../../../../interface/Categoria';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



export class CategoriaService {
  private apiUrl = `${environment.endpoint}api/Categorias`;

  
  private categoriasser = new BehaviorSubject<Categoria[]>([]);
  categoria$ = this.categoriasser.asObservable();

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
