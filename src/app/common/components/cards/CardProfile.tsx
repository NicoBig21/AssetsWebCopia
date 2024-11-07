import { Avatar, Box, Button, Card, CardContent, Grid, Typography } from '@mui/material';

interface CardProfileProps {
    nombre: string;
    apellido: string;
    onLiquidacionClick: () => void;
    onResumenClick: () => void;
}

export default function CardProfile({ nombre, apellido, onLiquidacionClick, onResumenClick,}: CardProfileProps): JSX.Element {
    return (
        <Grid item xs={12} md={3} mt={1.5}>
            <Card>
                <Avatar
                sx={{
                    width: 120,
                    height: 120,
                    margin: '0 auto',
                    mt: 2,
                }}
                src="/static/images/avatar/1.jpg"
                />
                <CardContent sx={{ mt: 1 }}>
                <Typography variant="h6" align="center">
                    {nombre} {apellido}
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary">
                    Profesional
                </Typography>
                <Box sx={{ mt: 3 }}>
                    <Typography variant="body2" color="textSecondary">
                    Reclamos Pendientes
                    </Typography>
                    <Typography variant="h6">32</Typography>
                    <Typography variant="body2" color="textSecondary">
                    Mensajes Pendientes
                    </Typography>
                    <Typography variant="h6">26</Typography>
                    <Typography variant="body2" color="textSecondary">
                    Mails Pendientes
                    </Typography>
                    <Typography variant="h6">6</Typography>
                    <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    sx={{ mt: 2, color: '#ffffff' }}
                    onClick={onLiquidacionClick}
                    >
                    Liquidacion
                    </Button>
                    <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    sx={{ mt: 2, color: '#ffffff' }}
                    onClick={onResumenClick}
                    >
                    Resumen
                    </Button>
                </Box>
                </CardContent>
            </Card>
        </Grid>
    );
}
