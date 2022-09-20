import React from 'react';
import styled from 'styled-components';

const StyledDivider = styled.div`
    display: block;
    width: 90%;
    background: #ffdd8d;
    height: 2px;
    margin: 5px auto;
`

function Divider(props) {
    return (
        <div>
            <StyledDivider />
        </div>
    );
}

export default Divider;