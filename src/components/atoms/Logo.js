import React from 'react';
import styled from 'styled-components';

import logo from '../../images/logo.png';

const CongratsWrap = styled.div`
  display: inline;
  width: 100%;
  height: 60px;
`
const Congrats = styled.img`
  width: 200px;
  display: block;
  margin: 0 auto;
  height: 100%;
`

function Logo(props) {
    return (
        <div>
            <CongratsWrap><Congrats src={logo} alt="logo" /></CongratsWrap>
        </div>
    );
}

export default Logo;