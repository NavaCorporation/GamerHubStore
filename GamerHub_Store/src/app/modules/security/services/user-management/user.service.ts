import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private myAppUrl = environment.endpoint;
  private myApiUrl: string = 'api/Usuario';
  constructor(private http: HttpClient) {}

  getFotoPerfil(id: number, file: File): Observable<string> {
    return this.http.get(`${this.myAppUrl}${this.myApiUrl}/${id}/fotoPerfil`, { responseType: 'text' }).pipe(
      catchError(this.handleError)
    );
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
