import { Home, Assignment, Feedback, Business, HealthAndSafety, Person, LocalHospital, Description, Email, Chat } from '@mui/icons-material';

export const iconKeys = [
    'Inicio', 
    'Pedidos', 
    'Reclamos', 
    'Empresa', 
    'Prestaciones', 
    'Profesionales', 
    'Pacientes', 
    'Liquidacion', 
    'Resumen', 
    'E-mail', 
    'Chat',
] as const;

type IconKey = typeof iconKeys[number];

export const IconSidebar: Record<IconKey, JSX.Element> = {
    'Inicio': <Home />,
    'Pedidos': <Assignment />,
    'Reclamos': <Feedback />,
    'Empresa': <Business />,
    'Prestaciones': <HealthAndSafety />,
    'Profesionales': <Person />,
    'Pacientes': <LocalHospital />,
    'Liquidacion': <Description />,
    'Resumen': <Description />,
    'E-mail': <Email />,
    'Chat': <Chat />,
};