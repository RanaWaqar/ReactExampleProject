import React from 'react';

import styled from 'styled-components'

const ButtonLayout = styled.button`
    padding: 10px;
    width: 100%;
    margin-top: 65px;
    background-color: gray;
    border-radius: 5px; 
    
`;

const Button = (props) => {
    return (<ButtonLayout {...props} >{props.label}</ButtonLayout>)
};

export default Button;