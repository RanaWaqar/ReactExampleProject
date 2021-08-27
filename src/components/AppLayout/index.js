import React from 'react'
import styled from 'styled-components'

const AppLayout = styled.div`
    margin: 0;
    width: 100%;
    height: 100vh;
    background-image: url("../../../assets/images/background.png");
`;

const Layout = ({ children }) => {
    return (<AppLayout>{children}</AppLayout>)
};

export default Layout;
