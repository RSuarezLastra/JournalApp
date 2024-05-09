import { singInWithGoogle, registerUserWithEmailPassword, loginWithEmailPassword } from "../../firebase/providers";
import { checkingCredentials, logout, login } from "./"

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    }
}
export const startGoogleSignIn = () => {
    return async (dispatch) => {

        dispatch(checkingCredentials());

        const result = await singInWithGoogle();

        if (!result.ok) return dispatch(logout(result))

        dispatch(login(result))
    }
}

export const startRegisteringUser = ({ email, password, displayName }) => {
    return async (dispatch) => {

        dispatch(checkingCredentials());

        const result = await registerUserWithEmailPassword({ email, password, displayName })

        if (!result.ok) return dispatch(logout(result));

        dispatch(login(result));

    }
}

export const startLoginWithEmailPassword = ({email, password}) => {
    return async (dispatch) => {

        dispatch(checkingCredentials())

        const result = await loginWithEmailPassword({email, password})

        if (!result.ok) return dispatch(logout(result))

        dispatch(login(result))
    }
}