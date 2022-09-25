import React from 'react';

import health from '../../images/health.png';
import happy from '../../images/happy.png';
import fun from '../../images/fun.png';

import Subtitle from '../atoms/Subtitle';
import Title from '../atoms/Title';
import Cake from '../atoms/Cake';

import styled from "styled-components";
import Divider from "../atoms/Divider";
import FlowText from "../atoms/FlowText";
import Carousel from "../atoms/Carousel";
import TopButton from "../atoms/TopButton";
import MessageCard from "../atoms/MessageCard";
import DoubleMessageCard from "../atoms/DoubleMessageCard";

const MainContainer = styled.div`
    display: block;
    margin: 2em 0 100px 0;
    position: relative;
    top: 30px;
`

function Main({props, text}) {
    return (
        <MainContainer>
            <Divider />
            <Subtitle text={'2022.04.01'} />
            <Title text={'뚜경잉'} />
            <Cake />
            <Subtitle text={'생일축하해 ♥'} />
            <Divider />
            <FlowText text1={"오늘도 좋은 하루 보내 ♥"} text2={"HAPPY BIRTHDAY TO YOU ♥"} text3={""}/>
            <Carousel />
            <Divider />
            <TopButton />
            <MessageCard img={health} text={"건강"} />
            <DoubleMessageCard img1={happy} text1={"행복"} img2={fun} text2={"즐거움"} />
                <FlowText text1={"WORK LESS"} text2={"AND EARN MORE !"} text3={""}/>
            <Divider />
        </MainContainer>
    );
}

export default Main;