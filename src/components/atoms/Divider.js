import React from 'react';
import styled from 'styled-components';

import divider from '../../images/divider.png';

const Line = styled.img`
    display: block;
    width: 90%;
    margin: 0 auto;
`;


function Divider(props) {
    return (
        <div>
            <Line src={divider} alt="divider" />
        </div>
    );
}

export default Divider;