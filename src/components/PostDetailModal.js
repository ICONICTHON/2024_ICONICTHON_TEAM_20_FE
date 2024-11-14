// src/components/PostDetailModal.js
import React, { useState } from 'react';

function PostDetailModal({ post, onClose, onLikePost, onAddComment }) {
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      onAddComment(newComment);
      setNewComment('');
    }
  };

  return (
    <div style={modalStyles.overlay}>
      <div style={modalStyles.content}>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <p>추천 수: {post.likes}</p>
        <button onClick={onLikePost}>추천</button>

        {/* 댓글 작성 */}
        <div>
          <textarea
            placeholder="댓글 작성"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button onClick={handleAddComment}>댓글 달기</button>
        </div>

        {/* 댓글 리스트 */}
        <ul>
          {post.comments.map((comment, index) => (
            <li key={index}>{comment.text}</li>
          ))}
        </ul>

        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
}

const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  content: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    width: '400px',
    textAlign: 'center',
  },
};

export default PostDetailModal;
