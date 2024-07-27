import { Categoria } from "./Categoria";

export interface Producto{
    id?: number;
    nombreproducto: string;
    precioprducto: string;
    imagenproducto: string;
    nombrecategoria: string;
    categoria?: Categoria;
    stockproducto: number;
}