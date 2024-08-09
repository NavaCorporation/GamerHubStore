import { Component, OnInit } from '@angular/core';
import { Reporte } from '../models/reporte';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReporteService } from '../services/reporte.service';
import { Router } from '@angular/router';
import { Producto } from '../../../../interface/Producto';
import { InventarioService } from '../services/inventario.service';
import { SidebarComponent } from "../sidebar/sidebar.component";
import * as XLSX from 'xlsx';


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
        console.error('Error al obtener los productoss:', error);
        alert('Ocurrió un error al obtener los productos.');
      }
    });
  }

  exportarExcel(): void {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.listadoProductor);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Productos');
    XLSX.writeFile(wb, 'Reporte_Productos.xlsx');
  }


}
