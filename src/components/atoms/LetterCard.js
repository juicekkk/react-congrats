import React from 'react';

import styled from 'styled-components';
import letter from '../../images/letter.png';

const MessageCard = ({ title, msg}) => {
    const StyledCardWrap = styled.div`
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin: 20px auto;
        justify-content: space-evenly;
    `;
    const StyledLetterWrap = styled.div`
        display: flex;
        flex-wrap: wrap;
        align-content: center;
    `;

    const StyledLetterImgWrap = styled.img`
        display: block;
        margin 0 auto;
        width: 55%;
    `;

    const StyledCardText = styled.span`
        font-size: 2rem;
        color: #ababab;
        text-align: center;
        display: block;
        font-weight: bold;
        margin: 10px auto;
    `;

    const StyledCardMsg = styled.span`
        font-size: 1.3rem;
        color: #ababab;
        text-align: center;
        display: block;
        font-weight: bold;
        margin: 10px auto;
        white-space: pre-wrap
    `;

    function MouseOver(event) {
        event.target.animate(
            {
                transform: [
                    'scale(1.2)'
                ]
            },
            {
                duration: 500, // 밀리초 지정
                fill: 'forwards', // 종료 시 속성을 지님
                easing: 'ease' // 가속도 종류
            }
        );
    }

    function MouseOut(event){
        event.target.animate(
            {
                transform: [
                    'scale(1)' // 종료 값
                ]
            },
            {
                duration: 500, // 밀리초 지정
                fill: 'forwards', // 종료 시 속성을 지님
                easing: 'ease' // 가속도 종류
            }
        );
    }

    return (
        <div>
            <StyledCardWrap>
                <StyledLetterWrap>
                    <StyledLetterImgWrap src={letter} onMouseOver={MouseOver} onMouseOut={MouseOut}/>
                    <StyledCardText>{title}</StyledCardText>
                </StyledLetterWrap>
                <div>
                    <StyledCardMsg>{msg}</StyledCardMsg>
                </div>
            </StyledCardWrap>
        </div>
    );

};

export default MessageCard;