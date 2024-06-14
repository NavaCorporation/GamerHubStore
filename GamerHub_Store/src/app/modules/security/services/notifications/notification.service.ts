import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notifications: { type : string, message: string, read: boolean }[] = [];
  
  constructor() { }
  addNotification(notification: { type : string, message: string }): void {
    this.notifications.push({...notification, read: false});
  }

  clearNotifications(): void {
    this.notifications = [];
  }

  getNotifications(): { type : string, message: string , read: boolean}[] {
    return this.notifications;
  }

  hasNotifications(): boolean {
    return this.notifications.length > 0;
  }
  markAsRead(index: number): void {
    if (index >= 0 && index < this.notifications.length) {
      this.notifications[index].read = true;
    }
  }
}
