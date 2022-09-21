import React from 'react';

import styled from 'styled-components';


const Title = ({ text }) => {
    const StyledSubtitle = styled.span`
        font-size: 60px;
        color: #666;
        text-align: center;
        display: block;
        font-weight: bold;
        margin: 5px auto;
    `;

    return (
        <div>
            <StyledSubtitle>{text}</StyledSubtitle>
        </div>
    );

};

export default Title;