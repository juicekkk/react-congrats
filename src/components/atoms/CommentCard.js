import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Comments from "../atoms/Comment";
import SmallText from "./SmallText";
import Candle from '../../images/candle.png';

const CommentCard = ({main}) => {
    const writerRef = useRef(null)
    const pwdRef = useRef(null);
    const contentRef = useRef(null);

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

    const [comments, setComments] = useState('');
    const [delData, setDelData] = useState(null);

    function loadComment() {
        axios.get('/comment?main='+main, )
            .then(res => {
                console.log(res.data);
                setComments(res.data);
            })
            .catch(function(error) {
                //alert("에러가 발생했습니다.");
            });
     };

    const addComment = () => {
        const data = {
            'writer': writerRef.current.value,
            'pwd': pwdRef.current.value,
            'content': contentRef.current.value,
            'main': main,
        };

        if(data.writer.length < 1) {
            alert('닉네임을 입력해주세요.');
            return false;
        } else if(data.pwd.length < 1) {
            alert('비밀번호를 입력해주세요.');
            return false;
        } else if(data.content.length < 1) {
            alert('내용을 입력해주세요.');
            return false;
        }

        axios.post('/comment', data)
            .then(function(response) {
                //console.log(response);
                if(response.status == 200 && response.data.result == 1){
                    loadComment();
                }
            })
            .catch(function(error) {
                //alert("에러가 발생했습니다.");
            })
    }

    const delComment = () => {
        axios.delete('/comment', {
                headers: {
                    Authorization: "***"
                },
                data: delData
            })
            .then(function(response) {
                //console.log(response);
                if(response.status == 200){
                    if(response.data.result == 0){
                        alert("비밀번호가 일치하지 않습니다.");
                    }
                    setDelData(null);
                }
            })
            .catch(function(error) {
                //alert("에러가 발생했습니다.");
            });
    }

    useEffect(() => {
        if(delData != null){
            delComment();
        } else {
            loadComment();
        }
    }, [delData]);

    return (
        <StyledCommentWrap>
            <StyledCandle src={Candle}/>
            <SmallText text={'● 축하인사를 남겨주세요 ●'} color={'#666'} />
            <StyledInputCommentWrap>
                <WriterPwd type="text" placeholder={"닉네임"} ref={writerRef} />
                <WriterPwd type="password" placeholder={"비밀번호"} ref={pwdRef} />
                <Comment type="text" placeholder={"댓글을 입력해주세요."} ref={contentRef} />
                <ConfirmBtn type="button" value="등록" onClick={addComment} />
            </StyledInputCommentWrap>

            <Comments comments={comments} setDelData={setDelData} />
            <SmallText text={'THANK YOU FOR WATCHING'} color={'#666'} />
        </StyledCommentWrap>
    );
}

export default CommentCard;