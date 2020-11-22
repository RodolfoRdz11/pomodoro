import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) => ({
    container: {
        paddingTop: theme.spacing(4),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    paper: {
        padding: theme.spacing(2,4),
        width: '40%',
        [theme.breakpoints.down("sm")]: {
            width: '100%',
            padding: theme.spacing(1)
        }
    },
    timerText: {
        fontSize: '4em',
        fontWeight: 550,
        color: '#999999',
        textAlign: 'center'
    },
    actionsContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    actionButton: {
        '&:hover span': {
            color: theme.palette.primary.main,
            transform: 'scale(1.2)',
            transition: '.5s'
        }
    },
    actionIcon:  {
        fontSize: '3em',      
    },
    chip: {
        fontWeight: 'bolder',
        [theme.breakpoints.down("sm")]: {
            fontSize: '.8em'
        }
    },
    activeChip: {
        fontWeight: 'bolder',
        background: theme.palette.success.main,
        color: '#fff',
        [theme.breakpoints.down("sm")]: {
            fontSize: '.8em'
        }
    },
    flexEnd: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    taskContainer: {
        marginTop: 20,
        width: '40%',
        [theme.breakpoints.down("sm")]: {
            width: '100%'
        }
    },
    spaceBetween: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: theme.spacing(2)
    }
}));