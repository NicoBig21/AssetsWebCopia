import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../common/data/claimData";
import { IClaim } from "../../common/interface/claim-interface";
import { ButtonBack, ButtonDetail } from "../../common/components";
import { ButtonDetailClaim } from "../../common/data/buttonDetailData";

export default function ClaimDetailView() {
  const { id } = useParams<{ id: string }>(); // Obtener ID de la URL
  const [Editable, setEditable] = useState(false);

  const [claim, setClaim] = useState<IClaim | undefined>();

  useEffect(() => {
    // Encontrar la reclamación por ID
    const selectedClaim = data.find((comp) => comp.id === Number(id));
    setClaim(selectedClaim);
  }, [id]);

  if (!claim) {
    return <Typography>Reclamación no encontrada</Typography>; // Manejar caso si no se encuentra la reclamación
  }

  // Función que maneja el cambio de los campos
  const actualizarDatos = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (claim) {
      setClaim({
        ...claim,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleEditar = () => {
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
                        Detalles del reclamo de {claim.nombre}
                      </Typography>
                        <Box display="flex" mr={2} gap={ '1rem' }>
                          <Button>Finalizar</Button>
                          <ButtonDetail options={ButtonDetailClaim} />
                          <ButtonBack />
                        </Box>
                    </Box>

                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Nombre"
                      name="nombre"
                      fullWidth
                      value={claim.nombre}
                      onChange={actualizarDatos}
                      disabled={!Editable}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Email"
                      name="email"
                      fullWidth
                      value={claim.email}
                      onChange={actualizarDatos}
                      disabled={!Editable}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Causa"
                      name="cause"
                      fullWidth
                      value={claim.cause}
                      onChange={actualizarDatos}
                      disabled={!Editable}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Ubicación"
                      name="location"
                      fullWidth
                      value={claim.location}
                      onChange={actualizarDatos}
                      disabled={!Editable}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Teléfono"
                      name="phone"
                      fullWidth
                      value={claim.phone}
                      onChange={actualizarDatos}
                      disabled={!Editable}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Obra Social"
                      name="social_work"
                      fullWidth
                      value={claim.social_work}
                      onChange={actualizarDatos}
                      disabled={!Editable}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Profesional"
                      name="professional"
                      fullWidth
                      value={claim.professional}
                      onChange={actualizarDatos}
                      disabled={!Editable}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Urgencia"
                      name="urgency"
                      fullWidth
                      value={claim.urgency}
                      onChange={actualizarDatos}
                      disabled={!Editable}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Fecha de Creación"
                      name="creado"
                      fullWidth
                      value={new Date(claim.creado).toLocaleDateString()}
                      disabled
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Última Actualización"
                      name="actualizado"
                      fullWidth
                      value={new Date(claim.actualizado).toLocaleDateString()}
                      disabled
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="secondary"
                      fullWidth
                      sx={{ color: "#ffffff", mt: 0.7 }}
                      onClick={handleEditar}
                    >
                      {Editable ? "Guardar" : "Editar"}
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

  );
}
