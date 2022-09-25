import React from 'react';

import styled from 'styled-components';

const MessageCard = ({ img1, text1, img2, text2 }) => {
    const StyledCardWrap = styled.div`
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin: 20px auto;
        justify-content: space-evenly;
    `;

    const StyledCardDoubleImgWrap = styled.img`
        display: block;
        margin 0 auto;
        width: 75%;
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
                <div>
                    <StyledCardDoubleImgWrap src={img1} onMouseOver={MouseOver} onMouseOut={MouseOut}/>
                    <StyledCardText>{text1}</StyledCardText>
                </div>
                <div>
                    <StyledCardDoubleImgWrap src={img2} onMouseOver={MouseOver} onMouseOut={MouseOut}/>
                    <StyledCardText>{text2}</StyledCardText>
                </div>
            </StyledCardWrap>
        </div>
    );

};

export default MessageCard;