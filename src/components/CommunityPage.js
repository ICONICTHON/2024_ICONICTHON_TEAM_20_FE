import React from 'react';
import { useParams } from 'react-router-dom';

function CommunityPage() {
  const { courseName } = useParams();

  return (
    <div>
      <h2>{courseName} 커뮤니티 페이지</h2>
      <p>여기는 {courseName} 수업의 커뮤니티입니다. 수업과 관련된 토론과 자료를 공유하세요.</p>
    </div>
  );
}

export default CommunityPage;
