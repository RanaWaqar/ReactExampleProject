import React, { useState } from 'react';
import styled from 'styled-components'

import Button from '../../components/Button';
import Input from '../../components/Input';
import AppLayout from '../../components/AppLayout';

const LoginLayout = styled.div`
    position: relative;
    left: 42%;
    top: 42%;
    border: 1px solid;
    border-radius: 10px;
    width: 250px;
    height: 250px;
    background-color: blue;
`;

const LoginHeader = styled.div`
    border: 1px solid blue;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    text-align: center;
    background-color: red;
`;

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const inputChangeHandler = (event) => {
        const id = event.target.id;
        const val = event.target.value;
        if (id === 'email') setEmail(val);
        if (id === 'password') setEmail(val);
    };

    const clickHandler = () => {
        alert(email);
    };
  return (
      <AppLayout>
        <LoginLayout>
            <LoginHeader>
                Login
            </LoginHeader>
            <Input type="email" id="email" placeholder="Enter Email..." onChange={inputChangeHandler} />
            <Input type="password" id="password" placeholder="Enter password..." onChange={inputChangeHandler} />
            <Button label="Click to Login" onClick={clickHandler} />
        </LoginLayout>
      </AppLayout>
  )
};

export default Login;