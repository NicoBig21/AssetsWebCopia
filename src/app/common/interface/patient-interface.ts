export interface IPatient {
    id: number;  // ID único del paciente
    nombre: string;  // Nombre
    apellido: string;  // Apellido
    dni: string;  // DNI 
    email: string;  // Email 
    edad: number;  // Edad
    genero: 'masculino' | 'femenino' | 'otro';  // Género del paciente
    pais: string;  // País 
    direccion: string;  // Dirección
    telefono: string;  // Teléfono
    fechaNacimiento: Date;  // Fecha de nacimiento 
    fechaIngreso: Date;  // Fecha de ingreso 
    fechaEgreso: Date;  // Fecha de egreso 
    estado: boolean;  // Estado activo o inactivo
    idUsuario: number;  // Usuario al que pertenece 
    idEmpresa: number;  // Empresa a la que pertenece 
    creado: Date;  // Fecha de creación de los datos
    actualizado: Date;  // Fecha de actualización de los datos 
    historialMedico?: string[];  // Historial médico opcional
}