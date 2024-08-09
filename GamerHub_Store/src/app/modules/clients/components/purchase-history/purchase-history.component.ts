import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EncabezadoComprasComponent } from "../../../shopping/components/encabezado-compras/encabezado-compras.component";

@Component({
  selector: 'app-purchase-history',
  standalone: true,
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.css'],
  imports: [FormsModule, ReactiveFormsModule, CommonModule, EncabezadoComprasComponent]
})
export class PurchaseHistoryComponent implements OnInit {
  devolucionForm: FormGroup;
  showNotification: boolean = false;
  purchases: any[] = [];
  filteredPurchases = [...this.purchases];
  devoluciones: any[] = [];

  constructor(private fb: FormBuilder) {
    this.devolucionForm = this.fb.group({
      numeroFactura: ['', Validators.required],
      motivoDevolucion: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Datos quemados para historial de compras
    this.purchases = [
      { factura: 'F001', codigoCompra: 'A1001', articulo: 'Laptop', costo: 1000, fechaSalida: '2023-08-01', estado: 'Entregado' },
      { factura: 'F002', codigoCompra: 'A1002', articulo: 'Mouse', costo: 50, fechaSalida: '2023-08-02', estado: 'Entregado' },
      { factura: 'F003', codigoCompra: 'A1003', articulo: 'Teclado', costo: 80, fechaSalida: '2023-08-03', estado: 'Entregado' },
    ];

    // Inicializar las compras filtradas
    this.filteredPurchases = [...this.purchases];

    // Datos quemados para devoluciones
    this.devoluciones = [
      { id: 1, codigoCompra: 'A1001', motivoDevolucion: 'Producto defectuoso', fechaSolicitud: new Date('2023-08-04') },
      { id: 2, codigoCompra: 'A1002', motivoDevolucion: 'No cumple con las expectativas', fechaSolicitud: new Date('2023-08-05') },
    ];
  }

  onSubmit(): void {
    if (this.devolucionForm.valid) {
      const factura = this.devolucionForm.value.numeroFactura;
      const motivo = this.devolucionForm.value.motivoDevolucion;
      const idOrden = this.getOrderId(factura);
      const idProducto = this.getProductId(factura);

      if (idOrden && idProducto) {
        const nuevaDevolucion = {
          id: this.devoluciones.length + 1, // Asignar un ID único
          codigoCompra: `A${idOrden}`,
          motivoDevolucion: motivo,
          fechaSolicitud: new Date(),
        };

        // Añadir la nueva devolución a la lista
        this.devoluciones.push(nuevaDevolucion);

        // Mostrar notificación de éxito
        this.showNotification = true;
        setTimeout(() => this.showNotification = false, 3000);
      }
    }
  }

  eliminarDevolucion(id: number): void {
    // Eliminar la devolución con el ID especificado
    this.devoluciones = this.devoluciones.filter(d => d.id !== id);
  }

  getOrderId(invoiceNumber: string): number {
    const purchase = this.purchases.find(p => p.factura === invoiceNumber);
    return purchase ? parseInt(purchase.codigoCompra.replace('A', '')) : 0;
  }

  getProductId(invoiceNumber: string): number {
    const purchase = this.purchases.find(p => p.factura === invoiceNumber);
    return purchase ? 1 : 0;
  }

  filterByDate(event: any): void {
    this.applyFilters();
  }

  filterByProductName(event: any): void {
    this.applyFilters();
  }

  filterByInvoiceNumber(event: any): void {
    this.applyFilters();
  }

  applyFilters(): void {
    const dateFilter = (document.getElementById('searchDate') as HTMLInputElement).value;
    const productFilter = (document.getElementById('searchProductName') as HTMLInputElement).value.toLowerCase();
    const invoiceFilter = (document.getElementById('searchInvoiceNumber') as HTMLInputElement).value;

    this.filteredPurchases = this.purchases.filter(purchase => {
      const matchesDate = !dateFilter || purchase.fechaSalida === dateFilter;
      const matchesProduct = !productFilter || purchase.articulo.toLowerCase().includes(productFilter);
      const matchesInvoice = !invoiceFilter || purchase.factura.includes(invoiceFilter);
      return matchesDate && matchesProduct && matchesInvoice;
    });
  }
}
