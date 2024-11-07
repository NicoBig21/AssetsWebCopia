import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function ButtonBack(): JSX.Element {
    const navigate = useNavigate();

    const handleBack = (): void => { //Función que se ejecuta al hacer click en el botón
        navigate(-1);
    };

    return (
        <Button variant="contained" color="primary" onClick={handleBack}>
            Volver
        </Button>
    );
}
