import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';
import { Usuario } from '../../../../interface/Usuario';


@Injectable({ providedIn: 'root' })

export class AuthenticationService {
  private myAppUrl = environment.endpoint;
  private myApiUrl: string = 'api/Usuario/login';
  constructor(private http: HttpClient) {}
    
  login(correo: string, contrasena: string): Observable<Usuario> {
    const url = `${this.myAppUrl}${this.myApiUrl}`;
    const body = { correo, contrasena };
    return this.http.post(url, body).pipe(
      map((response: any) => {
        localStorage.setItem('token', response.token);
        alert('Login exitoso!');
        return response;
      }),
      catchError((err) => {
        alert('Contraseña o correo incorrecto');
        return throwError(err);
      })
    );
  }
  logoutUser(): void {
    localStorage.removeItem('token');
  }
}