import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

const Wrapper = styled.div`
  border: 1px solid green;
  margin-top: ${(props) => props.theme.margin3};
`;

const Comment = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      contents: '와! 너무 대박이에요!',
    },
    {
      id: 2,
      contents: '친구가 데려가줬는데 좋았어요!',
    },
    {
      id: 3,
      contents: '저는 직원이 불친절해서 별로였습니다;;',
    },
  ]);

  // 고윳값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(4);

  // 댓글 추가 기능
  const onInput = useCallback(
    (contents) => {
      const comment = {
        id: nextId.current,
        contents,
      };
      setComments(comments.concat(comment));
      nextId.current += 1;
    },
    [comments]
  );
  // 댓글 삭제 기능
  const onRemove = useCallback(
    (id) => {
      setComments(comments.filter((comment) => comment.id !== id));
    },
    [comments]
  );
  // 댓글 수정 기능
  const onModifyClick = useCallback((id, contents) => {});
  // const onModify = useCallback(
  //   (id, contents) => {
  //     setComments(
  //       comments.map((comment) =>
  //         comment.id === id ? { ...comment, contents: contents } : comment
  //       )
  //     );
  //   },
  //   [comments]
  // );

  return (
    <Wrapper>
      <CommentInput onInput={onInput} />
      <CommentList
        comments={comments}
        onRemove={onRemove}
        onModifyClick={onModifyClick}
      />
    </Wrapper>
  );
};

export default Comment;
