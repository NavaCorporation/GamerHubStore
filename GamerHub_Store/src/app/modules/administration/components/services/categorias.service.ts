import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../../../../interface/Categoria';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private myAppUrl: string = environment.endpoint;

  private myApiUrl: string = 'api/Categorias/';

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<Categoria[]>{

    return this.http.get<Categoria[]>(`${this.myAppUrl}${this.myApiUrl}`)
  }
 


}