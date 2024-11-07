import { useState } from "react";
import { createTheme, Grid, Typography } from "@mui/material";
import ButtonAdd from "../../common/components/buttons/ButtonAdd";
import DialogRegister from "../../common/components/dialog/DialogRegister";
import {
  CardStatics,
  RegisterProfessionalForm,
  TableProfessional,
} from "../../common/components";
import { ThemeProvider } from "@emotion/react";

export default function ProfessionalView() {
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
            <Typography variant="h4">Profesionales</Typography>
            <ButtonAdd handleOpen={handleOpen} title="Registrar Profesionales" />
            <DialogRegister
            open={open} // Pasamos el estado "open"
            onClose={handleClose} // Pasamos la función para cerrar el diálogo
            title="Registrar Profesionales"
            content={RegisterProfessionalForm()} // Pasamos el contenido del diálogo
            onConfirm={handleClose} // Aquí puedes agregar lógica de confirmación si es necesario
            />
        </Grid>
        <Grid item container spacing={4}>
            <Grid item xs={12} md={4}>
            <CardStatics
                title="Totales"
                title2="Profesionales Totales"
                total={2300}
                change="+3%"
                icon={4}
            />
            </Grid>
            <Grid item xs={12} md={4}>
            <CardStatics
                title="Asignados"
                title2="Profesionales Asignados"
                total={1200}
                change="+2%"
                icon={4}
            />
            </Grid>
            <Grid item xs={12} md={4}>
            <CardStatics
                title="sin Asignar"
                title2="Profesionales sin Asignar"
                total={1100}
                change="+1%"
                icon={4}
            />
            </Grid>
        </Grid>
        <Grid item>
            <ThemeProvider theme={darkTheme}>
            <TableProfessional />
            </ThemeProvider>
        </Grid>
        </Grid>
    );
}
