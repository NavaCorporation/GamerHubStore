import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../../../interface/Usuario';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RecuperarService {
  private myAppUrl: string = environment.endpoint;

  private myApiUrl: string = 'api/Usuario/';

  constructor(private http: HttpClient) { }

  solicitarRestablecimiento(email: string): Observable<any> {
    console.log('Solicitud de restablecimiento para:', email);
    // Simular una solicitud al servidor
    return of('Se ha enviado un correo con instrucciones para restablecer tu contraseña.');
  }

  restablecerContraseña(token: string, nuevaContrasena: string): Observable<any> {
    console.log('Restablecer contraseña con token:', token, 'nueva contraseña:', nuevaContrasena);
    // Simular una solicitud al servidor
    return of('Contraseña restablecida con éxito.');
  }

  
  


}