import { useState } from "react";
import { createTheme, Grid, Typography } from "@mui/material";
import ButtonAdd from "../../common/components/buttons/ButtonAdd";
import DialogRegister from "../../common/components/dialog/DialogRegister";
import {
  CardStatics,
  RegisterPatientForm,
  TablePatient,
} from "../../common/components";
import { ThemeProvider } from "@emotion/react";

export default function PatientView() {
    const [open, setOpen] = useState(false); // Estado para controlar el dialog

    const handleOpen = () => setOpen(true); // Función para abrir el dialog
    const handleClose = () => setOpen(false); // Función para cerrar el dialog

    const darkTheme = createTheme({
        palette: {
        mode: "light",
        },
    });

    return (
        <Grid container direction="column" spacing={2}>
        <Grid item container justifyContent="space-between" alignItems="center">
            <Typography variant="h4">Pacientes</Typography>
            <ButtonAdd handleOpen={handleOpen} title="Registrar Pacientes" />
            <DialogRegister
            open={open} // Pasamos el estado "open"
            onClose={handleClose} // Pasamos la función para cerrar el diálogo
            title="Registrar Pacientes"
            content={RegisterPatientForm()} // Pasamos el contenido del diálogo
            onConfirm={handleClose} // Aquí puedes agregar lógica de confirmación si es necesario
            />
        </Grid>
        <Grid item container spacing={4}>
            <Grid item xs={12} md={4}>
            <CardStatics
                title="Totales"
                title2="Pacientes Totales"
                total={2300}
                change="+3%"
                icon={5}
            />
            </Grid>
            <Grid item xs={12} md={4}>
            <CardStatics
                title="Asignados"
                title2="Pacientes Asignados"
                total={1200}
                change="+2%"
                icon={5}
            />
            </Grid>
            <Grid item xs={12} md={4}>
            <CardStatics
                title="sin Asignar"
                title2="Pacientes sin Asignar"
                total={1100}
                change="+1%"
                icon={5}
            />
            </Grid>
        </Grid>
        <Grid item>
            <ThemeProvider theme={darkTheme}>
            <TablePatient />
            </ThemeProvider>
        </Grid>
        </Grid>
    );
}
