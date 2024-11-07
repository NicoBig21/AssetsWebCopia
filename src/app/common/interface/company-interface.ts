export interface ICompany {
    id: number;  // ID único del paciente
    empresa: string;  // Nombre
    pacientes: number; // Cantidad de pacientes
    pedidos : number;  // Cantidad de pedidos
    cuit: number;  // CUIT
    fechaEgreso: Date;  // Fecha de egreso 
    estado: boolean;  // Estado activo o inactivo
    creado: Date;  // Fecha de creación de los datos
    actualizado: Date;  // Fecha de actualización de los datos 
}
