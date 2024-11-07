import { useMemo } from "react";
import { ITreatment } from "../../interface/treatment-interface";
import {
  MaterialReactTable,
  MRT_ColumnDef,
  useMaterialReactTable,
} from "material-react-table";
import { data } from "../../data/treatmentData";
import StateSwitch from "../StateSwitch";
import { useNavigate } from "react-router-dom";

// El usememo es un hook que se utiliza para memorizar un valor, en este caso se utiliza para memorizar las columnas de la tabla y no se vuelvan a renderizar cada vez que se renderiza el componente TableTreatment, esto se hace para mejorar el rendimiento de la aplicación

// Al poner el tipo de dato ITreatment en la interfaz MRT_ColumnDef se le está diciendo que las columnas de la tabla van a ser de tipo ITreatment que esta en la interfaz treatment-interface

export default function TableTreatment() {
  const navigate = useNavigate(); 

  const columns = useMemo<MRT_ColumnDef<ITreatment>[]>(
    () => [
        {
          accessorKey: "id",
          header: "ID",
          enableHiding: false,
        },
        {
          accessorKey: "prestacion",
          header: "Prestacion",
          enableHiding: false,
          Cell: ({ row }) => (
            <span
              style={{ cursor: 'pointer', color: 'blue', textDecoration: 'none' }}
              onClick={() => navigate(`/prestaciones/${row.original.id}`)} // Navega a la página de detalles de la prestacion
            >
              {row.original.prestacion}
            </span>
          ),
        },
        {
          accessorKey: "pedidos",
          header: "Pedidos",
          enableHiding: false,
        },
        {
          accessorKey: "renovaciones",
          header: "Renovaciones",
          enableHiding: false,
        },
        {
          accessorKey: "finalizadas",
          header: "Finalizadas",
          enableHiding: false,
        },
        {
            accessorKey: 'estado',
            header: 'Estado',
            enableHiding: false,
            Cell: ({ cell, row }) => (
              <StateSwitch 
                checked={cell.getValue<boolean>()}
                entityName="de la prestacion"
                onChange={(newState) => {
                  // Aquí se maneja el cambio de estado del prestacion después de confirmar
                  console.log(`Estado cambiado para la prestacion con ID ${row.original.id}: ${newState}`);
                  // Aquí podrías actualizar el estado del prestacion en tu data o hacer una llamada a la API
                }}
              />
            ),
          },
        ],
        []
      );

  const table = useMaterialReactTable<ITreatment>({
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
