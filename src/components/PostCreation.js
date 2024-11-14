import React, { useState } from 'react';

function PostCreation() {
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    alert('게시글이 등록되었습니다.');
  };

  return (
    <div>
      <h2>게시글 작성 페이지</h2>
      <textarea 
        value={content} 
        onChange={(e) => setContent(e.target.value)} 
        placeholder="글을 입력하세요"
      />
      <button onClick={handleSubmit}>글 입력 버튼</button>
    </div>
  );
}

export default PostCreation;
