import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import Logo from '../atoms/Logo';

const HeaderWrap = styled.div`
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
`

function Header(props) {
    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });
    return (
        <HeaderWrap className={scrollPosition < 10 ? "" : "background-yellow"}>
            <Logo />
        </HeaderWrap>
    );
}

export default Header;