import { useMemo, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks";
import { Grid, Typography, Button, TextField, IconButton } from "@mui/material"
import { SaveOutlined, UploadFile } from "@mui/icons-material"
import { ImageGallery } from "../components"
import { setActiveNote, startSaveNote, startUploadingFiles } from "../../store/journal";
import Swal from "sweetalert2";

export const NoteView = () => {

    const dispatch = useDispatch();

    const { active: note, messageSaved, isSaving } = useSelector(state => state.journal);

    const { body, title, date, onInputChange, formState } = useForm(note);

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toLocaleDateString('es')
    }, [date]);

    const fileInputRef = useRef();

    useEffect(() => {
        dispatch(setActiveNote(formState))
    }, [formState]);

    useEffect(() => {
        if (messageSaved.length > 0) {
            Swal.fire('Nota actualizada', messageSaved, 'success')
        }
    }, [messageSaved]);

    const onSaveNote = () => {
        dispatch(startSaveNote());
    }

    const onInputFileChange = ({ target }) => {
        if (target.files === 0) return;

        dispatch(startUploadingFiles(target.files));
    }

    return (
        <Grid container
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            sx={{ mb: 1 }}
            className='animate__animated animate__fadeIn animate__faster'
        >
            <Grid item>
                <Typography fontSize={24} fontWeight='light'>{dateString}</Typography>
            </Grid>

            <Grid item>

                <input
                    type="file"
                    multiple
                    ref={fileInputRef}
                    onChange={onInputFileChange}
                    style={{ display: 'none' }}
                />

                <IconButton
                    color="primary"
                    disabled={isSaving}
                    onClick={() => fileInputRef.current.click()}
                >
                    <UploadFile />
                </IconButton>

                <Button
                    onClick={onSaveNote}
                    disabled={isSaving}
                    sx={{ p: 1 }}>
                    <SaveOutlined sx={{ fontSize: 25, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>

            <Grid container sx={{ mt: 2 }}>
                <TextField
                    onChange={onInputChange}
                    variant='standard'
                    type='text'
                    name='title'
                    value={title}
                    placeholder='Título'
                    fullWidth
                    sx={{ mb: 2 }}
                />
                <TextField
                    onChange={onInputChange}
                    variant='standard'
                    type='text'
                    multiline
                    name='body'
                    value={body}
                    placeholder='Que sucedio hoy?'
                    fullWidth
                    InputProps={{ disableUnderline: true }}
                />
            </Grid>

            <ImageGallery />
        </Grid>
    )
}
