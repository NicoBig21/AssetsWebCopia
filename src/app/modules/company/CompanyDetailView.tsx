import { Box, Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../common/data/companyData";
import { ICompany } from "../../common/interface/company-interface";
import { ButtonBack, ButtonDetail } from "../../common/components";
import ButtonEdit from "../../common/components/buttons/ButtonEdit";
import { ButtonDetailCompany } from "../../common/data/buttonDetailData";

export default function CompanyView() {
  const { id } = useParams<{ id: string }>(); // Obtener ID de la URL
  const [Editable, setEditable] = useState(false);
  
  const [company, setCompany] = useState<ICompany | undefined>();
  
  useEffect(() => {
    // Encontrar la empresa por ID
    const selectedCompany = data.find((comp) => comp.id === Number(id));
    setCompany(selectedCompany);
  }, [id]);
  
  if (!company) {
    return <Typography>Empresa no encontrada</Typography>; // Manejar caso si no se encuentra la empresa
  }

  // Función que maneja el cambio de los campos
  const actualizarDatos = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (company) {
      setCompany({
        ...company,
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
                        Detalles de {company.empresa}{' '}
                        {company.estado ? (
                          <span style={{ color: 'green' }}>(Activa)</span>
                        ) : (
                          <span style={{ color: 'red' }}>(Inactiva)</span>
                        )}
                      </Typography>
                      <Box display="flex" mr={2} gap={ '1rem' }>
                        <Button>Pedidos</Button>
                        <ButtonDetail options={ButtonDetailCompany}/>
                        <ButtonBack />
                      </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Empresa"
                    name="empresa"
                    fullWidth
                    value={company.empresa}
                    onChange={actualizarDatos}
                    disabled={!Editable}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="CUIT"
                    name="cuit"
                    fullWidth
                    value={company.cuit}
                    onChange={actualizarDatos}
                    disabled={!Editable}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Pacientes"
                    name="pacientes"
                    fullWidth
                    value={company.pacientes}
                    onChange={actualizarDatos}
                    disabled={!Editable}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Pedidos"
                    name="pedidos"
                    fullWidth
                    value={company.pedidos}
                    onChange={actualizarDatos}
                    disabled={!Editable}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Fecha de Creación"
                    name="creado"
                    fullWidth
                    value={new Date(company.creado).toLocaleDateString()}
                    disabled
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Última Actualización"
                    name="actualizado"
                    fullWidth
                    value={new Date(company.actualizado).toLocaleDateString()}
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
