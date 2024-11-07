export interface IProfessional {
    id: number; // ID del profesional
    nombre: string; // Nombre del profesional
    apellido: string; // Apellido del profesional
    dni: string; // DNI del profesional
    email: string; // Email del profesional
    edad: number;   // Edad
    genero: 'masculino' | 'femenino' | 'otro';  // Género del paciente
    pais: string; // País del profesional
    direccion: string; // Dirección del profesional
    telefono: string; // Teléfono del profesional
    fechaNacimiento: Date; // Fecha de nacimiento del profesional
    fechaIngreso: Date; // Fecha de ingreso del profesional
    fechaEgreso: Date; // Fecha de egreso del profesional
    estado: boolean; // Estado activo o inactivo
    especialidad: string; // Especialidad del profesional
    matricula: string; // Matrícula del profesional
    idUsuario: number; // Usuario al que pertenece el profesional
    creado:  Date; // Fecha de creación de los datos
    actualizado:  Date; // Fecha de actualización de los datos 
}