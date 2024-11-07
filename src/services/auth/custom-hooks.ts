import { useMutation, MutationTuple } from "@apollo/client";
import AuthMutations from "./auth-mutations";
import { LoginClient, LoginClientInput } from "../../app/common/interface/auth.interface";
import { useSnackbar } from '../../app/common/context/snackbar';

// Tipar el retorno de authLogin
export const useAuthLogin = (): MutationTuple<LoginClient, LoginClientInput> => {
    const {showSnackbar} = useSnackbar();
    
    return useMutation<LoginClient, LoginClientInput>(AuthMutations.LOGIN, {
        onError: ({message}) => showSnackbar(message, 'error')
    });
}