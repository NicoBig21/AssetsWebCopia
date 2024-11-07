import { createContext } from 'react';
import { AuthContextProps } from '../interface/auth-state.interface';

// TODO: tipado

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);
