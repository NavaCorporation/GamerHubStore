import { Rol } from "./Rol";

export interface Usuario {
    id?: number;
    nombre: string;
    apellido: string;
    correo: string;
    nombreUsuario: string;
    contrasena: string;
    telefono: string;
    estado: string;
    fotoProfile: string;
    rolId: number;
    rol?: Rol;


}