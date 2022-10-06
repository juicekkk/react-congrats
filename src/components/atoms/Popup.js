import React, {useRef, useState} from 'react';

import styled from 'styled-components';


const Popup = ({ popVisible, setPopVisible, setDelData, cNum }) => {
    const StyledFlexWrap = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        position: relative;
    `;
    const StyledDim = styled.div`
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        opacity: 0.8;
        z-index: 9999;
        background: #000;
    `;
    const StyledPopup = styled.div`
        display: grid;
        align-content: center;
        width: 80%;
        max-width: 300px;
        padding: 30px 0;
        z-index: 99999;
        background: #f5c85e;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 2em;
        span {
            font-size: 1.2em;
            text-align: center;
            margin: 0 auto;
            font-weight: bold;
            width: 80%;
        }
        input[type=password] {
            padding: 10px;
            display: block;
            margin: 0 auto;
            margin-top: 30px;
            border: none;
            text-align: center;
        }
        input[type=button] {
            padding: 15px 30px;
            border: none;
            background: #946552;
            color: #fff;
            border-radius: 10px;
            margin: 30px 5px 0 5px;
            font-weight: bold;
        }
    `;
    const BearEar = styled.div`
        background: #f5c85e;
        width: 100px;
        height: 100px;
        border-top-left-radius: 50px;
        border-top-right-radius: 50px;
        position: fixed;
        top: 29%;
        left: 50%;
        z-index: 99999;
        @media (min-width:420px){
            display: none;
        }
    `;
    const BearEarInner = styled(BearEar)`
        background: #946552;
        width: 60px;
        height: 60px;
        top: 31%;
    `;

    const pwdRef = useRef(null);
    function delComment(e) {
        const data = {
            'cNum': cNum,
            'pwd': pwdRef.current.value,
        };
        setDelData(data);
    }

    return (
        <StyledFlexWrap>
            <BearEar style={{transform: 'translateX(-119%)'}} />
            <BearEarInner style={{transform: 'translateX(-164%)'}} />
            <BearEar style={{transform: 'translateX(19%)'}} />
            <BearEarInner style={{transform: 'translateX(66%)'}} />
            <StyledDim />
            <StyledPopup>
                <span>비밀번호를<br />입력해주세요</span>
                <input type="password" name="pwd" ref={pwdRef} />
                <StyledFlexWrap>
                    <input type="button" value="확인" onClick={delComment}/>
                    <input type="button" value="취소" onClick={(event)=> setPopVisible(!popVisible)}/>
                </StyledFlexWrap>
            </StyledPopup>
        </StyledFlexWrap>
    );
};

export default Popup;