import { Usuario } from "./Usuario";

export interface Sesion {
    id?: number;
    idUsuario: number;
    usuario: Usuario;
    inicioSesion: Date;
    cierreSesion: Date; 
    estado: string;
}
