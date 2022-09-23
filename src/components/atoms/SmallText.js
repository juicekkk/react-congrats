import React from 'react';

import styled from 'styled-components';


const SmallText = ({ text, color}) => {
    const StyledSubtitle = styled.span`
        font-size: 15px;
        color: ${color};
        text-align: center;
        display: block;
        font-weight: bold;
        margin: 5px auto;
        line-height: 50px;
        
    `;

    return (
        <div>
            <StyledSubtitle color={color}>{text}</StyledSubtitle>
        </div>
    );

};

export default SmallText;