import { Logout, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import { startLogout } from "../../store/auth";


export const NavBar = ({ drawerWidth }) => {

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(startLogout());
    }

    return (
        <AppBar
            position="fixed"
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` }
            }}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    edge="start"
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuOutlined />
                </IconButton>

                <Grid container direction="row" justifyContent="space-between" >

                    <Typography variant="h6" noWrap  >JournalApp</Typography>

                    <IconButton
                        onClick={onLogout}
                        color="inherit">
                        <Logout />
                    </IconButton>
                </Grid>
            </Toolbar>

        </AppBar>
    )
}
