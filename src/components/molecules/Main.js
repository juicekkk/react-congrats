import React from 'react';

import Subtitle from '../atoms/Subtitle';
import Title from '../atoms/Title';
import Cake from '../atoms/Cake';

import styled from "styled-components";
import Divider from "../atoms/Divider";

const MainContainer = styled.div`
    display: block;
    margin: 2em 0;
    position: relative;
    top: 30px;
`

function Main({props, text}) {
    return (
        <MainContainer>
            <Divider></Divider>
            <Subtitle text={'2022.04.01'} />
            <Title text={'성이름'} />
            <Cake />
            <Subtitle text={'생일축하해 ♥'} />
            <Divider></Divider>
        </MainContainer>
    );
}

export default Main;