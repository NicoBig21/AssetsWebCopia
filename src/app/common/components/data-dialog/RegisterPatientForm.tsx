import { TextField, Grid } from "@mui/material";
import { useState } from "react";

//Interfaz para definir los tipos de las propiedades que recibe el componente RegisterPatientForm se le pone FormData para definir el tipo de las propiedades pero se puede poner cualquier nombre como PatientData
interface PatientData { 
  nombrePaciente: string;
  empresa: string;
  obraSocial: string;
  telefono: number ;
  localidad: string ;
  direccion: number ;
  altura: number ;
  piso: number;
  departamento: string;
  genero: string; 
  edad: number; 
  nota: string;
}

export default function RegisterPatientForm() {
  // Estado para guardar los datos del formulario del paciente, se ponen valores por defecto
  const [patientData, setPatientData] = useState<PatientData>({
    nombrePaciente: '',
    empresa: '',
    obraSocial: '',
    telefono: 0,
    localidad: '',
    direccion: 0,
    altura: 0,
    piso: 0,
    departamento: '',
    genero: '',
    edad: 0,
    nota: ''
  }); 

  // Función para manejar el cambio de los inputs del formulario

  //react.ChangeEvent<HTMLInputElement> para definir el tipo de evento que recibe la función el react es para importar el evento de react y el ChangeEvent es para definir el tipo de evento y el <HTMLInputElement> es para definir el tipo de input que recibe el evento. el tipo de evento es un evento de cambio de un input de tipo HTMLInputElement. lo que hace e.target es obtener el input que se cambió y name es el nombre del input y value es el valor del input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    //setPatientData es una función que recibe un objeto con los datos de la empresa y los guarda en el estado patientData. el ...patientData es para obtener los datos que ya estan guardados y el [name]: value es para actualizar el valor del input que se cambió
    setPatientData({ 
      ...patientData,
      [name]: value
    });
  }; //gracias a esta función se puede escribir en los inputs y se guardan los datos en el estado patientData

  return (
    <Grid container spacing={2} marginTop={1}>
      <Grid item xs={6} sm={3}>
        <TextField
          label="Nombre del Paciente"
          name="nombrePaciente"
          value={patientData.nombrePaciente}
          onChange={handleInputChange}
          fullWidth
          variant="outlined"
        />
      </Grid>

      <Grid item xs={6} sm={3}>
        <TextField
          label="Empresa"
          name="empresa"
          value={patientData.empresa}
          onChange={handleInputChange}
          fullWidth
          variant="outlined"
        />
      </Grid>

      <Grid item xs={12} sm={3}>
        <TextField
          label="Obra social"
          name="obraSocial"
          value={patientData.obraSocial}
          onChange={handleInputChange}
          fullWidth
          variant="outlined"
        />
      </Grid>

      <Grid item xs={6} sm={3}>
        <TextField
          label="Telefono"
          name="telefono"
          value={patientData.telefono}
          onChange={handleInputChange}
          type="number"
          fullWidth
          variant="outlined"
        />
      </Grid>

      <Grid item xs={6} sm={3}>
        <TextField
          label="Localidad"
          name="localidad"
          value={patientData.localidad}
          onChange={handleInputChange}
          fullWidth
          variant="outlined"
        />
      </Grid>

      <Grid item xs={12} sm={3}>
        <TextField
          label="Direccion"
          name="direccion"
          value={patientData.direccion}
          onChange={handleInputChange}
          type="number"
          fullWidth
          variant="outlined"
        />
      </Grid>

      <Grid item xs={6} sm={2}>
        <TextField
          label="Altura"
          name="altura"
          value={patientData.altura}
          onChange={handleInputChange}
          type="number"
          fullWidth
          variant="outlined"
        />
      </Grid>

      <Grid item xs={6} sm={2}>
        <TextField
          label="Piso"
          name="piso"
          value={patientData.piso}
          onChange={handleInputChange}
          type="number"
          fullWidth
          variant="outlined"
        />
      </Grid>

      <Grid item xs={6} sm={2}>
        <TextField
          label="Departamento"
          name="departamento"
          value={patientData.departamento}
          onChange={handleInputChange}
          fullWidth
          variant="outlined"
        />
      </Grid>

      <Grid item xs={6} sm={6}>
        <TextField
          label="Genero"
          name="genero"
          value={patientData.genero}
          onChange={handleInputChange}
          fullWidth
          variant="outlined"
        />
      </Grid>

      <Grid item xs={6} sm={6}>
        <TextField
          label="Edad"
          name="edad"
          value={patientData.edad}
          onChange={handleInputChange}
          type="number"
          fullWidth
          variant="outlined"
        />
      </Grid>

      <Grid item xs={12} sm={12}>
        <TextField
          label="Nota"
          name="nota"
          value={patientData.nota}
          onChange={handleInputChange}
          fullWidth
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
}
