import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

import Button from '../../components/Button';
import Input from '../../components/Input';
import AppLayout from '../../components/AppLayout';
import Error from '../../components/Error';
import Success from '../../components/Success';
import Text from '../../components/Text';

import {
    VALID_EMAIL,
    VALID_PASSWORD,
    SUCCESSFULLY_LOGIN,
    ERROR_LOGIN,
    ERROR_SUCCESS_TIME_OUT,
    INVALID_EMAIL_ADDRESS,
} from './constants';
import { validateEmail } from '../../utils/common';

const LoginLayout = styled.div`
    margin: auto;
    position: relative;
    top: 25%;
    border-radius: 10px;
    width: 250px;
    height: 250px;
    background-color: #cfcfe4;;
    -moz-box-shadow: 5px 7px #7d2b2b;
    -webkit-box-shadow: 5px 7px #7d2b2b;
    box-shadow: 5px 7px #7d2b2b;
`;

const LoginHeader = styled.div`
    width: 100%;
    height: 77px;
    border-radius: 10px;
    text-align: center;
    background-color: #bcbed2;;
`;

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        if (errorMessage || successMessage) {
            setTimeout(() => {
                setErrorMessage('');
                setSuccessMessage('');
            }, ERROR_SUCCESS_TIME_OUT);
        }
    }, [errorMessage, successMessage]);

    const inputChangeHandler = (event) => {
        const id = event.target.id;
        const val = event.target.value;
        if (id === 'email') setEmail(val);
        if (id === 'password') setPassword(val);
    };

    const clickHandler = () => {
        if (!validateEmail(email)) {
            setErrorMessage(INVALID_EMAIL_ADDRESS);
        } else if (email === VALID_EMAIL && password === VALID_PASSWORD) {
            setSuccessMessage(SUCCESSFULLY_LOGIN);
            setErrorMessage('');
        } else if (email !== VALID_EMAIL || password !== VALID_PASSWORD) {
            setErrorMessage(ERROR_LOGIN);
            setSuccessMessage('');
        }
    };

  return (
      <AppLayout>
          {errorMessage && <Error>{errorMessage}</Error>}
          {successMessage && <Success>{successMessage}</Success>}
        <LoginLayout>
            <LoginHeader>
                <Text>Login to your account</Text>
                <div><Text>Correct email: <b>{VALID_EMAIL}</b></Text></div>
                <div><Text>Correct password: <b>{VALID_PASSWORD}</b></Text></div>
            </LoginHeader>
            <Input type="email" id="email" placeholder="Enter Email..." onChange={inputChangeHandler} />
            <Input type="password" id="password" placeholder="Enter password..." onChange={inputChangeHandler} />
            <Button label="Click to Login" onClick={clickHandler} />
        </LoginLayout>
      </AppLayout>
  )
};

export default Login;