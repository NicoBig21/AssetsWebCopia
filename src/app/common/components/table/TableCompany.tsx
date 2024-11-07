import { useMemo } from "react";
import { ICompany } from "../../interface/company-interface";
import {
  MaterialReactTable,
  MRT_ColumnDef,
  useMaterialReactTable,
} from "material-react-table";
import { data } from "../../data/companyData";
import StateSwitch from "../StateSwitch";
import { useNavigate } from "react-router-dom";

// El usememo es un hook que se utiliza para memorizar un valor, en este caso se utiliza para memorizar las columnas de la tabla y no se vuelvan a renderizar cada vez que se renderiza el componente TablePatient, esto se hace para mejorar el rendimiento de la aplicación

// Al poner el tipo de dato IPatient en la interfaz MRT_ColumnDef se le está diciendo que las columnas de la tabla van a ser de tipo IPatient que esta en la interfaz patient-interface

export default function TableCompany() {
  const navigate = useNavigate(); 

  const columns = useMemo<MRT_ColumnDef<ICompany>[]>(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        enableHiding: false,
      },
      {
        accessorKey: "empresa",
        header: "Empresa",
        enableHiding: false,
        Cell: ({ row }) => (
          <span
            style={{ cursor: 'pointer', color: 'blue', textDecoration: 'none' }}
            onClick={() => navigate(`/empresa/${row.original.id}`)} // Navega a la página de detalles del profesional
          >
            {row.original.empresa}
          </span>
        ),
      },
      {
        accessorKey: "pacientes",
        header: "Pacientes",
        enableHiding: false,
      },
      {
        accessorKey: "pedidos",
        header: "Pedidos",
        enableHiding: false,
      },
      {
        accessorKey: "cuit",
        header: "CUIT",
        enableHiding: false,
      },
      {
        accessorKey: 'estado',
        header: 'Estado',
        enableHiding: false,
        Cell: ({ cell, row }) => (
          <StateSwitch
            checked={cell.getValue<boolean>()}
            entityName="de la empresa"
            onChange={(newState) => {
              // Aquí se maneja el cambio de estado del paciente después de confirmar
              console.log(`Estado cambiado para la empresa con ID ${row.original.id}: ${newState}`);
              // Aquí podrías actualizar el estado del paciente en tu data o hacer una llamada a la API
            }}
          />
        ),
      },
    ],
    []
  );

  const table = useMaterialReactTable<ICompany>({
    columns, // Se pasan las columnas de la tabla
    data, // Se pasa la data de la tabla
    enableRowSelection: true, // Se habilita la selección de filas
    enableColumnOrdering: true, // Se habilita el ordenamiento de columnas
    enableGlobalFilter: true, // Se habilita el filtro global
    initialState: { // Se pasa el estado inicial de la tabla
      pagination: { // Se pasa la paginación de la tabla
        pageSize: 7, // Se pasa el tamaño de la página
        pageIndex: 0, // Se pasa el índice de la página
      },
    },
  });

  return <MaterialReactTable table={table} />; // Se retorna la tabla para renderizarla en el componente
}
