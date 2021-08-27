import React from 'react';

import styled from 'styled-components'

const ButtonLayout = styled.button`
    position: relative;
    top: -14px;
    padding: 10px;
    width: 100%;
    background-color: #d6cbcb;;
    border-radius: 5px; 
    -moz-box-shadow: inset 0 0 10px #000000;
    -webkit-box-shadow: inset 0 0 10px #000000;
    box-shadow: inset 0 0 10px #000000;
`;

const Button = (props) => {
    return (<ButtonLayout {...props} >{props.label}</ButtonLayout>)
};

export default Button;