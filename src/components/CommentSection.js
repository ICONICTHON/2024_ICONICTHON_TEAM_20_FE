import React, { useState } from 'react';

function CommentSection() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    setComments([...comments, newComment]);
    setNewComment('');
  };

  return (
    <div>
      <h3>댓글</h3>
      <textarea 
        value={newComment} 
        onChange={(e) => setNewComment(e.target.value)} 
        placeholder="댓글 달기"
      />
      <button onClick={handleAddComment}>댓글 입력 버튼</button>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
}

export default CommentSection;
