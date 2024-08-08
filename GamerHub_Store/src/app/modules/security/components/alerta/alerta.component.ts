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
  show: boolean = false;

  showAlert(title: string, message: string, iconClass: string = 'bi bi-check-circle-fill') {
    this.title = title;
    this.message = message;
    this.iconClass = iconClass;
    this.show = true;
    setTimeout(() => this.show = false, 5000);
  }

  closeAlert() {
    this.show = false;
  }
}