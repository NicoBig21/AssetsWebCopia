import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link } from 'react-router-dom';
import { MenuProps } from '@mui/material/Menu';

type UserConnectedProps = {
  anchorEl: MenuProps['anchorEl'];
  onLogout: () => void;
  handleMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleClose: () => void;
};

export default function UserConnected({ anchorEl, onLogout, handleMenu, handleClose }: UserConnectedProps) {
  return (
    <div>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle style={{ color: '#fff', fontSize: 31 }} />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>Perfil</Link>
        </MenuItem>
        <MenuItem onClick={() => { handleClose(); onLogout(); }}>
          Cerrar Sesión
        </MenuItem>
      </Menu>
    </div>
  );
}

/* VER */