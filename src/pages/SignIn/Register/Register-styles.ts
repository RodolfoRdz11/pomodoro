import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(6, 2),
        background: '#008ae6'
    },
    card: {
        width: theme.breakpoints.values.sm,
        maxWidth: '100%',
        overflow: 'visible',
        position: 'relative',
    },
    content: {
        padding: theme.spacing(3, 4)
    },
    loginForm: {
        marginTop: theme.spacing(3)
    },
    divider: {
        margin: theme.spacing(2, 0)
    },
    fields: {
        margin: theme.spacing(-1),
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            flexGrow: 1,
            margin: theme.spacing(1)
        }
    },
    submitButton: {
        marginTop: theme.spacing(2),
        width: '100%'
    },
    title: {
        textAlign: 'center',
        fontWeight: 500,
        fontSize: '2.5em',
        paddingTop: 20
    },
    errorText: {
        color: theme.palette.error.main
    }
}));