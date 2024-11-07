import { TextField, Grid } from "@mui/material";
import { useState } from "react";

//Interfaz para definir los tipos de las propiedades que recibe el componente RegisterTreatmentForm se le pone FormData para definir el tipo de las propiedades pero se puede poner cualquier nombre como TreatmentData
interface TreatmentData { 
  nombreEmpresa: string;
  abreviatura: string;
  descripcion: string;
}

export default function RegisterTreatmentForm() {
  // Estado para guardar los datos del formulario de la empresa, se ponen valores por defecto
  const [treatmentData, setTreatmentData] = useState<TreatmentData>({
    nombreEmpresa: '',
    abreviatura: '',
    descripcion: '',
  }); 

  // Función para manejar el cambio de los inputs del formulario

  //react.ChangeEvent<HTMLInputElement> para definir el tipo de evento que recibe la función el react es para importar el evento de react y el ChangeEvent es para definir el tipo de evento y el <HTMLInputElement> es para definir el tipo de input que recibe el evento. el tipo de evento es un evento de cambio de un input de tipo HTMLInputElement. lo que hace e.target es obtener el input que se cambió y name es el nombre del input y value es el valor del input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Limitar la abreviatura a 3 caracteres
    if (name === "abreviatura" && value.length > 3) {
        return; // Ignora el cambio si excede los 3 caracteres
    }
    
    //setTreatmentData es una función que recibe un objeto con los datos de la empresa y los guarda en el estado TreatmentData. el ...TreatmentData es para obtener los datos que ya estan guardados y el [name]: value es para actualizar el valor del input que se cambió
    setTreatmentData({ 
      ...treatmentData,
      [name]: value
    });
  }; //gracias a esta función se puede escribir en los inputs y se guardan los datos en el estado TreatmentData

  return (
    <Grid container spacing={2} marginTop={1}>
      <Grid item xs={6} sm={6}>
        <TextField
          label="Nombre de la Empresa"
          name="nombreEmpresa"
          value={treatmentData.nombreEmpresa}
          onChange={handleInputChange}
          fullWidth
          variant="outlined"
        />
      </Grid>

      <Grid item xs={6} sm={6}>
        <TextField
          label="Abreviatura"
          name="abreviatura"
          value={treatmentData.abreviatura}
          onChange={handleInputChange}
          fullWidth
          variant="outlined"
        />
      </Grid>

      <Grid item xs={12} sm={12}>
        <TextField
          label="Descripción"
          name="descripcion"
          value={treatmentData.descripcion}
          onChange={handleInputChange}
          fullWidth
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
}
