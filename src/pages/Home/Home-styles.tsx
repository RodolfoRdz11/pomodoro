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
    tabFont:  {
        fontWeight: theme.typography.fontWeightBold,
        fontSize: 14
    },
    spaceBetween: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
}));