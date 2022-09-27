import React from 'react';
import styled from 'styled-components';

import XButton from '../../images/XButton.png';

const Comment = ({text, button}) => {
    const StyledCommentsWrap = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: left;
        align-items: center;
        width: 80%;
        margin: 20px auto;
        position: relative;
        background: #eee;
        padding: 20px;
        border-radius: 10px;
    `;

    const StyledWriter = styled.span`
        align-items: center;
        position: relative;
        margin-bottom: 7px;
        color: #3d3d3d;
        font-weight: bold;
    `;

    const StyledComment = styled.span`
        position: relative;
        margin-bottom: 7px;
        color: #6b6b6b;
        font-weight: bold;
        width: 100%;
    `;

    const StyledDel = styled.img`
        position: absolute;
        width: 25px;
        margin-left: 2px;
        right: 10px;
        top: 11px;
    `;

    const StyledDate = styled.span`
        position: relative;
        color: #989898;
        left: 6px;
        bottom: 5px;
    `;

    return (
        <div>
            <StyledCommentsWrap>
                <StyledWriter>김아무개</StyledWriter>
                <StyledDate>22.04.01 15:33</StyledDate><StyledDel src={XButton}/>
                <StyledComment>생일 너무 축하해 ~</StyledComment>
            </StyledCommentsWrap>
            <StyledCommentsWrap>
                <StyledWriter>수경</StyledWriter>
                <StyledDate>22.04.01 15:33</StyledDate><StyledDel src={XButton}/>
                <StyledComment>다음에 같이 밥먹자 !!</StyledComment>
            </StyledCommentsWrap>
            <StyledCommentsWrap>
                <StyledWriter>홍길동</StyledWriter>
                <StyledDate>22.04.01 15:33</StyledDate><StyledDel src={XButton}/>
                <StyledComment>해피벌스데잉~~~~</StyledComment>
            </StyledCommentsWrap>
        </div>
    );
}

export default Comment;