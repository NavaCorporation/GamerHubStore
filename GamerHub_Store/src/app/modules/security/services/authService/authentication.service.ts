import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { DatosUser } from '../../models/datosUser';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  //myAppUrl: string = environment.endpoint; esta wea no funciona
  private currentUserSubject: BehaviorSubject<DatosUser | null>;
  public currentUser: Observable<DatosUser | null>;

  constructor() {
    this.currentUserSubject = new BehaviorSubject<DatosUser | null>(null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): DatosUser | null {
    return this.currentUserSubject.value;
  }

  loginUser(user: DatosUser): void {
    this.currentUserSubject.next(user);
  }

  logoutUser(): void {
    this.currentUserSubject.next(null);
  }  
}

/* 
  ----------------
  private myAppUrl: string = 'http://localhost:7074/';
  private myApiUrl: string = 'api/Usuario/';
  private currentUserSubject: BehaviorSubject<DatosUser | null>;
  public currentUser: Observable<DatosUser | null>;
  
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<DatosUser | null>(null);
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): DatosUser | null {
    return this.currentUserSubject.value;
  }
  loginUser(email: string, password: string): Observable<DatosUser | null> {
      const url = `${this.myAppUrl}/${this.myApiUrl}`;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      const body = { email, password };

      return this.http.post<any>(url, body, { headers }).pipe(
        map(response => {
          if (response && response.token) {
            localStorage.setItem('currentUser', JSON.stringify(response));
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
  */