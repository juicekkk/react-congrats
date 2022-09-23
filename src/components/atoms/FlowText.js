import React from 'react';
import styled, {keyframes} from 'styled-components';

const FlowText = ({text1, text2}) => {
    return (
        <Container>
            <FlowBox>
                <FlowWrap>
                    <Flow>
                        <span>{text1}</span>
                        <span>{text2}</span>
                        <span>{text1}</span>
                        <span>{text2}</span>
                    </Flow>
                </FlowWrap>
            </FlowBox>
        </Container>
    )
};

const Container = styled.div`
    `;

const flowing = keyframes`
      0% {
        transform: translate3d(0, 0, 0);
        color: #ffc6e5;
      }
      10% { color: #ffdd8d; }
      30% { color: #0078a0; }
      40% { color: #af80ec; }
      60% { color: #af80ec; }
      80% { color: #497d2f; }
      90% { color: #ffdd8d; }
      100% {
        transform: translate3d(-50%, 0, 0);
        color: #ffc6e5;
      }
    `;

const FlowBox = styled.div`
        position: relative;
        width: 100%;
        height: 80px;
        overflow: hidden;
    `;

const FlowWrap = styled.div`
        display: flex;
        top: 0;
        left: 0;
        align-items: center;
        width: 100%;
        height: 100%;
        white-space: nowrap;
    `;

const Flow = styled.div`
        @media (min-width:640px){
        font-size: clamp(12px, 5vw, 8rem);
        }
            
        font-size: clamp(12px, 8vw, 8rem);
        animation: ${flowing} 10s linear infinite;
        span{
            display:inline-block;
            font-weight:1000;
            padding:0 5px;
        }
    `;

export default FlowText;