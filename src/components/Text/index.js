import React from 'react';

import styled from 'styled-components'

const TextLayout = styled.span`
    position: relative;
    top: 13px;
    color: #7d5050;;
`;

const Text = ({ children }) => {
    return (
        <TextLayout>{children}</TextLayout>
    )
};

export default Text;
