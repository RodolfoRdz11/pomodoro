import { makeStyles, Theme } from "@material-ui/core";

export default makeStyles((theme: Theme) => ({
    spaceBetween: {
        padding: theme.spacing(1,2),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            alignItems: 'flex-start',
            flexDirection: 'column'
        }
    },
    item: {
        margin: theme.spacing(1,2),
    },
    container: {
        height: 'calc(100%  - 200px)'
    },
    title: {
        fontWeight: 550,
        color: '#b3b3b3',
        textAlign: 'center'
    },
    text: {
        fontWeight: 500,
        color: '#999',
        fontSize: 14
    }
}))