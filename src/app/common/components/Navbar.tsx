import { useNavigate } from "react-router-dom";
import { MouseEvent, useState } from "react";
import { useAuthContext } from "../../modules/auth/context";

// Mui
import { MenuOutlined, NotificationsOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Box, Badge, Menu, Typography } from "@mui/material";
import NotificationBox from "./NotificationBox";
import UserConnected from "./UserConnected";


//TODO TIPADO
type NavbarProps = {
    handleOpenSidebar: () => void;
};

const drawerWidth = 240; // Definir el ancho del Drawer

export default function Navbar({ handleOpenSidebar }: NavbarProps): JSX.Element {

    const { user, logout } = useAuthContext()

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [notificationsAnchorEl, setNotificationsAnchorEl] = useState<HTMLButtonElement | null>(null);
    const navigate = useNavigate();

    const handleMenu = (e: MouseEvent<HTMLElement>) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const onLogout = () => {
        logout();
        navigate("/auth/login"); 
    };

    const handleNotificationsMenu = (e: MouseEvent<HTMLButtonElement>) => {
        setNotificationsAnchorEl(e.currentTarget);
    };

    const handleNotificationsClose = () => {
        setNotificationsAnchorEl(null);
    };

    return (

        <AppBar 
            position="fixed"
            sx={{ 
                width: { sm: `calc(100% - ${drawerWidth}px)`},  
                ml: { sm: `${drawerWidth}px` },                 
                backgroundColor: (theme) => theme.palette.primary.main,
            }}
        >
            <Toolbar>
                <Grid container justifyContent='space-between' alignItems='center'> 
                    <Grid item>
                        <IconButton
                        color='inherit'
                        edge="start"
                        sx={{ mr: 2, display: { sm: 'none' } }}
                        onClick={handleOpenSidebar}
                    >
                        <MenuOutlined /> 
                        </IconButton>
                    </Grid>
                    <Grid item sx={{ flexGrow: 1 }} />
                    <Grid item>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Badge color="error" variant="dot" sx={{ mr: 2 }}>
                                <IconButton 
                                    color='inherit' 
                                    onClick={handleNotificationsMenu}
                                >
                                <NotificationsOutlined />
                                </IconButton>
                            </Badge>
                            <Menu
                                anchorEl={notificationsAnchorEl}
                                open={Boolean(notificationsAnchorEl)}
                                onClose={handleNotificationsClose}
                            >
                                <NotificationBox icon="1" />
                            </Menu>
                            <Typography 
                                variant="h6" 
                                sx={{ display: { xs: 'none', sm: 'block' } }} 
                            >
                                {user?.email}
                            </Typography>
                            <UserConnected
                                anchorEl={anchorEl}
                                handleMenu={handleMenu}
                                handleClose={handleClose}
                                onLogout={onLogout}
                            />
                        </Box>
                    </Grid>
                </Grid> 
            </Toolbar>
        </AppBar>
    );
};
