import { Producto } from "../modules/administration/components/models/producto";

export interface Categoria{
    id?: number;
    nombrecategoria: string;
    descripcioncategoria: string;
    producto?: Producto[];
}