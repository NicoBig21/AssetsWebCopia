import { Button } from '@mui/material';

//ButtonAddProps es una interfaz que define los tipos de las propiedades que recibe el componente ButtonAdd
interface ButtonAddProps {
    handleOpen: () => void;  // Tipo para el callback es decir la función que se ejecutará al hacer click
    title: string;           // Tipo para el título del botón
}

//ButtonAdd es un componente que recibe dos propiedades handleOpen y title y se le pone : ButtonAddProps para definir el tipo de las propiedades
export default function ButtonAdd({ handleOpen, title }: ButtonAddProps) {
    return (
        <Button
            variant="contained" 
            color="secondary"
            aria-label="add"
            onClick={handleOpen} //Al hacer click se ejecuta la función handleOpen es decir la función que recibe como propiedad esta funcion esta en el componente padre
            sx={{ 
                width: '20rem',
                mr: 4,
            }} 
            >
            {title}
        </Button>
    );
}

//Este es un botton dinámico que recibe una función y un título y al hacer click ejecuta la función que recibe como propiedad
