import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { Grid, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, makeStyles, Theme, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        zIndex: 3005
    },
    modalTitle: {
        backgroundColor: theme.palette.primary.main,
    },
    dialogContent: {
        padding: 20
    },
    closeButton: {
        color: "#fff",
        padding: "0px !important"
    },
    closeIcon: {
        fontSize: 32
    },
    title: {
        color: "#fff"
    }
}))


interface Props {
    open: boolean;
    content: any;
    actions?: any;
    title: string;
    maxWidth: any;
    handleOpen: () => void;
    showCloseIcon?: boolean;
    fullScreen?: Boolean;
}

function CustomDialog({
    open,
    content,
    actions,
    title,
    maxWidth,
    handleOpen,
    showCloseIcon = true,
    fullScreen = false
}: Props) {
    const classes = useStyles();

    return (
        <Dialog
            open={open}
            fullWidth
            classes={{ root: classes.root }}
            maxWidth={maxWidth}
            fullScreen={Boolean(fullScreen)}
        >
            <DialogTitle className={classes.modalTitle}>
                <Grid container justify="space-between">
                    <Typography className={classes.title} variant="h5"> {title} </Typography>
                    {showCloseIcon ? (
                        <IconButton aria-label="Close" className={classes.closeButton} onClick={handleOpen}>
                            <CloseIcon className={classes.closeIcon} />
                        </IconButton>) : ""}
                </Grid>
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
                {content}
            </DialogContent>
            {actions && (
                <DialogActions>
                    {actions}
                </DialogActions>
            )}
        </Dialog>
    )
}

export default CustomDialog;
