import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DevolucionService {
  private AppUrl = 'http://localhost:5000/api/PurchaseHistory';
  constructor(private http: HttpClient) { }

  
  getDevoluciones(): Observable<any> {
    return this.http.get<any>(`${this.AppUrl}/devoluciones`);
  }
  requestDevolucion(devolucion: any): Observable<any> {
    return this.http.post<any>(this.AppUrl, devolucion);
  }
  deleteDevolucion(id: number): Observable<any> {
    return this.http.delete<any>(`${this.AppUrl}/${id}`);
  }
}
