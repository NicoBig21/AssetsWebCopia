import { Avatar, Card, CardContent, Grid, IconButton, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { InfoCardDetailPerson } from '../../interface/card-detail-person-interface';
import { useState } from 'react';

interface CardDetailPersonProps {
    people: InfoCardDetailPerson[]; // Ahora acepta una lista de personas
}

export default function CardDetailPerson({ people }: CardDetailPersonProps): JSX.Element {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? people.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === people.length - 1 ? 0 : prevIndex + 1));
    };

    if (!people.length) {
        return (
            <Typography variant="h6" align="center">
                No hay personas disponibles.
            </Typography>
        );
    }

    const { nombre, apellido, profession} = people[currentIndex];

    return (
        <Grid item xs={12}>
            <Card>
                <Typography variant="h6" align="center" mt={2}>
                    Profesionales
                </Typography>
                <Grid display={'flex'}>
                    <IconButton onClick={handlePrevious}>
                        <ArrowBackIcon />
                    </IconButton>
                    <Avatar
                        sx={{
                            width: 150,
                            height: 150,
                            margin: '0 auto',
                            mt: 2,
                        }}
                        src='/static/images/avatar/default.jpg'
                    />
                    <IconButton onClick={handleNext}>
                        <ArrowForwardIcon />
                    </IconButton>
                </Grid>
                <CardContent sx={{ mt: 1 }}>
                    <Typography variant="h6" align="center">
                        {nombre} {apellido}
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary">
                        {profession}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}
