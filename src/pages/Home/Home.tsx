import React, { useState } from "react";
import { Divider, Typography, Box, Tabs, Tab, Container } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useStyles from "./Home-styles";
import SwipeableViews from 'react-swipeable-views';

import TabPanel from "src/components/TabPanel";
import Pomodoro from "./Pomodoro/Pomodoro";
import Summary from "./Summary/Summary";
import Topbar from "src/components/Topbar";

const tabs = [
    { value: 0, label: 'POMODORO' },
    { value: 1, label: 'SUMMARY' }
]

function Home() {
    const theme = useTheme();
    const classes = useStyles();
    const [currentTab, setCurrentTab] = useState<number>(0);

    const handleTabsChange = (event: any, value: number) => {
        setCurrentTab(value);
    };

    return (
        <div>
            <Topbar />
            <Container className={classes.container}>
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
                            <Pomodoro />
                        </TabPanel>
                        <TabPanel value={currentTab} index={1} dir={theme.direction}>
                            <Summary />
                        </TabPanel>
                    </SwipeableViews>
                </Box>
            </Container>
        </div>
    )
}

export default Home;