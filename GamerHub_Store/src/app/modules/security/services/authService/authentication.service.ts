import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { DatosUser } from '../../models/datosUser';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';


@Injectable({ providedIn: 'root' })

export class AuthenticationService {
  private myAppUrl = environment.endpoint;
  private myApiUrl: string = 'api/Usuario';
  private currentUserSubject: BehaviorSubject<DatosUser | null>;
  public currentUser: Observable<DatosUser | null>;
  
  constructor(private http: HttpClient) {
    const storedUser = JSON.parse(localStorage.getItem('currentUser')|| 'null');
    this.currentUserSubject = new BehaviorSubject<DatosUser | null>(storedUser);
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): DatosUser | null {
    return this.currentUserSubject.value;
  }
  loginUser(email: string, password: string): Observable<DatosUser | null> {
    // por si acasi falta /
      const url = `${this.myAppUrl}${this.myApiUrl}/login`;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      const body = { email, password };
      console.log('Login URL:', url);  // Verifica que la URL sea la esperada
      console.log('Request Body:', body); 
      return this.http.post<any>(url, body, { headers }).pipe(
        map(response => {
          console.log('Respuesta del error',response); // Verifica la respuesta del servidor
          if (response && response.message === "Login exitoso") {
            localStorage.setItem('currentUser', JSON.stringify(response.user));
            this.currentUserSubject.next(response.user);
            return response.user;
          }
          return null;
        }),
        catchError(this.handleError<DatosUser>('loginUser'))  
      );
  }
  logoutUser(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}