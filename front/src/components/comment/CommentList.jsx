import React from 'react';
import CommentListItem from './CommentListItem';

const CommentList = ({ comments, onRemove, onUpdate }) => {
  return (
    <div className='comment-list'>
      {comments.map((comment) => (
        <CommentListItem
          comment={comment}
          key={comment.id}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default CommentList;
