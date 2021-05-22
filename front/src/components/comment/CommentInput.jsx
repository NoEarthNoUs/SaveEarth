import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { btnStyle } from '../../styles/mixins';

const Wrapper = styled.div`
  margin-bottom: ${(props) => props.theme.margin2};

  > .input-wrap {
    display: flex;
    justify-content: space-between;

    > #write-comment {
      width: 90%;
      font-size: ${(props) => props.theme.subTitle};
      background-color: ${(props) => props.theme.bgColor};
    }
    > #submit-comment {
      ${btnStyle};
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

  // 비로그인 유저 댓글 작성시 알림
  const loginCheck = () => {
    const user_id = localStorage.getItem('USER_TOKEN');
    if (!user_id) {
      alert('로그인 하신 후 작성해주세요! 🙌');
    }
    return true;
  };

  return (
    <Wrapper>
      <form className='input-wrap'>
        <input
          type='text'
          id='write-comment'
          placeholder='댓글을 달아주세요! 🙌'
          value={value}
          onChange={handleChange}
          onClick={loginCheck}
        />
        <button type='submit' id='submit-comment' onClick={onClick}>
          등록
        </button>
      </form>
    </Wrapper>
  );
};

export default CommentInput;
