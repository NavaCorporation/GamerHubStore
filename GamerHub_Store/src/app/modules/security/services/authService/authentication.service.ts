import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { DatosUser } from '../../models/datosUser';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  /*private apiUrl = 'http://localhost:8080/api/auth'; // Aun me falta la url

  constructor(private http: HttpClient) { }
//corregir luego cuando este el backend
  login(credentials: {email: string, password: string}): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }*/
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