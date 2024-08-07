import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
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
  modificarUsuario(usuario: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update`, usuario);
  }

  modificarFoto(id: number, profilePicture: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('profilePicture', profilePicture);
    
    return this.http.put(`${this.apiUrl}/update-photo/${id}`, formData);
  }
}