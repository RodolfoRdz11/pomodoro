import React from "react";
import { Typography, Box } from "@material-ui/core";

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

export default TabPanel;