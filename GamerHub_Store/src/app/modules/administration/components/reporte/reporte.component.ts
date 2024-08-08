import { Component, OnInit } from '@angular/core';
import { Reporte } from '../models/reporte';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReporteService } from '../services/reporte.service';
import { Router } from '@angular/router';
import { Producto } from '../../../../interface/Producto';
import { InventarioService } from '../services/inventario.service';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-reporte',
  standalone: true,
  imports: [ReactiveFormsModule, SidebarComponent],
  templateUrl: './reporte.component.html',
  styleUrl: './reporte.component.css'
})
export class ReporteComponent implements OnInit {
  listadoProductor: Producto[] = [];

  constructor(private _productoService: InventarioService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }


  obtenerProductos(): void {
    this._productoService.getProductos().subscribe({
      next: data => {
        this.listadoProductor = data;
      },
      error: error => {
        console.error('Error al obtener los productos:', error);
        alert('Ocurrió un error al obtener los productos.');
      }
    });
  }

  


}
