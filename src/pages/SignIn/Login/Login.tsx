import React from "react";
import { CardContent, Divider, TextField, Button, Typography, Link, Collapse, CircularProgress, Grid, FormHelperText, Zoom } from "@material-ui/core";
import useStyles from "./Login-styles";

import * as Yup from "yup";
import { Formik } from "formik";

import { RootState } from "src/redux/rootReducer";
import { useDispatch, useSelector } from "react-redux";
import authActions from "src/redux/auth/actions";

import User from "src/models/User";

function Login() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const isLoading = useSelector((state: RootState) => state.auth.isLoading);
    const validation = useSelector((state: RootState) => state.auth.validation);
    const login = (user: User) => dispatch(authActions.login(user));
    const setCurrentTab = (tab: number) => dispatch(authActions.setTab(tab));

    return (
        <div>
            <Typography color="textPrimary" className={classes.title}> Pomodoro App </Typography>
            <Typography color="textSecondary" className={classes.subtitle}> Login </Typography>
            <CardContent className={classes.content}>
                <Formik
                    initialValues={{
                        email: "",
                        password: ""
                    }}
                    onSubmit={(values: User) => {
                        login(values);
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
                                        error={(Boolean(touched.email && errors.email) || validation.isError)}
                                        helperText={(touched.email && errors.email)}
                                    />
                                    <Zoom in={validation.isError}>
                                        <FormHelperText className={classes.errorText}> {validation.message} </FormHelperText>
                                    </Zoom>
                                    <TextField
                                        fullWidth
                                        label="Password"
                                        name="password"
                                        type="password"
                                        onChange={handleChange}
                                        value={values.password}
                                        variant="outlined"
                                        error={(Boolean(touched.password && errors.password) || validation.isError)}
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

                                <Collapse in={isLoading}>
                                    <Grid container alignItems="center" justify="center" style={{ margin: '15px 0px' }}>
                                        <CircularProgress color="primary" />
                                    </Grid>
                                </Collapse>

                            </form>
                        )}
                </Formik>

                <Divider className={classes.divider} />
                <Link
                    onClick={() => setCurrentTab(1)}
                    variant="body2"
                    color="textSecondary"
                >
                    Create new account
                </Link>
            </CardContent>
        </div>


    )
}

export default Login;