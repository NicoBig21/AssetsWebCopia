import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import PersonIcon from '@mui/icons-material/Person';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SearchIcon from '@mui/icons-material/Search';
import WorkIcon from '@mui/icons-material/Work';
import { Backdrop } from "@mui/material";
import { useState } from "react";

const actions = [
    { icon: <PersonIcon />, name: 'Paciente' },
    { icon: <WorkIcon />, name: 'Profesional' },
    { icon: <AssignmentIcon />, name: 'Pedido' },
  ];

export default function SpeedDialTooltipOpen({ children, hidden = true }: { children: any, hidden?: boolean }) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <Box sx={{ 
      display: "grid",
      minHeight: "118%",
      // gridTemplateRows: "2fr 0.1fr",
      transform: "translateZ(0px)", 
      // flexGrow: 1 
    }}>

      {children}

      <Box sx={{ position: "relative" }}>
        <Backdrop open={open} sx={{ margin: '-32px' }} />
        <SpeedDial
          ariaLabel="SpeedDial tooltip example"
          sx={{ position: "absolute", bottom: 16, right: 16 }}
          icon={<SearchIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          hidden={hidden}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              tooltipOpen
              onClick={handleClose}
            />
          ))}
        </SpeedDial>
      </Box>
    </Box>
  );
}
