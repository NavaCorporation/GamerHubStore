import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NotificationService } from '../../services/notifications/notification.service';
import { Renderer2, ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-security-notifications',
  standalone: true,
  imports: [ CommonModule, RouterLink ],
  templateUrl: './security-notifications.component.html',
  styleUrl: './security-notifications.component.css'
})
export class SecurityNotificationsComponent implements OnInit {
  @ViewChild('bellIcon') bellIcon!: ElementRef;

  notifications: { type: string, message: string, read: boolean, date: Date, }[] = [];
  showNotifications: boolean = false;
  readFilter: boolean | null = null; 
  sortOrder: 'asc' | 'desc' = 'desc';

  constructor( private ntserv: NotificationService, private renderer:Renderer2) {}
  shakeBell() {
    const bell = this.bellIcon.nativeElement;
    this.renderer.addClass(bell, 'shake');
    
    
    setTimeout(() => {
      this.renderer.removeClass(bell, 'shake');
    }, 800);
  }
  ngOnInit(): void {
    this.ntserv.createOfferNotifications();
    this.loadNotifications();
  }
  loadNotifications(): void {
    this.notifications = this.ntserv.getNotifications(this.readFilter, this.sortOrder);
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
  applyReadFilter(): void {
    this.readFilter = this.readFilter === null ? true : (this.readFilter === true ? false : null);
    this.loadNotifications();
  }
  toggleSortOrder(): void {
    this.sortOrder = this.sortOrder === 'desc' ? 'asc' : 'desc';
    this.loadNotifications();
  }

  applyDateFilter(): void {
    this.loadNotifications();
  }

  clearFilters(): void {
    this.readFilter = null;
    this.sortOrder = 'desc';
    this.loadNotifications();
  }
  
}