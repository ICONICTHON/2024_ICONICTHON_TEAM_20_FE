// src/components/BoardList.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function BoardList() {
  const navigate = useNavigate();
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const courseList = [
    '프로그래밍 기초', '자료 구조', '알고리즘', '컴퓨터 구조', '운영 체제',
    '데이터베이스', '네트워크', '소프트웨어 공학', '인공지능', '머신러닝',
    '딥러닝', '웹 프로그래밍', '모바일 프로그래밍', '클라우드 컴퓨팅',
    '보안', '임베디드 시스템', '컴퓨터 그래픽스', '게임 개발', '데이터 분석',
    '통계학',
  ];

  useEffect(() => {
    setFilteredCourses(courseList);
  }, []);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filtered = courseList.filter((course) =>
      course.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredCourses(filtered);
  };

  return (
    <div>
      <h2>게시판</h2>
      <input
        type="text"
        placeholder="수업 검색"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button>포인트 순위</button>

      <ul>
        {filteredCourses.map((course, index) => (
          <li key={index}>
            {course}
            <button onClick={() => navigate(`/community/${course}`)}>
              커뮤니티로 이동
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BoardList;
