import React from 'react';

import styled from 'styled-components';

const MessageCard = ({ img, text }) => {
    const StyledCardWrap = styled.div`
        width: 50%;
        max-width: 250px;
        display: block;
        margin: 20px auto 40px auto;
    `;
    const StyledCardImgWrap = styled.img`
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
                <StyledCardImgWrap src={img} onMouseOver={MouseOver} onMouseOut={MouseOut} />
                <StyledCardText>{text}</StyledCardText>
            </StyledCardWrap>
        </div>
    );

};

export default MessageCard;