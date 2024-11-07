import { Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { data } from '../../common/data/profileData';
import { CardProfile, CardProfileData } from '../../common/components';

export default function ProfileView(): JSX.Element {
    const navigate = useNavigate();

    const handleConsultarLiquidacion = () => {
        navigate('/liquidacion');
    };

    const handleConsultarResumen = () => {
        navigate('/resumen');
    };

    return (
        <Box sx={{ p: 2 }}>
            <Grid container spacing={3} justifyContent="center">
                <CardProfile
                nombre={data[0].nombre}
                apellido={data[0].apellido}
                onLiquidacionClick={handleConsultarLiquidacion}
                onResumenClick={handleConsultarResumen}
                />
                <CardProfileData profileData={data[0]} />
            </Grid>
        </Box>
  );
}
