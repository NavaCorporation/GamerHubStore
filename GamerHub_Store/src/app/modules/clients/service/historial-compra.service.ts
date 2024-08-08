import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HistorialCompraService {
  private AppUrl = 'http://localhost:5000/api/PurchaseHistory';
  constructor(private http: HttpClient) { }
  getPurchaseHistory(): Observable<any> {
    return this.http.get<any>(this.AppUrl);
  }
 
}