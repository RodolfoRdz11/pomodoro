import { makeStyles, Theme } from "@material-ui/core";

export default makeStyles((theme: Theme) => ({
    item: {
        padding: theme.spacing(1,2)
    },
    flexEnd: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        padding: theme.spacing(1,2),
        flexDirection: 'column'
    }
}))