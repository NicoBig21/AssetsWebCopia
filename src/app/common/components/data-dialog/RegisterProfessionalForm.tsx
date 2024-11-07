import { TextField, Grid } from "@mui/material";
import { useState } from "react";

//Interfaz para definir los tipos de las propiedades que recibe el componente RegisterProfessionalForm se le pone FormData para definir el tipo de las propiedades pero se puede poner cualquier nombre como ProfessionalData
interface ProfessionalData { 
  nombreProfesional: string;
  email: string;
  cuit: number | string;
  iva: number ;
  entidadBancaria: string ;
  numeroCuenta: number ;
  cbu: number ;
  alias: string ;
  genero: string; 
  telefono: number; 
  comuna: string;
  localidad: string;
  nota: string;
}

export default function RegisterProfessionalForm() {
  // Estado para guardar los datos del formulario del profesional, se ponen valores por defecto
  const [professionalData, setProfessionalData] = useState<ProfessionalData>({
    nombreProfesional: '',
    email: '',
    cuit: '',
    iva: 0,
    entidadBancaria: '',
    numeroCuenta: 0,
    cbu: 0,
    alias: '',
    genero: '',
    telefono: 0,
    comuna: '',
    localidad: '',
    nota: ''
  }); 

  // Función para manejar el cambio de los inputs del formulario

  //react.ChangeEvent<HTMLInputElement> para definir el tipo de evento que recibe la función el react es para importar el evento de react y el ChangeEvent es para definir el tipo de evento y el <HTMLInputElement> es para definir el tipo de input que recibe el evento. el tipo de evento es un evento de cambio de un input de tipo HTMLInputElement. lo que hace e.target es obtener el input que se cambió y name es el nombre del input y value es el valor del input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    //setProfessionalData es una función que recibe un objeto con los datos de la empresa y los guarda en el estado professionalData. el ...professionalData es para obtener los datos que ya estan guardados y el [name]: value es para actualizar el valor del input que se cambió
    setProfessionalData({ 
      ...professionalData,
      [name]: value
    });
  }; //gracias a esta función se puede escribir en los inputs y se guardan los datos en el estado professionalData

  return (
    <Grid container spacing={2} marginTop={1}>
      <Grid item xs={6} sm={3}>
        <TextField
          label="Nombre del profesional"
          name="nombreProfesional"
          value={professionalData.nombreProfesional}
          onChange={handleInputChange}
          fullWidth
          variant="outlined"
        />
      </Grid>

      <Grid item xs={6} sm={3}>
        <TextField
          label="Email"
          name="email"
          value={professionalData.email}
          onChange={handleInputChange}
          fullWidth
          variant="outlined"
        />
      </Grid>

      <Grid item xs={6} sm={3}>
        <TextField
          label="Cuit"
          name="cuit"
          value={professionalData.cuit}
          onChange={handleInputChange}
          type="number"
          fullWidth
          variant="outlined"
        />
      </Grid>

      <Grid item xs={6} sm={3}>
        <TextField
          label="Iva"
          name="iva"
          value={professionalData.iva}
          onChange={handleInputChange}
          type="number"
          fullWidth
          variant="outlined"
        />
      </Grid>

      <Grid item xs={6} sm={3}>
        <TextField
          label="Entidad Bancaria"
          name="entidadBancaria"
          value={professionalData.entidadBancaria}
          onChange={handleInputChange}
          fullWidth
          variant="outlined"
        />
      </Grid>

      <Grid item xs={6} sm={3}>
        <TextField
          label="Numero de Cuenta"
          name="numeroCuenta"
          value={professionalData.numeroCuenta}
          onChange={handleInputChange}
          type="number"
          fullWidth
          variant="outlined"
        />
      </Grid>

      <Grid item xs={6} sm={3}>
        <TextField
          label="CBU"
          name="cbu"
          value={professionalData.cbu}
          onChange={handleInputChange}
          type="number"
          fullWidth
          variant="outlined"
        />
      </Grid>

      <Grid item xs={6} sm={3}>
        <TextField
          label="Alias"
          name="alias"
          value={professionalData.alias}
          onChange={handleInputChange}
          fullWidth
          variant="outlined"
        />
      </Grid>

      <Grid item xs={6} sm={3}>
        <TextField
          label="Genero"
          name="genero"
          value={professionalData.genero}
          onChange={handleInputChange}
          fullWidth
          variant="outlined"
        />
      </Grid>

      <Grid item xs={6} sm={3}>
        <TextField
          label="Telefono"
          name="telefono"
          value={professionalData.telefono}
          onChange={handleInputChange}
          type="number"
          fullWidth
          variant="outlined"
        />
      </Grid>

      <Grid item xs={6} sm={3}>
        <TextField
          label="Comuna"
          name="comuna"
          value={professionalData.comuna}
          onChange={handleInputChange}
          fullWidth
          variant="outlined"
        />
      </Grid>

      <Grid item xs={6} sm={3}>
        <TextField
          label="Localidad"
          name="localidad"
          value={professionalData.localidad}
          onChange={handleInputChange}
          fullWidth
          variant="outlined"
        />
      </Grid>

      <Grid item xs={12} sm={12}>
        <TextField
          label="Nota"
          name="nota"
          value={professionalData.nota}
          onChange={handleInputChange}
          fullWidth
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
}
