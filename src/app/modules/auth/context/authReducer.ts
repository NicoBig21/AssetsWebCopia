import { AuthAction, AuthState, AuthTypes } from "../interface/auth-state.interface";

// TODO: tipado

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        
        case AuthTypes.login:
            return {
                ...state,
                logged: true, // Cambia de `iniciar` a `logged`
                user: action.payload
            };

        case AuthTypes.logout:
            return {
                token: null,
                logged: false,
                user: null // Asegúrate de eliminar el usuario al cerrar sesión
            };

        default:
            return state;
    }
}