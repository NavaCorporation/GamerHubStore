import { Injectable } from '@angular/core';
import { Ventas } from '../models/ventas';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VentasService {

  private sales: Ventas = new Ventas(7, 10, 'Monitor Vegax Super Pro3', 'Luis');
  private salesSubject: BehaviorSubject<Ventas> = new BehaviorSubject(this.sales);

  getSales(): Observable<Ventas> {
    return this.salesSubject.asObservable();
  }

  updateSales(totalSales: number, targetSales: number, topProduct: string, topSeller: string): void {
    this.sales = new Ventas(totalSales, targetSales, topProduct, topSeller);
    this.salesSubject.next(this.sales);
  }

}
