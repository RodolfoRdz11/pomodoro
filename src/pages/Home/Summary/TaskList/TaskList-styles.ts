import { makeStyles, Theme } from "@material-ui/core";

export default makeStyles((theme: Theme) => ({
    flexEnd: {
        padding: theme.spacing(1,2),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
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
    }
}))