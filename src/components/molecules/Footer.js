import React from 'react';
import styled from "styled-components";

import SmallText from '../atoms/SmallText';

const FooterContainer = styled.div`
    display: block;
    position: fixed;
    bottom: 0px;
    width: 100%;
    background: #ff9fd3;
    height: 60px;
    max-width: 640px;
`

function Footer(props) {
    return (
        <FooterContainer>
            <SmallText color={"#eee"} text={"Copyright 2022. JSK. All rights reserved."} />
        </FooterContainer>
    );
};

export default Footer;