import { useDispatch } from "react-redux";
import { useMemo } from "react";
import { TurnedInNot } from "@mui/icons-material";
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Grid } from "@mui/material"
import { setActiveNote } from "../../store/journal";


export const NoteList = ({ id, title, body, date, imageUrls = [] }) => {

    const dispatch = useDispatch();

    const newTitle = useMemo(() => {
        return title.length > 17
            ? title.substring(0, 17) + '...'
            : title
    }, [title]);

    const onClickNote = () => {
        dispatch(setActiveNote({id, title, body, date, imageUrls }))
    }

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={onClickNote} >
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={newTitle} />
                    <ListItemText secondary={body} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
