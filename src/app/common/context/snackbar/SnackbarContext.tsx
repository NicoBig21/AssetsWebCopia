import { createContext } from 'react';
import { SnackbarContextProps } from '../../interface/snackbar.interface';

// TODO: tipado

export const SnackbarContext = createContext<SnackbarContextProps | null>(null);