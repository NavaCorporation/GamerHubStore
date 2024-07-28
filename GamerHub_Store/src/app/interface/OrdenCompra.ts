import { DetallesCompra } from "./DetallesCompra";
import { Devolucion } from "./Devolucion";
import { HistorialVenta } from "./HistorialVenta";
import { Usuario } from "./Usuario";
import { VerificacionEnvio } from "./VerificacionEnvio";

export interface OrdenCompra {
    id?: number;
    idUsuario: number;
    usuario: Usuario;
    fechaOrden: Date; 
    montoTotal: number;
    estado: string;
    tipoPaga?: string;
    verificacionEnvios?: VerificacionEnvio[];
    detallesCompras?: DetallesCompra[];
    historialVenta?: HistorialVenta[];
    devoluciones?: Devolucion[];
}
