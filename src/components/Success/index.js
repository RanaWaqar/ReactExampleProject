import React from 'react';

import styled from 'styled-components'

const SuccessLayout = styled.div`
    background-color: #5c615c;
    color: #c3c3c3;
    padding: 11px;
    width: 226px;
    height: 26px;
    border-radius: 5px;
    position: relative;
    top: 24%;
    margin: auto;
`;

const Success = ({ children }) => {
    return (
        <SuccessLayout>{children}</SuccessLayout>
    )
};

export default Success;
