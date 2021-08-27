import React from 'react';

import styled from 'styled-components'

const ErrorLayout = styled.div`
    background-color: #fb6161;
    color: #c9ffc9;
    padding: 11px;
    width: 226px;
    height: 26px;
    border-radius: 5px;
    position: relative;
    top: 24%;
    margin: auto;
`;

const Error = ({ children }) => {
    return (
        <ErrorLayout>{children}</ErrorLayout>
    )
};

export default Error;
