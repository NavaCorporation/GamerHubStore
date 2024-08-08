import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HistorialCompraService {
   myAppUrl:string= environment.endpoint;
 apiUrl: string ='api/Usuario/'
  constructor(private http: HttpClient) { }
  getPurchaseHistory(): Observable<any> {
    return this.http.get<any>(this.myAppUrl);
  }
 
}