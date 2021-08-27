import React from 'react';

import styled from 'styled-components'

const InputLayout = styled.input`
    padding: 10px;
    display: block;
    margin: 23px 7px;
    width: 85%;
    border-radius: 5px;
`;
const Input = (props) => {
    return (
        <InputLayout {...props} />
    )
};

export default Input;