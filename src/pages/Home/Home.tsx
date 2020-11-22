import React from "react";
import { Grid } from "@material-ui/core";

import Pomodoro from "./Pomodoro/Pomodoro";

function Home() {
    return (
        <Grid container>
            <Pomodoro />
        </Grid>
    )
}

export default Home;