import React from "react";
import { CardContent, Divider, TextField, Button, Typography,FormHelperText, Zoom } from "@material-ui/core";
import useStyles from "./Register-styles";

import * as Yup from "yup";
import { Formik } from "formik";

import { RootState } from "src/redux/rootReducer";
import { useDispatch, useSelector } from "react-redux";
import userActions from "src/redux/users/actions";

import User from "src/models/User";

function Register() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const validation = useSelector((state: RootState) => state.users.validation);
    const register = (user: User) => dispatch(userActions.register(user));

    return (
        <div>
            <Typography color="textPrimary" className={classes.title}> Create account </Typography>
            <CardContent className={classes.content}>
                <Formik
                    initialValues={{
                        email: "",
                        password: ""
                    }}

                    onSubmit={(values: User) => {
                        register(values);
                    }}

                    validationSchema={Yup.object().shape({
                        name: Yup.string().required('Name is required'),
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
                                        label="Name"
                                        name="name"
                                        onChange={handleChange}
                                        value={values.name}
                                        variant="outlined"
                                        error={(Boolean(touched.name && errors.name))}
                                        helperText={(touched.name && errors.name)}
                                    />
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
                                    Register
                                </Button>
                            </form>
                        )}
                </Formik>

                <Divider className={classes.divider} />
            </CardContent>
        </div>
    )
}

export default Register;