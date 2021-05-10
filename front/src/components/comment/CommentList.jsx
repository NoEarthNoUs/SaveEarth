import React from 'react';
import CommentListItem from './CommentListItem';

const CommentList = ({ comments, onRemove, onModifyClick }) => {
  return (
    <div className='comment-list'>
      {comments.map((comment) => (
        <CommentListItem
          comment={comment}
          key={comment.id}
          onRemove={onRemove}
          onModifyClick={onModifyClick}
        />
      ))}
    </div>
  );
};

export default CommentList;
