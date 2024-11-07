import { Grid, Card, CardContent, Avatar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { IClaim } from '../../interface/claim-interface';

interface CardClaimProps {
    claim: IClaim[]; // Es un arreglo de reclamos
}

// Exportando directamente la función CardReclamo
export default function CardClaim({ claim }: CardClaimProps) {
    const navigate = useNavigate();

// Función que maneja la navegación al detalle de un reclamo
    const handleConsultar = (claimId: number) => {
        navigate(`/reclamos/${claimId}`);
    };

// Esta función recibe un string que es la urgencia del reclamo y retorna un color según la urgencia
    const getUrgencyColor = (urgency: IClaim['urgency']) => {
        const colors = {
        baja: '#299B81',
        media: '#EBD911',
        alta: 'red',
        };
        return colors[urgency] || 'gray'; // Retorna gray si no coincide con ninguna urgencia
    };

  return (
    <Grid container spacing={2} mt={1}>
        {claim.map(({ id, nombre, email, image, cause, location, phone, social_work, professional, urgency }) => (
            <Grid item xs={12} md={6} lg={4} key={id}>
            <Card>
                <CardContent>
                <Grid container spacing={2}>
                    <Grid item>
                        <Avatar src={image} alt={nombre} />
                    </Grid>
                    <Grid item xs>
                        <Typography variant="h6">{nombre}</Typography>
                        <Typography variant="body2" color="textSecondary">{email}</Typography>
                    </Grid>
                </Grid>

                <Typography mt={2} variant="body2" color="textSecondary" paragraph>
                    {cause.substring(0, 30)}... {/* este método corta el texto a 30 caracteres */}
                </Typography>
                <Typography variant="body2" color="textSecondary"><strong>Email:</strong> {email}</Typography>
                <Typography variant="body2" color="textSecondary"><strong>Location:</strong> {location}</Typography>
                <Typography variant="body2" color="textSecondary"><strong>Phone:</strong> {phone}</Typography>
                <Typography variant="body2" color="textSecondary"><strong>Obra Social:</strong> {social_work}</Typography>
                <Typography variant="body2" color="textSecondary"><strong>Profesional:</strong> {professional}</Typography>

                <Grid container justifyContent="space-between" alignItems="center" sx={{ mt: 2 }}>
                    <Box
                    sx={{
                        backgroundColor: getUrgencyColor(urgency),
                        color: 'white',
                        padding: '6px 10px',
                        borderRadius: '4px',
                    }}
                    >
                        <Typography>Urgencia: <strong>{urgency}</strong></Typography>
                    </Box>
                    <Button onClick={() => handleConsultar(id)} sx={{ p: 1.1 }}>
                        <Typography variant="body2">Ver más</Typography>
                    </Button>
                </Grid>
                </CardContent>
            </Card>
            </Grid>
        ))}
    </Grid>
  );
}
