import React from 'react';

import Subtitle from '../atoms/Subtitle';
import Title from '../atoms/Title';
import Cake from '../atoms/Cake';

import styled from "styled-components";

const MainContainer = styled.div`
    display: block;
    margin: 50px 0;
`

function Main(props) {
    return (
        <MainContainer>
            <Subtitle></Subtitle>
            <Title></Title>
            <Cake></Cake>
        </MainContainer>
    );
}

export default Main;