import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Usuario } from '../../../interface/Usuario';
import { AuthenticationService } from '../../security/services/authService/authentication.service';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {
  myAppUrl: string = environment.endpoint;
  apiUrl: string = 'api/Usuario/';
  private currentUserSubject: BehaviorSubject<Usuario | null>;
  public currentUser: Observable<Usuario | null>;
  constructor(
    private http: HttpClient,
    private AuthenticationService : AuthenticationService, 
  ) { this.currentUserSubject = new BehaviorSubject<Usuario | null>(JSON.parse(localStorage.getItem('currentUser')!));
    this.currentUser = this.currentUserSubject.asObservable();}
    getFotoPerfil(id: number): Observable<string> {
      return this.http.get(`${this.myAppUrl}${this.apiUrl}/${id}/fotoPerfil`, { responseType: 'text' }).pipe(
        catchError(this.handleError)
      );
    }
  getUser(userId: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.myAppUrl}${this.apiUrl}/${userId}`);
  }

  updateUser(user: Usuario): Observable<Usuario> {
    const userId = this.AuthenticationService.currentUserValue?.id;
    if (!userId) {
      throw new Error('No user is currently logged in');
    }
    return this.http.put<Usuario>(`${this.myAppUrl}${this.apiUrl}/${userId}`, user);
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