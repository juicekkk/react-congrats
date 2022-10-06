import React, {useState} from 'react';
import styled from 'styled-components';

import DelPop from "../atoms/Popup";
import XButton from '../../images/XButton.png';

const Comment = ({ comments, setDelData }) => {
    const [popVisible, setPopVisible] = useState(false);
    const [cNum, setCNum] = useState(null);

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
    const StyledNoData = styled.div`
        display: block;
        margin: 0 auto;
        text-align: center;
        color: #6b6b6b;
    `;

    function openClosePop(e) {
        setCNum(e.target.getAttribute('value'));
        setPopVisible(!popVisible);
    }

    return (
        <div>
            {comments.length > 0
                ? comments.map(data => (
                <StyledCommentsWrap key={data.cNum}>
                    <StyledWriter>{data.writer}</StyledWriter>
                    <StyledDate>{data.regDate}</StyledDate><StyledDel value={data.cNum} src={XButton} onClick={openClosePop}/>
                    <StyledComment>{data.content}</StyledComment>
                </StyledCommentsWrap>
                ))
                :
                <StyledCommentsWrap>
                    <StyledNoData>등록된 댓글이 없습니다<br/>첫번째 댓글을 남겨주세요(~'▽')~♥</StyledNoData>
                </StyledCommentsWrap>
            }
            { popVisible ? <DelPop setDelData={setDelData} cNum={cNum} setPopVisible={setPopVisible} popVisible={popVisible}  /> : null }
        </div>
    );
}

export default Comment;