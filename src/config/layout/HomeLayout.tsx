import { Box, Toolbar, useTheme, useMediaQuery } from "@mui/material";
import { ReactNode, useState } from "react";
import { Navbar, Sidebar } from "../../app/common/components"

interface HomeLayoutProps {
    children: ReactNode;
}

const drawerWidth = 240;

export const HomeLayout = ({ children }: HomeLayoutProps) => {
    const [openSidebar, setOpenSidebar] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleToggleSidebar = () => {
        setOpenSidebar(!openSidebar);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <Navbar handleOpenSidebar={handleToggleSidebar} />
            <Sidebar drawerWidth={drawerWidth} toggleOpen={handleToggleSidebar} isOpen={openSidebar} />
            <Box
                component='main'
                sx={{ 
                    flexGrow: 1, 
                    p: isMobile ? 0 : 3,
                }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
};
