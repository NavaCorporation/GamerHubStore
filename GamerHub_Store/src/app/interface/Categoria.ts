import { Producto } from "../modules/administration/components/models/producto";

export interface Categoria{
    id?: number;
    nombreCategoria: string;
    descripcion: string;
    productos?: Producto[];
}