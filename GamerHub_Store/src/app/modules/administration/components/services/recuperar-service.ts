import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RrecuperarService {
  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/usuarios/';

  constructor(private http: HttpClient) {}

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
