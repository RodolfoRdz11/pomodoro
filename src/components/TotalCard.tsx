import React from "react";
import { Card, Typography, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    card: {
        padding: '8px 16px'
    },
    primaryText: {
        fontWeight: 'bold',
        fontSize: 22
    },
    secondaryText: {
        fontWeight: 500,
        fontSize: 12,
        color: '#b3b3b3',
        textAlign: 'right'
    },
    textContainer: {
        display: 'flex',

    },
    numberSkeleton: {
        width: '50%',
        height: 22
    },
    textSkeleton: {
        width: '20%',
        height: 22,
        textAlign: 'right',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
}));

interface Props {
    data: number | string;
    icon: any;
    secondaryText: string;
    backgroundColor?: string;
    color?: string;
}

function TotalCard({ 
    data, 
    icon: Icon, 
    secondaryText, 
    backgroundColor = "#fff", 
    color = "#000"  
}: Props) {
    const classes = useStyles();

    return (
        <Card className={classes.card} style={{ backgroundColor }}>
            <Grid container alignItems="center" justify="space-between">
                <Icon style={{ color }} />
                <span className={classes.primaryText} style={{ color }} > {data} </span>
            </Grid>
            <Grid container alignItems="center" justify="flex-end">
                <Typography className={classes.secondaryText} style={{ color }}>  {secondaryText} </Typography>
            </Grid>
        </Card>
    )
}

export default TotalCard;