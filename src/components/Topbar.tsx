import React from "react";
import { AppBar, Toolbar, Grid, Typography, Button, makeStyles, Theme } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "src/redux/rootReducer";
import authActions from "src/redux/auth/actions";

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        padding: theme.spacing(1, 2)
    },
    nameContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    name: {
        marginRight: 20
    }
}));

function Topbar() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.auth.user);
    const logout = () => dispatch(authActions.logout());

    return (
        <AppBar color="primary" elevation={0}>
            <Toolbar disableGutters>
                <Grid container alignItems="center" justify="flex-end" className={classes.container}>
                        <Typography variant="h6" className={classes.name}> Welcome, {user.name} </Typography>
                        <Button
                            variant="contained"
                            color="secondary"
                            disableElevation
                            onClick={logout}
                        >
                            LOGOUT
                    </Button>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Topbar;