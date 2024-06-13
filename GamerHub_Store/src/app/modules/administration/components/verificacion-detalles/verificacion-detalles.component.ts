import { Component,OnInit } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
    selector: 'app-verificacion-detalles',
    standalone: true,
    templateUrl: './verificacion-detalles.component.html',
    styleUrl: './verificacion-detalles.component.css',
    imports: [SidebarComponent]
})
export class VerificacionDetallesComponent implements OnInit {

   // Simular datos de detalle de verificación
   verificationDetail = {
    verifierName: 'Juan Pérez',
    date: '2024-05-30',
    result: 'Aprobado',
    // Agregar más detalles según sea necesario
  };

  constructor() { }

  ngOnInit(): void {
  }

}
