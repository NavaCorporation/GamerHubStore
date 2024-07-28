/*import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-returns',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink, RouterOutlet, SidebarComponent, NgIf, CommonModule],
  templateUrl: './returns.component.html',
  styleUrl: './returns.component.css'
})
export class ReturnsComponent {
  eventsForm: FormGroup;
  //iniciamos las variables en el contructor para tener un buen codigo si hubieramos quedio podian haber estado en la parte de arriba 
    isFormSubmitted: boolean = false;
    events: Eventopar[] = [];
    cities = [
      { id: 1, name: 'Nuevo' },
      { id: 2, name: 'Urgente' },
      { id: 3, name: 'Pendiente' }
    ];
    constructor () {

      this.eventsForm = new FormGroup({
        nameevent: new FormControl('', [Validators.required]),
        acargo: new FormControl('', [Validators.required]),
        telefono: new FormControl('', [Validators.required, Validators.minLength(1)]),
        email: new FormControl('',[Validators.required]),
        date: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
      });
    }

    onSubmit() {
      const isformValid = this.eventsForm.valid;    
      this.isFormSubmitted = true;
      this.eventsForm.markAllAsTouched ;

      if (this.eventsForm.valid) {
        const newEvent: Eventopar = this.eventsForm.value;
        this.events.push(newEvent);
        this.eventsForm.reset();
        this.isFormSubmitted = false;
    }
    }

    deleteEvent(index: number) {
      this.events.splice(index, 1);
    }

}
*/