import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NotificationService } from '../../services/notifications/notification.service';


@Component({
  selector: 'app-security-notifications',
  standalone: true,
  imports: [ CommonModule, RouterLink ],
  templateUrl: './security-notifications.component.html',
  styleUrl: './security-notifications.component.css'
})
export class SecurityNotificationsComponent implements OnInit {

  notifications: { type : string, message: string, read: boolean }[] = [];
  showNotifications: boolean = false;

  constructor( private ntserv: NotificationService) {}

  ngOnInit(): void {
    this.notifications = this.ntserv.getNotifications();
  }

  toggleNotifications(): void {
    this.showNotifications = !this.showNotifications;
  }
  get unreadNotificationsCount(): number {
    return this.notifications.filter(notification => !notification.read).length;
  }

  markAsRead(index: number): void {
    if (index >= 0 && index < this.notifications.length) {
      this.ntserv.markAsRead(index);
      this.notifications[index].read = true;
    }
  }
}
