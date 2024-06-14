import { Injectable } from '@angular/core';
import { Reporte } from '../models/reporte';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  private reportes: Reporte[] = [
    new Reporte(1, 'Reporte de Ventas', 'Reporte detallado de las ventas mensuales', [
      { mes: 'Enero', ventas: 2000 },
      { mes: 'Febrero', ventas: 2500 },
      { mes: 'Marzo', ventas: 1800 },
      { mes: 'Abril', ventas: 3000 }
    ]),
    new Reporte(2, 'Reporte de Usuarios', 'Reporte de actividad de los usuarios', [
      { usuario: 'User1', acceso: '2023-06-01 10:00:00' },
      { usuario: 'User2', acceso: '2023-06-01 11:30:00' },
      { usuario: 'User3', acceso: '2023-06-01 12:15:00' },
      { usuario: 'User4', acceso: '2023-06-01 14:00:00' }
    ]),
    new Reporte(3, 'Reporte de Productos', 'Reporte de inventario de productos', [
      { producto: 'Producto1', stock: 100 },
      { producto: 'Producto2', stock: 80 },
      { producto: 'Producto3', stock: 120 },
      { producto: 'Producto4', stock: 90 }
    ])
  ];

  constructor() {}

  getReportes(): Reporte[] {
    return this.reportes;
  }

  deleteReporte(id: number): void {
    this.reportes = this.reportes.filter(r => r.id !== id);
  }
}
