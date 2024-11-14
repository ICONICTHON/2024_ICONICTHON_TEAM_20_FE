import React from 'react';

function PostList() {
  return (
    <div>
      <h2>게시글 리스트 페이지</h2>
      <input type="text" placeholder="필터링 입력" />
      <button>페이지 버튼</button>
      <button>글 작성</button>
      <ul>
        <li>게시글 1</li>
        <li>게시글 2</li>
        <li>게시글 3</li>
      </ul>
    </div>
  );
}

export default PostList;
