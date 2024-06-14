import { Component, OnInit } from '@angular/core';
import { Reporte } from '../models/reporte';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReporteService } from '../services/reporte.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reporte',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reporte.component.html',
  styleUrl: './reporte.component.css'
})
export class ReporteComponent implements OnInit {

  reportes: Reporte[] = [];

  constructor(private reporteService: ReporteService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.reportes = this.reporteService.getReportes();
  }

  eliminarReporte(id: number): void {
    this.reporteService.deleteReporte(id);
    this.reportes = this.reporteService.getReportes(); // Actualiza la lista de reportes
  }

  goBack(): void {
    this.router.navigate(['/dashboard']);  // Navega a la ruta deseada, por ejemplo, '/admin'
  }
}
