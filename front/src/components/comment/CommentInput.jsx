import React from 'react';
import styled from 'styled-components';
import { btnStyle } from '../../styles/mixins';

const Wrapper = styled.div`
  border: 1px solid green;
  margin-top: ${(props) => props.theme.margin3};

  > .write-comment {
    display: flex;
    justify-content: space-between;

    > input {
      border: 1px solid red;
      width: 90%;
      font-size: 20px;
    }
    > button {
      ${btnStyle}
      border: 1px solid red;
    }
  }
`;

const CommentInput = () => {
  return (
    <Wrapper>
      <div className='write-comment'>
        <input placeholder='댓글을 달아주세요!🙌' />
        <button type='submit'>등록</button>
      </div>
    </Wrapper>
  );
};

export default CommentInput;
