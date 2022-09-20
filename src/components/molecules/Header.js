import React from 'react';
import styled from 'styled-components';

import Logo from '../atoms/Logo';
import Divider from '../atoms/Divider';


function Header(props) {
    return (
        <div>
            <Logo></Logo>
            <Divider></Divider>
        </div>
    );
}

export default Header;