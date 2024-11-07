import { LoginClient, User } from "../../../common/interface/auth.interface";

export interface AuthState {
    logged: boolean;
    token: string | null;
    user: User | null; 
}

export interface AuthContextProps extends AuthState {
    login: (response: LoginClient) => void;
    logout: () => void;
}

export type AuthAction = 
    | { type: string, payload: User } 
    | { type: string, payload: null }

export const AuthTypes = {
    login: '[Auth] Iniciar sesion',
    logout: '[Auth] Cerrar sesion',
}