import { OrdenCompra } from "./OrdenCompra";
import { Producto } from "./Producto";

export interface Devolucion {
    id?: number;
    idOreden: number;
    ordenCompra: OrdenCompra;
    idProducto: number;
    producto: Producto;
    fechaDevolucion: Date;
    razon: string;
    estado: string;
}
