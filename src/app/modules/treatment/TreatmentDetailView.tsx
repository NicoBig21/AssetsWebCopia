import { Box, Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../common/data/treatmentData";
import { ITreatment } from "../../common/interface/treatment-interface";
import { ButtonBack } from "../../common/components";
import ButtonEdit from "../../common/components/buttons/ButtonEdit";

export default function TreatmentView() {
  const { id } = useParams<{ id: string }>(); // Obtener ID de la URL
  const [Editable, setEditable] = useState(false);
  
  const [treatment, setTreatment] = useState<ITreatment | undefined>();
  
  useEffect(() => {
    // Encontrar la prestacion por ID
    const selectedTreatment = data.find((comp) => comp.id === Number(id));
    setTreatment(selectedTreatment);
  }, [id]);
  
  if (!treatment) {
    return <Typography>Prestacion no encontrada</Typography>; // Manejar caso si no se encuentra la Prestacion
  }

  // Función que maneja el cambio de los campos
  const actualizarDatos = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (treatment) {
      setTreatment({
        ...treatment,
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
                  <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Typography variant="h5" gutterBottom>
                      Detalles de {treatment.prestacion} {treatment.estado ? <span style={{ color: 'green' }}>(Activa)</span> : <span style={{ color: 'red' }}>(Inactiva)</span>}
                    </Typography>
                    <ButtonBack/>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Prestación"
                    name="prestacion"
                    fullWidth
                    value={treatment.prestacion}
                    onChange={actualizarDatos}
                    disabled={!Editable}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Pedidos"
                    name="pedidos"
                    fullWidth
                    value={treatment.pedidos}
                    onChange={actualizarDatos}
                    disabled={!Editable}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Renovaciones"
                    name="renovaciones"
                    fullWidth
                    value={treatment.renovaciones}
                    onChange={actualizarDatos}
                    disabled={!Editable}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Finalizadas"
                    name="finalizadas"
                    fullWidth
                    value={treatment.finalizadas}
                    onChange={actualizarDatos}
                    disabled={!Editable}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Fecha de Creación"
                    name="creado"
                    fullWidth
                    value={new Date(treatment.creado).toLocaleDateString()}
                    disabled
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Última Actualización"
                    name="actualizado"
                    fullWidth
                    value={new Date(treatment.actualizado).toLocaleDateString()}
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
