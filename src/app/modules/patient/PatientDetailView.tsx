import { Box, Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../common/data/patientData";
import { IPatient } from "../../common/interface/patient-interface";
import { ButtonBack } from "../../common/components";
import ButtonEdit from "../../common/components/buttons/ButtonEdit";

export default function PatientView() {
  const { id } = useParams<{ id: string }>(); // Obtener ID de la URL
  const [Editable, setEditable] = useState(false);
  
  const [patient, setPatient] = useState<IPatient | undefined>();
  
  useEffect(() => {
    // Encontrar la prestacion por ID
    const selectedPatient = data.find((comp) => comp.id === Number(id));
    setPatient(selectedPatient);
  }, [id]);
  
  if (!patient) {
    return <Typography>Prestacion no encontrada</Typography>; // Manejar caso si no se encuentra la Prestacion
  }

  // Función que maneja el cambio de los campos
  const actualizarDatos = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (patient) {
      setPatient({
        ...patient,
        [event.target.name]: event.target.value,
      });
    }
  };

  //buttons 

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
                      Detalles de {patient.nombre} {patient.apellido} {patient.estado ? <span style={{ color: 'green' }}>(Activo)</span> : <span style={{ color: 'red' }}>(Inactivo)</span>}
                    </Typography>
                    <Box display="flex" mr={2} gap={ '1rem' }>
                      <Button> Pedidos </Button>
                      <ButtonBack/>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Nombre"
                    name="nombre"
                    fullWidth
                    value={patient.nombre}
                    onChange={actualizarDatos}
                    disabled={!Editable}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Apellido"
                    name="apellido"
                    fullWidth
                    value={patient.apellido}
                    onChange={actualizarDatos}
                    disabled={!Editable}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="DNI"
                    name="dni"
                    fullWidth
                    value={patient.dni}
                    onChange={actualizarDatos}
                    disabled={!Editable}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Email"
                    name="email"
                    fullWidth
                    value={patient.email}
                    onChange={actualizarDatos}
                    disabled={!Editable}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Edad"
                    name="edad"
                    fullWidth
                    value={patient.edad}
                    onChange={actualizarDatos}
                    disabled={!Editable}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Género"
                    name="genero"
                    fullWidth
                    value={patient.genero}
                    onChange={actualizarDatos}
                    disabled={!Editable}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="País"
                    name="pais"
                    fullWidth
                    value={patient.pais}
                    onChange={actualizarDatos}
                    disabled={!Editable}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Dirección"
                    name="direccion"
                    fullWidth
                    value={patient.direccion}
                    onChange={actualizarDatos}
                    disabled={!Editable}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Teléfono"
                    name="telefono"
                    fullWidth
                    value={patient.telefono}
                    onChange={actualizarDatos}
                    disabled={!Editable}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Fecha de Nacimiento"
                    name="fechaNacimiento"
                    fullWidth
                    value={new Date(patient.fechaNacimiento).toLocaleDateString()}
                    disabled={!Editable}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Historial Médico"
                    name="historialMedico"
                    fullWidth
                    value={patient.historialMedico}
                    onChange={actualizarDatos}
                    disabled={!Editable}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="ID Usuario"
                    name="idUsuario"
                    fullWidth
                    value={patient.idUsuario}
                    onChange={actualizarDatos}
                    disabled={!Editable}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="ID Empresa"
                    name="idEmpresa"
                    fullWidth
                    value={patient.idEmpresa}
                    onChange={actualizarDatos}
                    disabled={!Editable}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Fecha de Creación"
                    name="creado"
                    fullWidth
                    value={new Date(patient.creado).toLocaleDateString()}
                    disabled
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Última Actualización"
                    name="actualizado"
                    fullWidth
                    value={new Date(patient.actualizado).toLocaleDateString()}
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