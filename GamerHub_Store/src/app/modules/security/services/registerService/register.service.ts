import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';
import { Usuario } from '../../../../interface/Usuario';
@Injectable({ providedIn: 'root'})

export class RegisterService {
  private myAppUrl = environment.endpoint;
  private myApiUrl: string = 'api/Usuario/register';
  private currentUserSubject: BehaviorSubject<Usuario | null>;
  public currentUser: Observable<Usuario | null>;
  

  constructor(private http: HttpClient){
      this.currentUserSubject = new BehaviorSubject<Usuario | null>(JSON.parse(localStorage.getItem('currentUser')!));
      this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Usuario | null {
    return this.currentUserSubject.value;
  }

  register(formData: FormData): Observable<any> {
    const url = `${this.myAppUrl}${this.myApiUrl}`;
    return this.http.post(url, formData).pipe(
      map((response: any) => {
        localStorage.setItem('currentUser', JSON.stringify(response));
        this.currentUserSubject.next(response);
        alert('Registro exitoso!');
        return response;
      }),
      catchError((err) => {
        alert('Error al registrar el usuario');
        return throwError(err);
      })
    );
  }
  logoutUser(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
