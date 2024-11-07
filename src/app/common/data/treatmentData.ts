import { ITreatment } from "../interface/treatment-interface";

export const data: ITreatment[] = [
    {
        id: 1,
        prestacion: 'prestacion1', // Nombre de la prestacion 
        pedidos: 'Pedidos',
        renovaciones: 'Renovaciones',
        finalizadas: 'Finalizadas',
        fechaEgreso: new Date('2021-12-31'),
        estado: true,
        creado: new Date('2021-01-01'),
        actualizado: new Date('2021-12-31'),
    },
    {
        id: 2,
        prestacion: 'prestacion2',
        pedidos: 'Pedidos',
        renovaciones: 'Renovaciones',
        finalizadas: 'Finalizadas',
        fechaEgreso: new Date('2021-12-31'),
        estado: true,
        creado: new Date('2021-01-01'),
        actualizado: new Date('2021-12-31'),
    },
    {
        id: 3,
        prestacion: 'prestacion3',
        pedidos: 'Pedidos',
        renovaciones: 'Renovaciones',
        finalizadas: 'Finalizadas',
        fechaEgreso: new Date('2021-12-31'),
        estado: true,
        creado: new Date('2021-01-01'),
        actualizado: new Date('2021-12-31'),
    }
];
