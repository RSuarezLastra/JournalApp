import { Link as RouterLink } from "react-router-dom"
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"

export const RegisterPage = () => {
    return (

        <AuthLayout title='Crear cuenta'>
            <form>
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }} >
                        <TextField
                            label="Nombre Completo"
                            type="email"
                            placeholder="Nombre Completo"
                            fullWidth
                        />
                    </Grid>
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
                    <Grid item xs={12} >
                        <Button
                            variant="contained"
                            fullWidth>
                            Crear cuenta
                        </Button>
                    </Grid>


                </Grid>
                <Grid container direction='row' justifyContent='end'>
                    <Typography sx={{ mr: 1 }} >¿Ya tienes una cuenta?</Typography>
                    <Link component={RouterLink} color='inherit' to='/auth/login'>
                        Ingresar
                    </Link>
                </Grid>
            </form>
        </AuthLayout>
    )
}
