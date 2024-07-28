import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';
import { Usuario } from '../../../../interface/Usuario';


@Injectable({ providedIn: 'root' })

export class AuthenticationService {
  private myAppUrl = environment.endpoint;
  private myApiUrl: string = 'api/Usuario/login';
  private currentUserSubject: BehaviorSubject<Usuario | null>;
  public currentUser: Observable<Usuario | null>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Usuario | null>(JSON.parse(localStorage.getItem('currentUser')!));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Usuario | null {
    return this.currentUserSubject.value;
  }
    
  login(correo: string, contrasena: string): Observable<Usuario> {
    const url = `${this.myAppUrl}${this.myApiUrl}`;
    const body = { correo, contrasena };
    return this.http.post<Usuario>(url, body).pipe(
      map((response: Usuario) => {
        localStorage.setItem('currentUser', JSON.stringify(response));
        this.currentUserSubject.next(response);
        alert('Login exitoso!');
        return response;
      }),
      catchError((err) => {
        alert('Contraseña o correo incorrecto');
        return throwError(err);
      })
    );
  }
  logoutUser(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

}