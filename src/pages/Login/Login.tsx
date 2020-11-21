import React from "react";
import { Card, CardContent, Divider, TextField, Button, Grid, Collapse, CircularProgress, Typography, Avatar, Link } from "@material-ui/core";
import useStyles from "./Login-styles";
import { Link as RouterLink } from 'react-router-dom';
import TimerIcon from '@material-ui/icons/Timer';

import * as Yup from "yup";
import { Formik } from "formik";

import User from "src/models/User";

interface Props {

}

function Login({ }: Props) {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Card className={classes.card}>
                <Avatar className={classes.icon}>
                    <TimerIcon fontSize="large" />
                </Avatar>
                <Typography color="textPrimary" className={classes.title}>
                    Pomodoro App
                </Typography>
                <CardContent className={classes.content}>
                    <Formik
                        initialValues={{
                            email: "",
                            password: ""
                        }}
                        onSubmit={(values: User) => {
                            
                        }}
                        validationSchema={Yup.object().shape({
                            email: Yup.string().email('Must be a valid email').required('Email is required'),
                            password: Yup.string().required('Password is required'),
                        })}
                    >
                        {({
                            values,
                            handleChange,
                            handleSubmit,
                            touched,
                            errors
                        }) => (
                                <form className={classes.loginForm} onSubmit={handleSubmit}>
                                    <div className={classes.fields}>
                                        <TextField
                                            fullWidth
                                            label="Email"
                                            name="email"
                                            onChange={handleChange}
                                            value={values.email}
                                            variant="outlined"
                                            error={(Boolean(touched.email && errors.email))}
                                            helperText={(touched.email && errors.email)}
                                        />
                                        <TextField
                                            fullWidth
                                            label="Password"
                                            name="password"
                                            type="password"
                                            onChange={handleChange}
                                            value={values.password}
                                            variant="outlined"
                                            error={(Boolean(touched.password && errors.password))}
                                            helperText={(touched.password && errors.password)}
                                        />
                                    </div>
                                    <Button
                                        className={classes.submitButton}
                                        color="primary"
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                    >
                                        Login
                                    </Button>

                                </form>
                            )}
                    </Formik>

                    <Divider className={classes.divider} />
                    <Link
                        component={RouterLink}
                        to="/register"
                        variant="body2"
                        color="textSecondary"
                    >
                        Create new account
                    </Link>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default Login;