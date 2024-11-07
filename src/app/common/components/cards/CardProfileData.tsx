import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, TextField } from '@mui/material';
import { IProfile } from '../../interface/profile-interface';
import ButtonEdit from '../buttons/ButtonEdit';

interface CardProfileDataProps {
    profileData: IProfile;
}

export default function CardProfileData({ profileData }: CardProfileDataProps) {
    const [datosPersonales, setDatosPersonales] = useState(profileData); //Estado que guarda los datos personales y los actualiza
    const [editable, setEditable] = useState(false);

// Esta funcion de updateData se encarga de actualizar los datos personales, recibe un evento de tipo ChangeEvent y devuelve un void es decir no retorna nada porque solo actualiza el estado, el evento recibe un input de tipo HTMLInputElement y se desestructura para obtener el name y el value del input, luego se actualiza el estado de datos personales con el valor del input
    const updateData = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setDatosPersonales({
        ...datosPersonales,
        [name]: value,
      });
    }; 

// Esta función se encarga de manejar el estado editable, si es editable se guardan los datos y si no se habilita la edición
    const handleEdit = () => {
        if (editable) {
          // Aca se puede hacer una llamada a una API para guardar los datos
          console.log('Datos guardados:', datosPersonales);
        }
        setEditable(!editable);
    };

    return (
        <Grid item xs={12} md={9}>
            <Card>
                <CardContent>
                    <Grid container spacing={3.35}>
                    <Grid item xs={12}>
                        <Typography variant="h6">Datos Personales</Typography>
                    </Grid>
                    {Object.keys(profileData).map((key) => (
                        <Grid item xs={12} sm={6} key={key}>
                        <TextField
                            label={key.charAt(0).toUpperCase() + key.slice(1)}
                            name={key}
                            fullWidth
                            value={datosPersonales[key as keyof IProfile]}
                            onChange={updateData}
                            disabled={!editable}
                        />
                        </Grid>
                    ))} {/* Este map lo que hace es recorrer las keys del objeto profileData y por cada key crea un TextField con la key en mayúscula y el valor del objeto, el TextField tiene un evento onChange que llama a la función updateData y un disabled que depende del estado editable */}
                    <Grid item xs={12}>
                        {/* Este componente ButtonEdit recibe una función handleEdit que se ejecuta al hacer click, esta funcion es la que maneja el estado editable */}
                        <ButtonEdit onClick={handleEdit} />
                    </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    );
}
