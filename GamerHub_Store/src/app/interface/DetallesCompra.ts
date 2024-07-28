import { OrdenCompra } from "./OrdenCompra";
import { Producto } from "./Producto";

export interface DetallesCompra {
    id?: number;
    idOrden: number;
    ordenCompra?: OrdenCompra;
    idProducto: number;
    producto?: Producto;
    cantidad: number;
    precio: number;
}
