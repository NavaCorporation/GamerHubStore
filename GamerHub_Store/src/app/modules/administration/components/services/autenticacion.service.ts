import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private users: { email: string, password: string }[] = [
    { email: 'user@example.com', password: 'password123' }
  ];

  requestPasswordReset(email: string): boolean {
    const user = this.users.find(user => user.email === email);
    return !!user;
  }

  resetPassword(email: string, newPassword: string): boolean {
    const user = this.users.find(user => user.email === email);
    if (user) {
      user.password = newPassword;
      return true;
    }
    return false;
  }

  authenticate(email: string, password: string): boolean {
    const user = this.users.find(user => user.email === email && user.password === password);
    return !!user;
  }
}
