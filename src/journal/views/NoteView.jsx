import { Grid, Typography, Button, TextField } from "@mui/material"
import { SaveOutlined } from "@mui/icons-material"
import { ImageGallery } from "../components"

export const NoteView = () => {
    return (
        <Grid container
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            sx={{ mb: 1 }}
        >
            <Grid item>
                <Typography fontSize={24} fontWeight='light'> 27 de abril, 2024</Typography>
            </Grid>
            <Grid item>
                <Button sx={{ p: 1 }}>
                    <SaveOutlined sx={{ fontSize: 25, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>

            <Grid container sx={{ mt: 2 }}>
                <TextField
                    variant='standard'
                    type='text'
                    name='title'
                    placeholder='Título'
                    fullWidth
                    sx={{mb: 2}}
                />
                <TextField
                    variant='standard'
                    type='text'
                    multiline
                    name='note'
                    placeholder='Que sucedio hoy?'
                    fullWidth
                    InputProps={{  disableUnderline: true }}
                />
            </Grid>
            
            <ImageGallery/>
        </Grid>
    )
}
