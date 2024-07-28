import { Comentario } from "./Comentario";
import { HistorialVenta } from "./HistorialVenta";
import { OrdenCompra } from "./OrdenCompra";
import { Rol } from "./Rol";
import { Sesion } from "./Sesion";

export interface Usuario {
    id?: number;
    nombre: string;
    apellido: string;
    correo: string;
    nombreUsuario: string;
    contrasena: string;
    telefono: string;
    estado: string;
    fotoProfile: Uint8Array;
    rolId: number;
    rol?: Rol;
    historialVenta?: HistorialVenta[];
    ordenCompras?: OrdenCompra[];
    sesiones?: Sesion[];
    comentarios?: Comentario[];

}