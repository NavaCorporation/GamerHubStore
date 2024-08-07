import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) { }

  getProductos(page: number, pageSize: number): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.myAppUrl}${this.myApiUrl}?page=${page}&pageSize=${pageSize}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    // Handle the error here
    return throwError('Something went wrong');
  }
}
