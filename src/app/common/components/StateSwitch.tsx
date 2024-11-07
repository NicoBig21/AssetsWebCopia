import React, { useState } from 'react';
import { Switch, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';

interface StateSwitchProps {
  checked: boolean; // checked es un booleano que indica si el estado está activo o no
  onChange: (checked: boolean) => void; // onChange es una función que se llama cuando se cambia el estado por eso recibe un booleano y no devuelve nada porque no es necesario, solo se encarga de cambiar el estado
  entityName: string; // Añadimos esta propiedad para mostrar el nombre del tipo de entidad esto es para que el usuario sepa que está cambiando de estado, entonces entityName es un string que representa el nombre de la entidad, la entidad puede ser un paciente, un médico, una cita, etc. 
}

// StateSwitch es un componente funcional que recibe las propiedades checked, onChange y entityName y devuelve un Switch de Material-UI que al cambiar de estado muestra un diálogo de confirmación para que el usuario confirme el cambio de estado. El diálogo muestra el nombre de la entidad que se está cambiando de estado.

const StateSwitch: React.FC<StateSwitchProps> = ({ checked, onChange, entityName }) => {
  const [dialogOpen, setDialogOpen] = useState(false); // dialogOpen es un estado que indica si el diálogo está abierto o no
  const [temporaryState, setTemporaryState] = useState(checked); // temporaryState es un estado que indica el estado temporal del Switch, es decir, el estado que se muestra en el Switch antes de confirmar el cambio

  // handleSwitchChange es una función que se llama cuando se cambia el estado del Switch, cambia el estado de dialogOpen a true para abrir el diálogo, se encarga de abrir el diálogo. se podria llamar handleOpenDialog 
  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  // handleConfirmChange es una función que se llama cuando se confirma el cambio de estado, cambia el estado de dialogOpen a false para cerrar el diálogo y llama a la función onChange con el estado temporal, se encarga de confirmar el cambio de estado
  const handleConfirmChange = () => {
    setDialogOpen(false);
    onChange(temporaryState);
  };

  // handleCancelChange es una función que se llama cuando se cancela el cambio de estado, cambia el estado de dialogOpen a false para cerrar el diálogo y cambia el estado temporal al estado anterior, se encarga de cancelar el cambio de estado
  const handleCancelChange = () => {
    setDialogOpen(false);
    setTemporaryState(checked); // Revertir al estado anterior si se cancela
  };

  return (
    <>
      <Switch
        checked={temporaryState} // Esto sirve para que el switch cambie de estado temporalmente
        onChange={() => {
          setTemporaryState(!temporaryState); // Cambia el estado temporalmente  
          handleOpenDialog(); // Abre el diálogo
        }}
        color="primary"
      />
      <Dialog open={dialogOpen} onClose={handleCancelChange}>
        <DialogTitle>Confirmar Cambio de Estado</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Estás seguro que deseas cambiar el estado {entityName}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={handleCancelChange}
            variant="contained" 
            sx={{ 
              width: '7rem',
              backgroundColor: '#299B93', // Set the background color to #299B93
              '&:hover': {
                backgroundColor: '#258A84', // Slightly darker shade on hover
              },
            }} >
            Cancelar
          </Button>
          <Button 
            onClick={handleConfirmChange}
            variant="contained" 
            sx={{ 
              width: '7rem',
              backgroundColor: '#299B93', // Set the background color to #299B93
              '&:hover': {
                backgroundColor: '#258A84', // Slightly darker shade on hover
              },
            }} >
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default StateSwitch;
