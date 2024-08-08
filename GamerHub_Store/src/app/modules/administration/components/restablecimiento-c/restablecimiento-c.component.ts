import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AutenticacionService } from '../services/autenticacion.service';
import { Router } from '@angular/router';
import { RecuperarService } from '../services/recuperar.service';

@Component({
  selector: 'app-restablecimiento-c',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './restablecimiento-c.component.html',
  styleUrl: './restablecimiento-c.component.css'
})
export class RestablecimientoCComponent {

  formulario: FormGroup;
  mensaje: string | null = null;

  constructor(private fb: FormBuilder, private recuperarService: RecuperarService) {
    this.formulario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  solicitarRestablecimiento(): void {
    const email = this.formulario.get('email')?.value;
    this.recuperarService.solicitarRestablecimiento(email).subscribe(mensaje => {
      this.mensaje = mensaje;
    });
  }
}
