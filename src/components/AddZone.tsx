import React from 'react';
import { Grid, makeStyles, Theme } from "@material-ui/core";
import AddCircle from '@material-ui/icons/AddCircle';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) => ({
    active: {
        width: '40%',
        backgroundColor: '#eee',
        border: '2px #999 dashed',
        transition: 'all 0.3s',
        cursor: 'pointer',
        height: 100,
        marginTop: 20,
        '&:hover': {
            border: '2.5px #333 dashed',
            '& svg': {
                color: '#333',
            },
            '& span': {
                color: '#333',
            },
        },
        [theme.breakpoints.down('md')]: {
            width: '100%'
        }
    },
    disabled: {
        width: '40%',
        backgroundColor: '#f2f2f2',
        border: '2px #bfbfbf dashed',
        transition: 'all 0.3s',
        cursor: 'pointer',
        height: 100,
        marginTop: 20,
        [theme.breakpoints.down('md')]: {
            width: '100%'
        }
    },
    hoverColor: {
        color: '#999',
        transition: 'all 0.3s',
    },
}));

interface Props {
    onClick: () => void;
    text: string;
    disabled: boolean;
}

function AddZone({ text, onClick, disabled }: Props) {
    const classes = useStyles();

    return (
        <Grid
            onClick={() => {
                if(!disabled) onClick();
            }}
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={disabled ? classes.disabled : classes.active}
        >
            <AddCircle className={classes.hoverColor} />
            <Typography
                variant="button"
                className={classes.hoverColor}
                style={{ marginLeft: '10px', textTransform: 'capitalize' }}
            >
                {text}
            </Typography>
        </Grid>
    );
}

export default AddZone;
