import { OrdenCompra } from "./OrdenCompra";

export interface VerificacionEnvio {
    id?: number;
    fechaEnvio: Date; 
    fechaFinal: Date; 
    numeroSeguimiento: number;
    estado: string;
    idOrden: number;
    ordenCompra?: OrdenCompra;
}
