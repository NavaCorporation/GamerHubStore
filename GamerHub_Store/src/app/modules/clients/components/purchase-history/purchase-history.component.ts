import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EncabezadoComprasComponent } from "../../../shopping/components/encabezado-compras/encabezado-compras.component";
import { HistorialCompraService } from '../../service/historial-compra.service';
import { DevolucionService } from '../../service/devolucion.service';
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
  apiUrl = 'http://localhost:4200/historial';
  constructor(private fb: FormBuilder, private http: HttpClient,private HistorialCompraService: HistorialCompraService, private DevolucionService:DevolucionService ) {
    this.devolucionForm = this.fb.group({
      numeroFactura: ['', Validators.required],
      motivoDevolucion: ['', Validators.required]
    });
  }

  ngOnInit(): void { this.devolucionForm = this.fb.group({
    
  });this.loadPurchaseHistory();
  this.loadDevoluciones();
}
loadPurchaseHistory(): void {
  this.HistorialCompraService.getPurchaseHistory().subscribe(
    (data: any) => {
      this.purchases = data; 
      this.filteredPurchases = [...this.purchases]; // Inicializar las compras filtradas
    },
    error => {
      console.error('Error fetching purchase history', error); 
    }
  );
}
loadDevoluciones(): void {
  this.DevolucionService.getDevoluciones().subscribe(
    (data: any) => {
      this.devoluciones = data;
    },
    error => {
      console.error('Error fetching devoluciones', error); 
    }
  );
}
  onSubmit(): void {
    if (this.devolucionForm.valid) {
      const factura = this.devolucionForm.value.numeroFactura;
      const motivo = this.devolucionForm.value.motivoDevolucion;
      const idOrden = this.getOrderId(factura);
      const idProducto = this.getProductId(factura);

      if (idOrden && idProducto) {
        
        const devolucion = {
          IdOrden: idOrden,
          IdProducto: idProducto,
          FechaDevolucion: new Date(),
          Razon: motivo,
          Estado: 'En proceso'
        };
        
        this.DevolucionService.requestDevolucion(devolucion).subscribe({
          next: (response) => {
            console.log(`Devolución creada con ID ${response.id}`); 
            this.showNotification = true; 
            setTimeout(() => this.showNotification = false, 3000); 
            this.loadDevoluciones(); 
          },
          error: (error) => {
            console.error('Error al crear la devolución', error); // Manejo de errores
          }
        });
      }
    }
  }
  eliminarDevolucion(id: number): void {
    this.DevolucionService.deleteDevolucion(id).subscribe({
      next: () => {
        console.log('Devolución eliminada'); // Log para depuración
        this.loadDevoluciones(); // Recargar devoluciones después de eliminar una
      },
      error: (error) => {
        console.error('Error al eliminar la devolución', error); // Manejo de errores
      }
    });
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
      const matchesInvoice = !invoiceFilter || purchase.factura.includes
      (invoiceFilter);
      return matchesDate && matchesProduct && matchesInvoice;
    });
  }
}