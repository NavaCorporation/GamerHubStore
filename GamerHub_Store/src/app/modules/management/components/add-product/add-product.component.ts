import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators,ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Eventopar } from '../../models/eventopar';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgIf, RouterOutlet],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  eventsForm: FormGroup;
  //iniciamos las variables en el contructor para tener un buen codigo si hubieramos quedio podian haber estado en la parte de arriba 
    isFormSubmitted: boolean = false;
    events: Eventopar[] = [];
    cities = [
      { id: 1, name: 'Plaza de las Artes' },
      { id: 2, name: 'Edificio Acasias' },
      { id: 3, name: 'Piramides de la Republica' }
    ];
    constructor () {

      this.eventsForm = new FormGroup({
        nameevent: new FormControl('', [Validators.required]),
        acargo: new FormControl('', [Validators.required]),
        telefono: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern('^[0-9]{10}$')]),
        email: new FormControl('',[Validators.required, Validators.email]),
        date: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
        horario: new FormControl('', [Validators.required]),
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


}

