import '../styles/LogInScreen.css';
import React from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function LogInScreen(){
    const URL = "https://api.getcountapp.com/api/v1/authenticate";
    const logInScheme = Yup.object().shape({
        email: Yup.string().email('Invalid e-mail!').required('Plase enter your e-mail'),
        password: Yup.string().required('Please enter your password'),
    })
    const logInConnect = (values) => {
        axios.post(URL, {
            username: values.email,
            password: values.password,
        })
        .then(function (response){
            const user = {
                firstName: response.data.user.firstName,
                lastName: response.data.user.lastName,
            }
            localStorage.setItem('user', JSON.stringify(user));
            window.location.reload();
        })
        .catch(function (error){
            console.log(error);
        })
    }

    return(
        <div className="login">
            <Formik
                initialValues={{email:'', password:''}}
                validationSchema={logInScheme}
                onSubmit={values => {
                    logInConnect(values);
                }
                }
            >
                {({errors}) => (
                    <Form>
                        <h1 className="login-header">Log in</h1>
                        <div className="login-field">
                            <Field name="email" placeholder="username" className="login-input" />
                            {errors.email ? (
                                <div className="login-error">{errors.email}</div>
                            ) : <div className="login-errorEmpty"></div>}
                        </div>
                        
                        <div className="login-field">
                            <Field name="password" type="password" placeholder="password" className="login-input"/>
                            {errors.password ? (
                                <div className="login-error">{errors.password}</div>
                            ) : <div className="login-errorEmpty"></div>}
                        </div>
                        <button type="submit" className="login-button">Login</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default LogInScreen;