import { useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks";
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth";


export const LoginPage = () => {
    
    const dispatch = useDispatch();
    const { onInputChange, email, password, formState } = useForm({
        email: '',
        password: ''
    });

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(checkingAuthentication());
    }

    const onGoogleSignIn = () => {
        console.log('on google signin');
        dispatch(startGoogleSignIn());
    }

    return (

        <AuthLayout title='Iniciar Sesión'>
            <form onSubmit={onSubmit}>
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
                            value={password}
                            onChange={onInputChange}
                            fullWidth
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ my: 2 }}>
                    <Grid item xs={12} sm={6}>
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth>
                            Iniciar sesion
                        </Button>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Button
                            onClick={onGoogleSignIn}
                            variant="contained"
                            fullWidth>
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
