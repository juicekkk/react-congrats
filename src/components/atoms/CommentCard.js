import React from 'react';
import styled from 'styled-components';

import Comments from "../atoms/Comment";
import SmallText from "./SmallText";
import Candle from '../../images/candle.png';

const CommentCard = ({text, button}) => {
    const StyledCommentWrap = styled.div`
        display: block;
        width: 100%;
        margin: 0 auto;
    `;

    const StyledCandle = styled.img`
        display: block;
        margin: 0 auto;
    `;

    const StyledInputCommentWrap = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 95%;
        margin: 0 auto;
        text-align: center;
    `;

    const WriterPwd = styled.input`
        display: block;
        width: 30%;
        margin: 0;
        border: 2px solid #ddd;
        border-radius: 5px;
        padding: 16px 10px;
        font-weight: bold;
        border-bottom: none;
    `;

    const Comment = styled.input`
        display: block;
        width: 65%;
        margin: 0;
        border: 2px solid #ddd;
        border-right: none;
        border-radius: 5px;
        padding: 16px 10px;
        font-weight: bold;
    `;

    const ConfirmBtn = styled.input`
        display: block;
        margin: 0;
        padding: 13px 10px;
        border: 2px solid #87b8f0;
        background: #87b8f0;
        color: #fff;
        font-size: 1rem;
        font-weight: bold;
        border-radius: 5px;
        width: 20%;
    `;

    return (
        <StyledCommentWrap>
            <StyledCandle src={Candle}/>
            <SmallText text={'● 축하인사를 남겨주세요 ●'} color={'#666'} />
            <StyledInputCommentWrap>
                <WriterPwd type="text" placeholder={"닉네임"} />
                <WriterPwd type="password" placeholder={"비밀번호"} />
                <Comment type="text" placeholder={"댓글을 입력해주세요."} />
                <ConfirmBtn type="button" value="등록" />
            </StyledInputCommentWrap>

            <Comments />
            <SmallText text={'THANK YOU FOR WATCHING'} color={'#666'} />
        </StyledCommentWrap>
    );
}

export default CommentCard;