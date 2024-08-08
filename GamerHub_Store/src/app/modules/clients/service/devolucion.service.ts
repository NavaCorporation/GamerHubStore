import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DevolucionService {
  private AppUrl = 'http://localhost:4200/historial';
  constructor(private http: HttpClient) { }

  getDevoluciones(): Observable<any> {
    return this.http.get<any>(this.AppUrl);
  }

  requestDevolucion(devolucion: any): Observable<any> {
    return this.http.post<any>(this.AppUrl, devolucion);
  }

  deleteDevolucion(id: number): Observable<any> {
    return this.http.delete<any>(`${this.AppUrl}/${id}`);
  }
}