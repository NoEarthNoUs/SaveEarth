import React from 'react';
import styled from 'styled-components';
import { btnStyle } from '../../styles/mixins';

const Wrapper = styled.div`
  border: 1px solid red;
  margin-top: ${(props) => props.theme.margin2};
  display: flex;
  justify-content: space-between;
  align-items: center;

  > .comment {
    border: 1px solid red;
    display: flex;
    align-items: center;

    img {
      border: 1px solid blue;
      width: 50px;
      height: 50px;
      margin-right: 30px;
    }
    .content {
      border: 1px solid blue;
    }
  }

  .btn-wrap {
    border: 1px solid red;

    button {
      ${btnStyle}
      border: 1px solid red;
    }
    button + button {
      margin-left: ${(props) => props.theme.margin3};
    }
  }
`;

const CommentView = () => {
  const userThumbnail =
    'https://upload.wikimedia.org/wikipedia/commons/6/67/User_Avatar.png';

  return (
    <Wrapper>
      <div className='comment'>
        <img src={userThumbnail} alt='유저 프로필 사진' />
        <div className='content'>
          댓글 내용가뤼뤼뤼뤼ㅜ리ㅜ리ㅜ리ㅜ리ㅜ리ㅜ리리ㅡㅜ리한나
        </div>
      </div>

      <div className='btn-wrap'>
        <button className='modify'>수정</button>
        <button className='delete'>삭제</button>
      </div>
    </Wrapper>
  );
};

export default CommentView;
