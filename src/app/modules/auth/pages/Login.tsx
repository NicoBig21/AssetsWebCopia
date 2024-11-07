import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context';

/* services */
import { useAuthLogin } from '../../../../services/auth/custom-hooks';

// Material UI
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import backgroundImage from '../../../../../public/assets/backgroundImage.jpg'

export const Login = () => {
    const { login } = useAuthContext();
    const navigate = useNavigate();
    const [email, setEmail] = useState('miguel_acosta@gmail.com');
    const [password, setPassword] = useState('Asd12345@_');
  
    const [Login, {data}] = useAuthLogin() 

    const onLogin = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        Login({variables: {
            loginClientInput: { email, password }
        }})
       
    };

    useEffect(() => {
        
        if (!data) return 

        login(data);

        navigate('/', { replace: true });

    }, [data])

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#000000',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
            sx={{
                my: 31,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <Avatar sx={{ m: 1, bgcolor: '#787678' }}></Avatar>
            <Typography component="h1" variant="h5">
                Iniciar Sesión
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={onLogin}>
                <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Usuario"
                name="username"
                autoComplete="username"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                margin="normal"
                required
                fullWidth
                label="Contraseña"
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <FormControlLabel
                control={<Checkbox value="remember" style={{ color: '#1bedc9' }} />}
                label="Recuérdame"
                />
                <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: '#1bedc9', '&:hover': { bgcolor: '#1bedc1' } }}
                type="submit"
                >
                Iniciar Sesión
                </Button>
                <Grid container>
                <Grid item xs>
                    <Link href="#" variant="body2">
                    ¿Olvidaste tu contraseña?
                    </Link>
                </Grid>
                <Grid item>
                    <Link href="./register" variant="body2">
                    {"¿No tienes cuenta? Regístrate"}
                    </Link>
                </Grid>
                </Grid>
            </Box>
            </Box>
        </Grid>
        </Grid>
    );
};