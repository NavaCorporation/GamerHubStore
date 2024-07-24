import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  purchases = [
    { factura: '1,001', codigoCompra: 'A1001', articulo: 'Teclado Mecánico', costo: '$75.00', fechaSalida: '2023-05-12', estado: 'Enviado' },
    { factura: '1,002', codigoCompra: 'A1002', articulo: 'Audífonos Inalámbricos', costo: '$50.00', fechaSalida: '2023-05-13', estado: 'Enviado' },
    { factura: '1,003', codigoCompra: 'A1003', articulo: 'Parlantes Bluetooth', costo: '$60.00', fechaSalida: '2023-05-14', estado: 'En camino' },
    { factura: '1,004', codigoCompra: 'A1004', articulo: 'Mouse Pad RGB', costo: '$25.00', fechaSalida: '2023-05-15', estado: 'Pendiente' },
    { factura: '1,005', codigoCompra: 'A1005', articulo: 'Teclado Inalámbrico', costo: '$40.00', fechaSalida: '2023-05-16', estado: 'Enviado' },
    { factura: '1,006', codigoCompra: 'A1006', articulo: 'Audífonos con Micrófono', costo: '$35.00', fechaSalida: '2023-05-17', estado: 'En camino' },
    { factura: '1,007', codigoCompra: 'A1007', articulo: 'Parlantes para PC', costo: '$45.00', fechaSalida: '2023-05-18', estado: 'Enviado' },
    { factura: '1,008', codigoCompra: 'A1008', articulo: 'Mouse Pad Grande', costo: '$20.00', fechaSalida: '2023-05-19', estado: 'Pendiente' },
    { factura: '1,009', codigoCompra: 'A1009', articulo: 'Teclado Ergonómico', costo: '$55.00', fechaSalida: '2023-05-20', estado: 'Enviado' },
    { factura: '1,010', codigoCompra: 'A1010', articulo: 'Audífonos Deportivos', costo: '$30.00', fechaSalida: '2023-05-21', estado: 'En camino' },
    { factura: '1,011', codigoCompra: 'A1011', articulo: 'Parlantes de Alta Fidelidad', costo: '$70.00', fechaSalida: '2023-05-22', estado: 'Enviado' },
    { factura: '1,012', codigoCompra: 'A1012', articulo: 'Mouse Pad con Carga Inalámbrica', costo: '$35.00', fechaSalida: '2023-05-23', estado: 'Pendiente' },
    { factura: '1,013', codigoCompra: 'A1013', articulo: 'Teclado para Juegos', costo: '$80.00', fechaSalida: '2023-05-24', estado: 'Enviado' },
    { factura: '1,014', codigoCompra: 'A1014', articulo: 'Audífonos Cancelación Ruido', costo: '$90.00', fechaSalida: '2023-05-25', estado: 'En camino' },
    { factura: '1,015', codigoCompra: 'A1015', articulo: 'Parlantes Portátiles', costo: '$65.00', fechaSalida: '2023-05-26', estado: 'Enviado' },
    { factura: '1,016', codigoCompra: 'A1016', articulo: 'Monitor 4K', costo: '$300.00', fechaSalida: '2023-05-27', estado: 'Enviado' },
    { factura: '1,017', codigoCompra: 'A1017', articulo: 'Laptop Gaming', costo: '$1500.00', fechaSalida: '2023-05-28', estado: 'En camino' },
    { factura: '1,018', codigoCompra: 'A1018', articulo: 'Mouse Inalámbrico', costo: '$25.00', fechaSalida: '2023-05-29', estado: 'Pendiente' },
    { factura: '1,019', codigoCompra: 'A1019', articulo: 'Base para Laptop', costo: '$35.00', fechaSalida: '2023-05-30', estado: 'Enviado' },
    { factura: '1,020', codigoCompra: 'A1020', articulo: 'Teclado y Ratón Combo', costo: '$50.00', fechaSalida: '2023-06-01', estado: 'Enviado' },
    { factura: '1,021', codigoCompra: 'A1021', articulo: 'Cámara Web HD', costo: '$60.00', fechaSalida: '2023-06-02', estado: 'Enviado' },
    { factura: '1,022', codigoCompra: 'A1022', articulo: 'Micrófono USB', costo: '$45.00', fechaSalida: '2023-06-03', estado: 'En camino' },
    { factura: '1,023', codigoCompra: 'A1023', articulo: 'Impresora Multifuncional', costo: '$120.00', fechaSalida: '2023-06-04', estado: 'Pendiente' },
    { factura: '1,024', codigoCompra: 'A1024', articulo: 'SSD 1TB', costo: '$150.00', fechaSalida: '2023-06-05', estado: 'Enviado' },
    { factura: '1,025', codigoCompra: 'A1025', articulo: 'Disco Duro Externo 2TB', costo: '$100.00', fechaSalida: '2023-06-06', estado: 'Enviado' },
    { factura: '1,026', codigoCompra: 'A1026', articulo: 'Router WiFi 6', costo: '$90.00', fechaSalida: '2023-06-07', estado: 'En camino' },
    { factura: '1,027', codigoCompra: 'A1027', articulo: 'Hub USB-C', costo: '$30.00', fechaSalida: '2023-06-08', estado: 'Pendiente' },
    { factura: '1,028', codigoCompra: 'A1028', articulo: 'Altavoces de Escritorio', costo: '$45.00', fechaSalida: '2023-06-09', estado: 'Enviado' },
    { factura: '1,029', codigoCompra: 'A1029', articulo: 'Lámpara LED de Escritorio', costo: '$25.00', fechaSalida: '2023-06-10', estado: 'Enviado' },
    { factura: '1,030', codigoCompra: 'A1030', articulo: 'Cable HDMI 2.1', costo: '$15.00', fechaSalida: '2023-06-11', estado: 'Enviado' }
  ];
  filteredPurchases = [...this.purchases];

  constructor(private fb: FormBuilder) {
    this.devolucionForm = this.fb.group({
      numeroFactura: ['', Validators.required],
      motivoDevolucion: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.devolucionForm.valid) {
      console.log(this.devolucionForm.value);
      this.showNotification = true;
      setTimeout(() => {
        this.showNotification = false;
      }, 3000);
    }
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
      const matchesInvoice = !invoiceFilter || purchase.factura.includes
      (invoiceFilter);
      return matchesDate && matchesProduct && matchesInvoice;
    });
  }
}