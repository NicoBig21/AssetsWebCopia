import React, { useState, useContext, useCallback, ReactNode } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { SnackbarContext } from './SnackbarContext';
import { SnackbarContextProps, SnackbarSeverity } from '../../interface/snackbar.interface';

// TODO: tipado

interface SnackbarState {
    open: boolean;
    message: string;
    severity: SnackbarSeverity;
}

export const SnackbarProvider = ({ children }: {children: ReactNode}): JSX.Element => {

    // Para controlar el estado del snackbar
    const [snackbar, setSnackbar] = useState<SnackbarState>({
        open: false,
        message: '',
        severity: 'error',
    });

    // Función para mostrar el snackbar
    const showSnackbar = useCallback((message: string, severity: SnackbarSeverity = 'error') => {
        setSnackbar({ open: true, message, severity });
    }, []);

    // Función para cerrar el snackbar
    const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason !== 'clickaway') setSnackbar((prev) => ({ ...prev, open: false }));
    };

    return (
        <SnackbarContext.Provider value={{ showSnackbar }}>
        {children}
        <Snackbar
            open={snackbar.open}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
            <Alert onClose={handleClose} severity={snackbar.severity} sx={{ width: '100%' }}>
            {snackbar.message}
            </Alert>
        </Snackbar>
        </SnackbarContext.Provider>
    );
};

export const useSnackbar = (): SnackbarContextProps => {
    const context = useContext(SnackbarContext);
    if (!context)  throw new Error('useSnackbar must be used within a SnackbarProvider');
    return context;
};
