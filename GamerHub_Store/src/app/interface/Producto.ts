import { Categoria } from "./Categoria";
import { Comentario } from "./Comentario";
import { DetallesCompra } from "./DetallesCompra";
import { Devolucion } from "./Devolucion";

export interface Producto {
    id?: number;
    nombreProducto: string;
    imagen?: Uint8Array;
    precio: number;
    caracteristicas: string;
    descripcion: string;
    stock: number;
    categoriaId: number;
    categoria?: Categoria;
    detallesCompras?: DetallesCompra[];
    devoluciones?: Devolucion[];
    comentarios?: Comentario[];
}
