import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Producto } from '../../../../interface/Producto';

@Injectable({providedIn: 'root'})
export class ProductServicesService {
  private myAppUrl = environment.endpoint
  private myApiUrl: string = 'api/Productos'

  constructor(private http: HttpClient) { }

  getProductos(page: number, pageSize: number): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.myAppUrl}${this.myApiUrl}?page=${page}&pageSize=${pageSize}`)
      .pipe(catchError(this.handleError));
  }
  getFotoProducto(id: number): Observable<string> {
    return this.http.get(`${this.myAppUrl}${this.myApiUrl}/${id}/imagen`, { responseType: 'text' })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
