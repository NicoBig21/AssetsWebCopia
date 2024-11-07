import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";

// FIlterComponentProps es una interfaz que define las propiedades que recibe el componente FilterComponent en este caso la función onFilterChange que recibe un string y no retorna nada, no retorna nada porque es una función que se encarga de actualizar el estado de los reclamos filtrados en el componente padre ClaimView  
interface FilterComponentProps {
    onFilterChange: (value: string) => void; // Función para manejar el cambio de filtro
}

// Se le pone ({ onFilterChange }: FilterComponentProps) a la función FilterComponent para que reciba las propiedades de la interfaz FilterComponentProps y se pueda usar la función onFilterChange 
export default function FilterComponent({ onFilterChange }: FilterComponentProps) {
    const [filter, setFilter] = useState<string>(""); // Este useSrare es para manejar el estado del filtro que se va a aplicar entonces se inicializa con un string vacío porque no se ha aplicado ningún filtro

    // FilterChange es una función que recibe un evento y no retorna nada, esta función se encarga de actualizar el estado del filtro y de llamar a la función onFilterChange que recibe un string y no retorna nada
    const FilterChange = (event: any) => {
        const value = event.target.value;
        setFilter(value); // Actualiza el estado del filtro
        onFilterChange(value); // Llama a la función del padre para aplicar el filtro
    };

    return (
        <FormControl fullWidth >
            <InputLabel>Filtrar por</InputLabel>
            <Select
                value={filter}
                onChange={FilterChange}
                label="Filtrar por"
            >
                <MenuItem value="az">A-Z</MenuItem>
                <MenuItem value="za">Z-A</MenuItem>
                <MenuItem value="urgencyHighToLow">Urgencia: Alta a Baja</MenuItem>
                <MenuItem value="urgencyLowToHigh">Urgencia: Baja a Alta</MenuItem>
            </Select>
        </FormControl>
    );
}
