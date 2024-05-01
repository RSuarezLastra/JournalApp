import { Link as RouterLink } from "react-router-dom"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks";
import { useState } from "react";

const formData = {
    email: '',
    password: '',
    displayName: ''
}

const formValidations = {
    email: [(value) => value.includes('@'), 'El correo debe tener una @'],
    password: [(value) => value.length >= 6, 'La contraseña debe tener mas de 6 caracteres'],
    displayName: [(value) => value.length >= 1, 'El nombre es Obligatorio'],
}

export const RegisterPage = () => {
    
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const { onInputChange, email, password, displayName, formState,
        emailValid, displayNameValid, passwordValid, isFormValid} = useForm(formData, formValidations);
    

    const onSubmit = (e) => {
        e.preventDefault();
        
        setIsFormSubmitted(true);
        if(!isFormValid) return;
    }

    return (

        <AuthLayout title='Crear cuenta'>
            <form onSubmit={onSubmit}>
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }} >
                        <TextField
                            label="Nombre Completo"
                            type="displayName"
                            name="displayName"
                            value={displayName}
                            onChange={onInputChange}
                            placeholder="Nombre Completo"
                            error={!!displayNameValid && isFormSubmitted}
                            helperText={displayNameValid }
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }} >
                        <TextField
                            label="email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={onInputChange}
                            placeholder="raul.s@gmail.com"
                            error={!!emailValid && isFormSubmitted}
                            helperText={emailValid}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }} >
                        <TextField
                            label="password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={onInputChange}
                            error={!!passwordValid && isFormSubmitted}
                            helperText={passwordValid}
                            fullWidth
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ my: 2 }}>
                    <Grid item xs={12} >
                        <Button
                            type="submit"
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
