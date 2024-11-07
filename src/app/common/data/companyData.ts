import { ICompany } from "../interface/company-interface";

export const data: ICompany[] = [
    {
        id: 1,
        empresa: 'empresa1', // Nombre de la empresa
        pacientes: 1, // Cantidad de pacientes
        pedidos: 1, // Cantidad de pedidos
        cuit: 1, // CUIT
        fechaEgreso: new Date('2021-12-31'),
        estado: true,
        creado: new Date('2021-01-01'),
        actualizado: new Date('2021-12-31'),
    },
    {
        id: 2,
        empresa: 'empresa2',
        pacientes: 2,
        pedidos: 2,
        cuit: 2,
        fechaEgreso: new Date('2021-12-31'),
        estado: true,
        creado: new Date('2021-01-01'),
        actualizado: new Date('2021-12-31'),
    },
    {
        id: 3,
        empresa: 'empresa3',
        pacientes: 3,
        pedidos: 3,
        cuit: 3,
        fechaEgreso: new Date('2021-12-31'),
        estado: true,
        creado: new Date('2021-01-01'),
        actualizado: new Date('2021-12-31'),
    }
];

