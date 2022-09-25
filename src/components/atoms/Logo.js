import React from 'react';
import styled from 'styled-components';

import logo from '../../images/logo2.png';


const Logo = () => {
    const CongratsWrap = styled.div`
      display: block;
      width: 100%;
      height: 60px;
    `

    const Congrats = styled.img`
      width: 200px;
      display: block;
      margin: 0 auto;
      height: 100%;
    `;


    return (
        <div>
            <CongratsWrap><Congrats src={logo} alt="logo" /></CongratsWrap>
        </div>
    );
}

export default Logo;