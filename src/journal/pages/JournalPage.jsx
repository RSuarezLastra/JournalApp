import { JournalLayout } from "../layout/JournalLayout"
import { IconButton, Typography } from "@mui/material"
import { NothingSelectedView, NoteView } from "../views"
import { AddOutlined } from "@mui/icons-material"

export const JournalPage = () => {
    return (
        <JournalLayout>

            {/* <NoteView/> */}
            <NothingSelectedView />

            <IconButton
                size='large'
                sx={{
                    color: 'white',
                    position: 'fixed',
                    backgroundColor: 'error.main',
                    ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
                    right: 50,
                    bottom: 50
                }}>
                <AddOutlined sx={{ fontSize: 30}} />

            </IconButton>

        </JournalLayout>
    )
}
