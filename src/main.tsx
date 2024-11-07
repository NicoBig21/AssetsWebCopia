import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { JournalApp } from './JournalApp.tsx';

// Providers
import { AuthProvider } from './app/modules/auth/context';
import { SnackbarProvider } from './app/common/context/snackbar';

// Material UI
import './styles.css';
import theme from './config/theme/theme.mui.ts';
import { ThemeProvider } from '@mui/material/styles';

// Apollo
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({ uri: import.meta.env.VITE_API_REST_URL });

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('auth-token');
    const tokenWithoutQuotes = token?.replace(/"/g, ''); // Elimina las comillas
    const bearerToken = `Bearer ${tokenWithoutQuotes}`;

    return {
        headers: {
            ...headers,
            authorization: token ? bearerToken : '',
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    connectToDevTools: true,
    cache: new InMemoryCache(),
});

createRoot(document.getElementById('root')!).render(
    <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
        <AuthProvider>
        <BrowserRouter>
            <SnackbarProvider>
            <JournalApp />
            </SnackbarProvider>
        </BrowserRouter>
        </AuthProvider>
    </ThemeProvider>
    </ApolloProvider>
);