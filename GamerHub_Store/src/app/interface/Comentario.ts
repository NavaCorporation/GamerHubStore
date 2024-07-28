import { Producto } from "./Producto";
import { Usuario } from "./Usuario";

export interface Comentario {
    id?: number;
    idUsuario: number;
    usuario?: Usuario;
    idProducto: number;
    producto?: Producto;
    comentarioUsuario: string;
}
