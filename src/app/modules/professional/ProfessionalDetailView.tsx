import { Box, Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../common/data/professionalData";
import { IProfessional } from "../../common/interface/professional-interface";
import { ButtonBack, ButtonDetail } from "../../common/components";
import ButtonEdit from "../../common/components/buttons/ButtonEdit";
import { ButtonDetailProfesional } from "../../common/data/buttonDetailData";

export default function ProfessionalView() {
  const { id } = useParams<{ id: string }>(); // Obtener ID de la URL
  const [Editable, setEditable] = useState(false);
  
  const [professional, setProfessional] = useState<IProfessional | undefined>();
  
  useEffect(() => {
    // Encontrar la prestacion por ID
    const selectedProfessional = data.find((comp) => comp.id === Number(id));
    setProfessional(selectedProfessional);
  }, [id]);
  
  if (!professional) {
    return <Typography>Prestacion no encontrada</Typography>; // Manejar caso si no se encuentra la Prestacion
  }

  // Función que maneja el cambio de los campos
  const actualizarDatos = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (professional) {
      setProfessional({
        ...professional,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleEdit = () => {
    setEditable(!Editable);
  };


  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={12}>
          <Card>
            <CardContent>
              <Grid container spacing={3.35}>
                <Grid item xs={12}>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                    >
                      <Typography variant="h5" gutterBottom>
                        Detalles de {professional.nombre} {professional.apellido} ({professional.especialidad}) {professional.estado ? <span style={{ color: 'green' }}>(Activo)</span> : <span style={{ color: 'red' }}>(Inactivo)</span>}
                      </Typography>
                      <Box display="flex" mr={2} gap={ '1rem' }>
                          <ButtonDetail options={ButtonDetailProfesional} />
                          <ButtonBack/>
                      </Box>
                    </Box>
                </Grid>     
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Nombre"
                    name="nombre"
                    fullWidth
                    value={professional.nombre}
                    onChange={actualizarDatos}
                    disabled={!Editable}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Apellido"
                    name="apellido"
                    fullWidth
                    value={professional.apellido}
                    onChange={actualizarDatos}
                    disabled={!Editable}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="DNI"
                    name="dni"
                    fullWidth
                    value={professional.dni}
                    onChange={actualizarDatos}
                    disabled={!Editable}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Email"
                    name="email"
                    fullWidth
                    value={professional.email}
                    onChange={actualizarDatos}
                    disabled={!Editable}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Edad"
                    name="edad"
                    fullWidth
                    value={professional.edad}
                    onChange={actualizarDatos}
                    disabled={!Editable}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Género"
                    name="genero"
                    fullWidth
                    value={professional.genero}
                    onChange={actualizarDatos}
                    disabled={!Editable}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="País"
                    name="pais"
                    fullWidth
                    value={professional.pais}
                    onChange={actualizarDatos}
                    disabled={!Editable}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Dirección"
                    name="direccion"
                    fullWidth
                    value={professional.direccion}
                    onChange={actualizarDatos}
                    disabled={!Editable}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Teléfono"
                    name="telefono"
                    fullWidth
                    value={professional.telefono}
                    onChange={actualizarDatos}
                    disabled={!Editable}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Fecha de Nacimiento"
                    name="fechaNacimiento"
                    fullWidth
                    value={new Date(professional.fechaNacimiento).toLocaleDateString()}
                    disabled={!Editable}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Matrícula"
                    name="matricula"
                    fullWidth
                    value={professional.matricula}
                    onChange={actualizarDatos}
                    disabled={!Editable}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="ID Usuario"
                    name="idUsuario"
                    fullWidth
                    value={professional.idUsuario}
                    onChange={actualizarDatos}
                    disabled={!Editable}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Fecha de Creación"
                    name="creado"
                    fullWidth
                    value={new Date(professional.creado).toLocaleDateString()}
                    disabled
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Última Actualización"
                    name="actualizado"
                    fullWidth
                    value={new Date(professional.actualizado).toLocaleDateString()}
                    disabled
                  />
                </Grid>
                <Grid item xs={12}>
                  <ButtonEdit onClick={handleEdit} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}