import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { Usuario } from '../../../../interface/Usuario';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  private myAppUrl = environment.endpoint;
  private myApiUrl: string = 'api/Usuario';
  private currentUserSubject: BehaviorSubject<Usuario | null>;
  public currentUser: Observable<Usuario | null>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Usuario | null>(JSON.parse(localStorage.getItem('currentUser')!));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Usuario | null {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.myAppUrl}/${this.myApiUrl}`, { email, password }).pipe(
      catchError(this.handleError)
    );
  }

  logoutUser(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  getAdminPorId(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.myAppUrl}/${this.myApiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  getFotoPerfil(id: number): Observable<string> {
    return this.http.get(`${this.myAppUrl}/${this.myApiUrl}/${id}/fotoPerfil`, { responseType: 'text' }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Error desconocido';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Código de Error: ${error.status}\nMensaje: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}