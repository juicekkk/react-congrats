import React from 'react';
import styled from 'styled-components';

import cake from '../../images/cake.png';

const CakeWrap = styled.img`
  display: block;
  width: 80%;
  margin: 0 auto; 
`

function Cake(props) {
    return (
        <div>
            <CakeWrap src={cake} alt="cake" />
        </div>
    );
}

export default Cake;