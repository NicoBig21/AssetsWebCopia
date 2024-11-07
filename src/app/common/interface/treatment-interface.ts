export interface ITreatment {
    id: number;  // ID único del paciente
    prestacion: string;  // Nombre
    pedidos: string;  // Pedidos
    renovaciones : string;  // Renovaciones
    finalizadas: string;  // Finalizadas
    fechaEgreso: Date;  // Fecha de egreso 
    estado: boolean;  // Estado activo o inactivo
    creado: Date;  // Fecha de creación de los datos
    actualizado: Date;  // Fecha de actualización de los datos 
}