import React from "react";
import { Card, Divider, Grid, Typography, Box, Tabs, Tab } from "@material-ui/core";
import useStyles from "./SignIn-styles";
import { useTheme } from "@material-ui/core/styles";
import SwipeableViews from 'react-swipeable-views';

import { RootState } from "src/redux/rootReducer";
import { useSelector, useDispatch } from "react-redux";
import authActions from "src/redux/auth/actions";

import Register from "./Register/Register";
import Login from "./Login/Login";

function TabPanel(props: any) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            {...other}
        >
            {value === index && <Box p={1}>{children}</Box>}
        </Typography>
    );
}

const tabs = [
    { value: 0, label: 'LOGIN' },
    { value: 1, label: 'REGISTER' }
]

function SignIn() {
    const theme = useTheme();
    const classes = useStyles();
    const dispatch = useDispatch();
    const currentTab = useSelector((state: RootState) => state.auth.currentTab);
    const setCurrentTab = (tab: number) => dispatch(authActions.setTab(tab));

    const handleTabsChange = (event: any, value: number) => {
        setCurrentTab(value);
    };

    return (
        <Grid container className={classes.root}>
            <Card className={classes.card}>

                <Tabs
                    onChange={handleTabsChange}
                    scrollButtons="auto"
                    value={currentTab}
                    variant="standard"
                    textColor="primary"
                    indicatorColor="primary"
                >
                    {tabs.map((tab) => (
                        <Tab
                            key={tab.value}
                            label={<Typography className={classes.tabFont}> {tab.label} </Typography>}
                            value={tab.value}
                        />
                    ))}
                </Tabs>
                <Divider />
                <Box mt={3}>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={currentTab}
                    >
                        <TabPanel value={currentTab} index={0} dir={theme.direction}>
                            <Login />
                        </TabPanel>
                        <TabPanel value={currentTab} index={1} dir={theme.direction}>
                            <Register />
                        </TabPanel>
                    </SwipeableViews>
                </Box>


            </Card>
        </Grid>
    )
}

export default SignIn;