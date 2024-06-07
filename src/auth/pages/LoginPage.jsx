import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks";
import { startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth";

const formData = {
    email: '',
    password: ''
}

export const LoginPage = () => {
    const { status, errorMessage } = useSelector(state => state.auth);

    const dispatch = useDispatch();
    const { onInputChange, email, password, formState } = useForm(formData);

    const isAuthenticated = useMemo(() => status === 'checking', [status])

    const onSubmit = (e) => {
        e.preventDefault();

        console.log(formState);
        dispatch(startLoginWithEmailPassword(formState));
    }

    const onGoogleSignIn = () => {
        dispatch(startGoogleSignIn());
    }

    return (

        <AuthLayout title='Iniciar Sesión'>
            <form
                aria-label="login-form"
                onSubmit={onSubmit}
                className='animate__animated animate__fadeIn animate__faster'>
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }} >
                        <TextField
                            label="email"
                            name="email"
                            type="email"
                            placeholder="raul.s@gmail.com"
                            value={email}
                            onChange={onInputChange}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }} >
                        <TextField
                            label="password"
                            name="password"
                            type="password"
                            inputProps={{
                                'data-testid': 'password'
                            }}
                            value={password}
                            onChange={onInputChange}
                            fullWidth
                        />
                    </Grid>
                </Grid>

                <Grid container
                    display={!!errorMessage ? '' : 'none'}
                    sx={{ mt: 1 }}>
                    <Grid item
                        xs={12}
                    >
                        <Alert severity="error">{errorMessage}</Alert>
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ my: 2 }}>
                    <Grid item xs={12} sm={6}>
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            disabled={isAuthenticated}>
                            Iniciar sesion
                        </Button>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Button
                            id="google-btn"
                            onClick={onGoogleSignIn}
                            variant="contained"
                            fullWidth
                            aria-label="google-btn"
                            disabled={isAuthenticated}>
                            <Google />
                            <Typography sx={{ ml: 1 }}>Google</Typography>
                        </Button>
                    </Grid>


                </Grid>
                <Grid container direction='row' justifyContent='end'>
                    <Link component={RouterLink} color='inherit' to='/auth/register'>
                        Crear una cuenta
                    </Link>
                </Grid>
            </form>
        </AuthLayout>
    )
}
