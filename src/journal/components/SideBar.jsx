import { useSelector } from "react-redux";
import { Box, Divider, Drawer, Toolbar, Typography, List } from "@mui/material";
import { NoteList } from "./NoteList";

export const SideBar = ({ drawerWidth }) => {

    const { displayName } = useSelector(state => state.auth);
    const { notes } = useSelector(state => state.journal);

    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant='permanent'
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}>

                <Toolbar>
                    <Typography variant='h6' noWrap component='div'>
                        {displayName}
                    </Typography>
                </Toolbar>
                <Divider />

                <List>
                    {
                        notes?.map(note => (
                            <NoteList key={note.id} {...note} />
                        ))
                    }
                </List>

            </Drawer>

        </Box>
    )
}
