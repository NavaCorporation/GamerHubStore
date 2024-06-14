import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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
}