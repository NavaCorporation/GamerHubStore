import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  myAppUrl: string = environment.endpoint;
private apiUrl = 'http://localhost:28850'

constructor(private http: HttpClient) { }
 private userSubject = new BehaviorSubject<any>({
    name: localStorage.getItem('userName') || 'Nombre del Usuario',
    email: localStorage.getItem('userEmail') || 'Email del Usuario',
    photoUrl: localStorage.getItem('userPhotoUrl') || ''
  });
  user$ = this.userSubject.asObservable();

  updateUser(user: any) {
    this.userSubject.next(user);
    localStorage.setItem('userName', user.name);
    localStorage.setItem('userEmail', user.email);
    localStorage.setItem('userPhotoUrl', user.photoUrl);
    
  }
  getDataUser(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${userId}`); 
  }
  modificarUsuario(usuario: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update`, usuario);
  }

  
  modificarFoto(id: number, profilePicture: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('profilePicture', profilePicture);
    
    return this.http.put(`${this.apiUrl}/update-photo/${id}`, formData);
  }
}