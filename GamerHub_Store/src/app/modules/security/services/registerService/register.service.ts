import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';
import { Usuario } from '../../../../interface/Usuario';
@Injectable({ providedIn: 'root'})

export class RegisterService {
  private myAppUrl = environment.endpoint;
  private myApiUrl: string = 'api/Usuario/register';
  private currentUserSubject: BehaviorSubject<Usuario | null>;
  public currentUser: Observable<Usuario | null>;
  public alertSubject: Subject<{ title: string; message: string; iconClass: string, alertClass: string}> = new Subject();

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
        
        this.alertSubject.next({ title: 'Registro exitoso',
        message: 'Se ha registrado exitosamente',
        iconClass: 'bi bi-check-circle-fill',
        alertClass: 'alert-success'});
        return response;
      }),
      catchError((err) => {
        this.alertSubject.next({ title: 'Error',
        message: 'Contraseña o correo incorrecto',
        iconClass: 'bi bi-x-circle-fill',
        alertClass: 'alert-danger' });
        return throwError(err);
      })
    );
  }
  logoutUser(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
