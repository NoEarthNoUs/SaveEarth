import React from 'react';
import styled from 'styled-components';
import { btnStyle } from '../../styles/mixins';

const Wrapper = styled.div`
  margin-top: ${(props) => props.theme.margin3};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .comment-list {
    display: flex;
    align-items: center;
    max-width: 80%;

    img {
      width: 50px;
      height: 50px;
      margin-right: 30px;
    }
    .content {
    }
  }

  .btn-wrap {
    button {
      ${btnStyle}
    }
    button + button {
      margin-left: ${(props) => props.theme.margin3};
    }
  }
`;

const CommentListItem = ({ comment, onRemove, onUpdate }) => {
  const { id, contents } = comment;
  const userThumbnail =
    'https://upload.wikimedia.org/wikipedia/commons/6/67/User_Avatar.png';

  return (
    <Wrapper>
      <div className='comment-list'>
        <img src={userThumbnail} alt='유저 프로필 사진' />
        <div className='content'>{contents}</div>
      </div>
      <div className='btn-wrap'>
        {/* 수정 버튼 비활성화 */}
        {/* <button className='modify' onClick={() => onUpdate(id, contents)}>
          수정
        </button> */}
        <button className='delete' onClick={() => onRemove(id)}>
          삭제
        </button>
      </div>
    </Wrapper>
  );
};

export default CommentListItem;
