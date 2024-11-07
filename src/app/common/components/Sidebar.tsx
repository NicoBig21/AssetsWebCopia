import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Box,
    Divider,
    Drawer,
    Grid,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
    List,
    ListItemButton,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material';

import { ExpandMore } from '@mui/icons-material';
import { iconKeys, IconSidebar } from '../../../config/theme/icon.mui';
import logo from '../../../../public/assets/logo.png';

//TODO: TIPADO

interface SidebarProps {
    isOpen: boolean;
    toggleOpen: () => void;
    drawerWidth?: number;
}

export default function Sidebar({
    isOpen,
    toggleOpen,
    drawerWidth = 240
}: SidebarProps) {
    const location = useLocation();
    const [expanded, setExpanded] = useState<string | null>(null);

    const handleAccordionChange = (panel: string) => (_event: any, _isExpanded: any) => {
        setExpanded(_isExpanded ? panel : null);
    };

    const drawerContent = (
        <div>
            <Toolbar>
                <img src={logo} alt="logo" style={{ width: '75px', marginRight: '10px' }} />
                <Typography variant='h6' noWrap>
                    Assets
                </Typography>
            </Toolbar>
            <Divider />
            <List>
                <ListItem disablePadding sx={{ mt: 0.5 }}>
                    <ListItemButton
                        component={Link}
                        to="/inicio"
                        selected={location.pathname === '/inicio'}
                        sx={{
                            backgroundColor: location.pathname === '/inicio' ? 'gray' : 'transparent',
                            '&:hover': { backgroundColor: 'lightgray' }
                        }}
                    >
                        <ListItemIcon>
                            {IconSidebar['Inicio']}
                        </ListItemIcon>
                        <Grid container>
                            <ListItemText primary="Inicio" primaryTypographyProps={{ fontSize: '1.2em' }} />
                        </Grid>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ mt: 0.5 }}>
                    <Accordion
                        expanded={expanded === 'pedidos'}
                        onChange={handleAccordionChange('pedidos')}
                        sx={{ width: '100%', boxShadow: 'none' }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <ListItemIcon sx={{ display: 'flex', alignItems: 'center' }}>
                                {IconSidebar['Pedidos']}
                            </ListItemIcon>
                            <Grid container>
                                <ListItemText primary="Pedidos" primaryTypographyProps={{ fontSize: '1.2em' }} />
                            </Grid>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List disablePadding>
                                <ListItem disablePadding>
                                    <ListItemButton
                                        component={Link}
                                        to="/pedidos/recibidos"
                                        selected={location.pathname === '/pedidos/recibidos'}
                                        sx={{
                                            '&:hover': { backgroundColor: 'lightgray' },
                                        }}
                                    >
                                        <ListItemText primary="Recibidos" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton
                                        component={Link}
                                        to="/pedidos/opcion2"
                                        selected={location.pathname === '/pedidos/opcion2'}
                                        sx={{
                                            '&:hover': { backgroundColor: 'lightgray' },
                                        }}
                                    >
                                        <ListItemText primary="Faltantes" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>
                </ListItem>
                {iconKeys.slice(2).map(text => (
                    <ListItem key={text} disablePadding sx={{ mt: 0.5 }}>
                        <ListItemButton
                            component={Link}
                            to={`/${text.toLowerCase()}`}
                            selected={location.pathname === `/${text.toLowerCase()}`}
                            sx={{
                                backgroundColor: location.pathname === `/${text.toLowerCase()}` ? 'gray' : 'transparent',
                                '&:hover': { backgroundColor: 'lightgray' }
                            }}
                        >
                            <ListItemIcon>
                                {IconSidebar[text]}
                            </ListItemIcon>
                            <Grid container>
                                <ListItemText primary={text} primaryTypographyProps={{ fontSize: '1.2em' }} />
                            </Grid>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Grid sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch' }}>
                <Typography
                    color="#e0e0e0"
                    sx={{
                        color: '#c9c9c7',
                        position: 'absolute',
                        bottom: 16,
                        left: 16,
                    }}
                >
                    © NJI - V 1.0.1
                </Typography>
            </Grid>
        </div>
    );

    return (
        <Box sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
            <Drawer
                variant="temporary"
                open={isOpen}
                onClose={toggleOpen}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '60%' }
                }}
            >
                {drawerContent}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
                open
            >
                {drawerContent}
            </Drawer>
        </Box>
    );
}
