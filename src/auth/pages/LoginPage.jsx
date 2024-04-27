import { Link as RouterLink } from "react-router-dom"
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"


export const LoginPage = () => {
    return (

        <AuthLayout title='Iniciar Sesión'>
            <form>
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }} >
                        <TextField
                            label="email"
                            type="email"
                            placeholder="raul.s@gmail.com"
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }} >
                        <TextField
                            label="password"
                            type="password"
                            fullWidth
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ my: 2 }}>
                    <Grid item xs={12} sm={6}>
                        <Button
                            variant="contained"
                            fullWidth>
                            Iniciar sesion
                        </Button>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Button
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
