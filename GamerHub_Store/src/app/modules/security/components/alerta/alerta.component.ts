import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-alerta',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './alerta.component.html',
  styleUrl: './alerta.component.css'
})
export class AlertaComponent  {
  @Input() title: string = '';
  @Input() message: string = '';
  @Input() iconClass: string = 'bi bi-check-circle-fill'; 
  @Input() alertClass: string = 'alert-success'; 
  show: boolean = false;

  showAlert(title: string, message: string, iconClass: string = 'bi bi-check-circle-fill', alertClass: string = 'alert-success') {
    this.title = title;
    this.message = message;
    this.iconClass = iconClass;
    this.alertClass = alertClass;
    this.show = true;
    setTimeout(() => this.show = false, 2000);
  }

  closeAlert() {
    this.show = false;
  }
}