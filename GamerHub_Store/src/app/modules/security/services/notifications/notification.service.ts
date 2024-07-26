import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notifications: { type: string, message: string, read: boolean, date: Date }[] = [];
  
  constructor() { }

  addNotification(notification: { type: string, message: string }): void {
    this.notifications.push({...notification, read: false, date: new Date()});
  }

  clearNotifications(): void {
    this.notifications = [];
  }

  getNotifications(readFilter: boolean | null = null, sortOrder: 'asc' | 'desc' = 'desc'): { type: string, message: string, read: boolean, date: Date }[] {
    let filteredNotifications = this.notifications;

    if (readFilter !== null) {
      filteredNotifications = filteredNotifications.filter(notification => notification.read === readFilter);
    }

    return filteredNotifications.sort((a, b) => {
      return sortOrder === 'desc' 
        ? b.date.getTime() - a.date.getTime() 
        : a.date.getTime() - b.date.getTime();
    });
  }

  hasNotifications(): boolean {
    return this.notifications.length > 0;
  }

  markAsRead(index: number): void {
    if (index >= 0 && index < this.notifications.length) {
      this.notifications[index].read = true;
    }
  }
  createOfferNotifications(): void {
    if (localStorage.getItem('offersCreated')) {
      return; 
    }
    const offers = [
      { message: '¡50% de descuento en todos los accesorios para juegos!', type: 'Oferta' },
      { message: '¡Compre 1 y obtenga 1 gratis en juegos seleccionados', type: 'Oferta' },
      { message: '¡Descuentos exclusivos para pedidos anticipados disponibles ahora!', type: 'Oferta' }
    ];

    offers.forEach(offer => this.addNotification(offer));
    
    localStorage.setItem('offersCreated', 'true'); 
  }
}
