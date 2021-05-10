import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { btnStyle } from '../../styles/mixins';

const Wrapper = styled.div`
  > .input-wrap {
    display: flex;
    justify-content: space-between;

    > #write-comment {
      border: 1px solid red;
      width: 90%;
      font-size: ${(props) => props.theme.subTitle};
      background-color: ${(props) => props.theme.bgColor};
    }
    > #submit-comment {
      ${btnStyle};
      border: 1px solid red;
    }
  }
`;

const CommentInput = ({ onInput }) => {
  const [value, setValue] = useState('');

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onClick = useCallback(
    (e) => {
      onInput(value);
      setValue(''); // value 값 초기화
      e.preventDefault();
    },
    [onInput, value]
  );

  return (
    <Wrapper>
      <form className='input-wrap'>
        <input
          type='text'
          id='write-comment'
          placeholder='댓글을 달아주세요!🙌'
          value={value}
          onChange={handleChange}
        />
        <button type='submit' id='submit-comment' onClick={onClick}>
          등록
        </button>
      </form>
    </Wrapper>
  );
};

export default CommentInput;
