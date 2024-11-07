import { useMemo } from "react";
import { IProfessional } from "../../interface/professional-interface";
import {
  MaterialReactTable,
  MRT_ColumnDef,
  useMaterialReactTable,
} from "material-react-table";
import { data } from "../../data/professionalData";
import StateSwitch from "../StateSwitch";
import { useNavigate } from "react-router-dom";

// El usememo es un hook que se utiliza para memorizar un valor, en este caso se utiliza para memorizar las columnas de la tabla y no se vuelvan a renderizar cada vez que se renderiza el componente TableProfessional, esto se hace para mejorar el rendimiento de la aplicación

// Al poner el tipo de dato IProfessional en la interfaz MRT_ColumnDef se le está diciendo que las columnas de la tabla van a ser de tipo IProfessional que esta en la interfaz professional-interface

export default function TableProfessional() {
  const navigate = useNavigate(); 

  const columns = useMemo<MRT_ColumnDef<IProfessional>[]>(
    () => [
        {
          accessorKey: "id",
          header: "ID",
          enableHiding: false,
        },
        {
          accessorKey: "nombre",
          header: "Nombre",
          enableHiding: false,
          Cell: ({ row }) => (
            <span
              style={{ cursor: 'pointer', color: 'blue', textDecoration: 'none' }}
              onClick={() => navigate(`/profesionales/${row.original.id}`)} // Navega a la página de detalles del profesional
            >
              {row.original.nombre}
            </span>
          ),
        },
        {
          accessorKey: "apellido",
          header: "Apellido",
          enableHiding: false,
        },
        {
          accessorKey: "dni",
          header: "DNI",
          enableHiding: false,
        },
        {
          accessorKey: "telefono",
          header: "Teléfono",
          enableHiding: false,
        },
        {
            accessorKey: 'estado',
            header: 'Estado',
            enableHiding: false,
            Cell: ({ cell, row }) => (
              <StateSwitch
                checked={cell.getValue<boolean>()}
                entityName="al profesional"
                onChange={(newState) => {
                  // Aca se maneja el cambio de estado del profesional después de confirmar
                  console.log(`Estado cambiado para el profesional con ID ${row.original.id}: ${newState}`);
                }}
              />
            ),
          },
        ],
        []
      );

  const table = useMaterialReactTable<IProfessional>({
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