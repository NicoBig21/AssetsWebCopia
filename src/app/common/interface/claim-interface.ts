
// Definición de tipos para los reclamos
export interface IClaim {
    id: number;
    nombre: string;
    email: string;
    image: string;
    cause: string;
    location: string;
    phone: number;
    social_work: string; // Obra social
    professional: string;
    urgency: 'baja' | 'media' | 'alta'; // Urgencia del reclamo
    creado: Date;        // Campo para la fecha de creación
    actualizado: Date;   // Campo para la última actualización
  }
  