// src/components/CommentModal.js
import React, { useState } from 'react';

function CommentModal({ onClose, onAddComment }) {
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    onAddComment(comment);
    setComment('');
  };

  return (
    <div style={modalStyles.overlay}>
      <div style={modalStyles.content}>
        <h2>댓글 작성</h2>
        <textarea
          placeholder="댓글 내용"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={handleSubmit}>작성</button>
        <button onClick={onClose}>취소</button>
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
    width: '300px',
    textAlign: 'center',
  },
};

export default CommentModal;
