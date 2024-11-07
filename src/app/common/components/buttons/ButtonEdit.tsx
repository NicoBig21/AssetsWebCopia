import { useState } from 'react';
import { Grid, Button } from '@mui/material';

interface ButtonEditProps {
    onClick: () => void;
}

export default function ButtonEdit({ onClick }: ButtonEditProps) {
    const [editable, setEditable] = useState(false);

    const Edit = () => {
        setEditable(!editable);
        onClick();
    };

    return (
        <Grid item xs={12}>
            <Button
                variant="contained"
                color="secondary"
                fullWidth
                sx={{ color: '#ffffff' }}
                onClick={Edit}
            >
                {editable ? 'Guardar' : 'Editar'}
            </Button>
        </Grid>
    );
}
