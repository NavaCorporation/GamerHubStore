import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Producto } from '../../../../interface/Producto';
import { environment } from '../../../../../environments/environment';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private myAppUrl = environment.endpoint
  private myApiUrl: string = 'api/Productos'

  constructor(private http: HttpClient) {}

  // Método para obtener productos con paginación
  getProductos(page: number, pageSize: number): Observable<Producto[]> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<Producto[]>(${this.myAppUrl}${this.myApiUrl}, { params })
      .pipe(
        catchError(this.errorHandler)  // Manejo de errores
      );
  }

  // Manejo centralizado de errores
  private errorHandler(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Error desconocido';

    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = Error: ${error.error.message};
    } else {
      // Error del lado del servidor
      errorMessage = Código de error: ${error.status}\nMensaje: ${error.message};
    }
    
    console.error(errorMessage); // Muestra el error en la consola
    return throwError(() => new Error(errorMessage)); // Lanza un error observable
  }
}