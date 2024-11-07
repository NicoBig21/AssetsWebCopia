import { useReducer, ReactNode, useContext } from 'react';
import { authReducer } from './authReducer';
import { AuthContext } from './AuthContext';
import { AuthAction, AuthContextProps, AuthState, AuthTypes } from '../interface/auth-state.interface';
import { LoginClient } from '../../../common/interface/auth.interface';

// TODO: tipado

const init = (): AuthState => {
    const token = JSON.parse(localStorage.getItem('auth-token') || 'null');
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    return {
        logged: !!token,
        token,
        user
    };
};

export const AuthProvider = ({ children }: {children: ReactNode}): JSX.Element => {

    // Todo lo que definamos aca va a ser de caracter "global" para toda la app, "children" es la app

    const [state, dispatch] = useReducer(authReducer, {} as AuthState, init);

    const login = (response: LoginClient) => {

        console.log('response', response);  
        const { LoginClient } = response;

        // console.log('loginClient', loginClient);

        const { user, token } = LoginClient;

        // console.log('user', user);
        // console.log('token', token);

        const action: AuthAction = { 
            type: AuthTypes.login, 
            payload: user
        };

        localStorage.setItem('auth-token', JSON.stringify(token));
        localStorage.setItem('user', JSON.stringify(user));

        dispatch(action);
    };

    const logout = () => {

        const action: AuthAction = { 
            type: AuthTypes.logout,
            payload: null
        };

        localStorage.removeItem('auth-token');
        localStorage.removeItem('user');

        dispatch(action);
    };

    return (
        <AuthContext.Provider value={{ ...state, login, logout }}>
        {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = (): AuthContextProps => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("AuthContext is not provided");
    return context;
};