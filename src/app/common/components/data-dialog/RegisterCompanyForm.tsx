import { TextField, Grid, Button } from "@mui/material";
import { useState } from "react";

//Interfaz para definir los tipos de las propiedades que recibe el componente RegisterCompanyForm se le pone FormData para definir el tipo de las propiedades pero se puede poner cualquier nombre como CompanyData
interface CompanyData { 
  nombreEmpresa: string;
  cuit: number | string;
  plantilla: string;
  facturas: string;
  pagos: string; 
  ordenMedica: string;
  adjuntaExcel: File | null;
  nota: string;
}

export default function RegisterCompanyForm() {
  // Estado para guardar los datos del formulario de la empresa, se ponen valores por defecto
  const [companyData, setCompanyData] = useState<CompanyData>({
    nombreEmpresa: '',
    cuit: '',
    plantilla: '',
    facturas: '',
    pagos: '',
    ordenMedica: '',
    adjuntaExcel: null,
    nota: ''
  }); 

  // Función para manejar el cambio de los inputs del formulario

  //react.ChangeEvent<HTMLInputElement> para definir el tipo de evento que recibe la función el react es para importar el evento de react y el ChangeEvent es para definir el tipo de evento y el <HTMLInputElement> es para definir el tipo de input que recibe el evento. el tipo de evento es un evento de cambio de un input de tipo HTMLInputElement. lo que hace e.target es obtener el input que se cambió y name es el nombre del input y value es el valor del input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    //setCompanyData es una función que recibe un objeto con los datos de la empresa y los guarda en el estado companyData. el ...companyData es para obtener los datos que ya estan guardados y el [name]: value es para actualizar el valor del input que se cambió
    setCompanyData({ 
      ...companyData,
      [name]: value
    });
  }; //gracias a esta función se puede escribir en los inputs y se guardan los datos en el estado companyData

  // Función para manejar el cambio de los archivos del formulario

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setCompanyData({
        ...companyData,
        adjuntaExcel: e.target.files[0]
      });
    }
  };

  return (
    <Grid container spacing={2} marginTop={1}>
      <Grid item xs={6} sm={6}>
        <TextField
          label="Nombre de la Empresa"
          name="nombreEmpresa"
          value={companyData.nombreEmpresa}
          onChange={handleInputChange}
          fullWidth
          variant="outlined"
        />
      </Grid>

      <Grid item xs={6} sm={6}>
        <TextField
          label="Cuit"
          name="cuit"
          value={companyData.cuit}
          onChange={handleInputChange}
          type="number"
          fullWidth
          variant="outlined"
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          label="Plantilla"
          name="plantilla"
          value={companyData.plantilla}
          onChange={handleInputChange}
          fullWidth
          variant="outlined"
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          label="Facturas"
          name="facturas"
          value={companyData.facturas}
          onChange={handleInputChange}
          fullWidth
          variant="outlined"
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          label="Pagos"
          name="pagos"
          value={companyData.pagos}
          onChange={handleInputChange}
          fullWidth
          variant="outlined"
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          label="Orden Medica"
          name="ordenMedica"
          value={companyData.ordenMedica}
          onChange={handleInputChange}
          fullWidth
          variant="outlined"
        />
      </Grid>

      <Grid item xs={12} sm={12}>
        <TextField
          label="Nota"
          name="nota"
          value={companyData.nota}
          onChange={handleInputChange}
          fullWidth
          variant="outlined"
        />
      </Grid>

      <Grid item xs={12} sm={4}>
        <Button variant="contained" component="label" fullWidth>
          Adjunta Excel
          <input
            type="file"
            hidden
            name="adjuntaExcel"
            accept=".xls,.xlsx"
            onChange={handleFileChange}
          />
        </Button>
        {companyData.adjuntaExcel && <p>{companyData.adjuntaExcel.name}</p>}
      </Grid>
    </Grid>
  );
}
