import { Component } from '@angular/core';
import { EncabezadoComprasComponent } from "../encabezado-compras/encabezado-compras.component";
import {Producto} from '../../../../interface/Producto';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../services/carrito/carrito.service';
import {ElementRef, OnInit, Renderer2} from '@angular/core';

@Component({
    selector: 'app-carrito',
    standalone: true,
    templateUrl: './carrito.component.html',
    styleUrl: './carrito.component.css',
    imports: [EncabezadoComprasComponent, CommonModule]
})

export class CarritoComponent {
    
}
