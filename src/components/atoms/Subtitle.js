import React from 'react';

import styled from 'styled-components';

const StyledSubtitle = styled.span`
    font-size: 40px;
    color: #ababab;
    text-align: center;
    display: block;
    margin: 5px auto;
    font-weight: bold;
`

function Subtitle(props) {
    return (
        <div>
            <StyledSubtitle>{props.text}</StyledSubtitle>
        </div>
    );
}

export default Subtitle;