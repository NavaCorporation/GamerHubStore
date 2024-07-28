import { OrdenCompra } from "./OrdenCompra";
import { Usuario } from "./Usuario";

export interface HistorialVenta {
    id?: number;
    idOrden: number;
    ordenCompra?: OrdenCompra;
    idUsuario: number;
    usuario?: Usuario;
    fechaVenta?: Date; 
    montoTotal: number;
}
