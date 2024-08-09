import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Usuario } from '../../../interface/Usuario';
import { AuthenticationService } from '../../security/services/authService/authentication.service';
import { catchError, map, switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {
  myAppUrl: string = environment.endpoint;
  apiUrl: string = 'api/Usuario';
  private currentUserSubject: BehaviorSubject<Usuario | null>;
  public currentUser: Observable<Usuario | null>;
  constructor(
    private http: HttpClient,
    private AuthenticationService : AuthenticationService, 
  ) { this.currentUserSubject = new BehaviorSubject<Usuario | null>(JSON.parse(localStorage.getItem('currentUser')!));
    this.currentUser = this.currentUserSubject.asObservable();}

    // Obtener la foto del usuario actual
    getFotoPerfil(): Observable<string> {
      return this.AuthenticationService.currentUser.pipe(
        switchMap(currentUser => {
          if (currentUser && currentUser.id) {
            const userId = currentUser.id;
            const url = `${this.myAppUrl}${this.apiUrl}/${userId}/fotoPerfil`;
            return this.http.get<string>(url, { responseType: 'text' as 'json' });
          } else {
            throw new Error('No hay usuario autenticado.');
          }
        }),
        catchError(error => {
          console.error('Error al obtener el usuario autenticado', error);
          throw error;
        })
      );
    }
  
  // Obtener el usuario por su ID
  getUser(userId: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.myAppUrl}${this.apiUrl}/${userId}`);
  }

  // Actualizar la foto de perfil
  updateProfilePicture(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('profilePicture', file);
    
    // Usar currentUser directamente para obtener el usuario actual
    return this.AuthenticationService.currentUser.pipe(
      switchMap(currentUser => {
        if (currentUser && currentUser.id) {
          const userId = currentUser.id;
          return this.http.put<any>(`${this.myAppUrl}${this.apiUrl}/update-photo/${userId}`, formData);
        } else {
          return throwError('No user is currently logged in');
        }
      }),
      catchError(error => {
        console.error('Error al actualizar la foto de perfil', error);
        return throwError(error);
      })
    );
  }

  // Actualizar el usuario
  updateUserProfile(user: Usuario): Observable<any> {
    const userId = this.getCurrentUserId();
    if (!userId) {
      throw new Error('No user is currently logged in');
    }
    return this.http.put<any>(`${this.myAppUrl}${this.apiUrl}/${userId}`, user);
  }

  private getCurrentUserId(): number | null {
    // Aquí debes implementar la lógica para obtener el ID del usuario actual
    const user = JSON.parse(localStorage.getItem('currentUser')!);
    return user ? user.id : null;
  }

  // Manejar errores
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