import React from 'react';

import styled from 'styled-components';

const StyledSubtitle = styled.span`
    font-size: 60px;
    color: #666;
    text-align: center;
    display: block;
    font-weight: bold;
    margin: 5px auto;
`

function Subtitle(props) {
    return (
        <div>
            <StyledSubtitle>성이름</StyledSubtitle>
        </div>
    );
}

export default Subtitle;