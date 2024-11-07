import { TextField } from "@mui/material";
import { useState } from "react";

interface SearchComponentProps {
    onSearchChange: (value: string) => void; // Función para manejar la búsqueda
}

export default function SearchComponent({ onSearchChange }: SearchComponentProps) {
    const [searchQuery, setSearchQuery] = useState<string>("");

    // Maneja el cambio en el campo de búsqueda
    const SearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value; 
        setSearchQuery(value); // Actualiza el estado del campo de búsqueda
        onSearchChange(value); // Llama a la función del padre para aplicar la búsqueda
    };

    return (
        <TextField
        fullWidth
        label="Buscar por nombre"
        variant="outlined"
        value={searchQuery}
        onChange={SearchChange}
        />
    );
}
