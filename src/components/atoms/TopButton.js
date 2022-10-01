import React, {useEffect, useState} from 'react';

import styled from 'styled-components';

import buttonImg from '../../images/top_button.png';


const TopButton = ({ text }) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    const moveToTop = () => (document.documentElement.scrollTop = 0);
    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });

    const StyledButtonWrap = styled.div`
        width: 100%;
        max-width: 640px;
    `;

    const StyledButton = styled.img`
        @media (min-width:640px){
            display: none !important;
        }
        position: fixed;
        bottom: 60px;
        display: none;
        right: 0;
        z-index: 9999;
        width: 15%;
    `;

    return (
        <StyledButtonWrap>
            <StyledButton onClick={moveToTop} src={buttonImg} className={scrollPosition < 10 ? "" : "show"} />
        </StyledButtonWrap>
    );

};

export default TopButton;