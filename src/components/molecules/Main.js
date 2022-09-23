import React from 'react';

import Subtitle from '../atoms/Subtitle';
import Title from '../atoms/Title';
import Cake from '../atoms/Cake';

import styled from "styled-components";
import Divider from "../atoms/Divider";
import FlowText from "../atoms/FlowText";

const MainContainer = styled.div`
    display: block;
    margin: 2em 0 100px 0;
    position: relative;
    top: 30px;
`

function Main({props, text}) {
    return (
        <MainContainer>
            <Divider></Divider>
            <Subtitle text={'2022.04.01'} />
            <Title text={'뚜경잉'} />
            <Cake />
            <Subtitle text={'생일축하해 ♥'} />
            <Divider></Divider>
            <FlowText text1={"오늘도 좋은 하루 보내 ♥"} text2={"HAPPY BIRTHDAY TO YOU ♥"} text3={""}/>
        </MainContainer>
    );
}

export default Main;