import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Usuario } from '../../../interface/Usuario';
@Injectable({
  providedIn: 'root'
})

export class ClienteServiceService {
 myAppUrl:string= environment.endpoint;
 apiUrl: string ='api/Usuario/'
 
  constructor(private http: HttpClient) { }

  getUser(userId: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.myAppUrl}${this.apiUrl}/${userId}`);
  }

  updateUser(user: any): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.myAppUrl}${this.apiUrl}/update`, user);
  }
updateProfilePicture(userId: number, file: File): Observable<Usuario> {
    const formData = new FormData();
    formData.append('profilePicture', file);

    return this.http.put<Usuario>(`${this.myAppUrl}${this.apiUrl}/update-photo/${userId}`, formData);
  }
}
