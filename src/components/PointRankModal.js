import React from 'react';

const mockPointRankData = [
  { name: '학생 A', points: 150 },
  { name: '학생 B', points: 120 },
  { name: '학생 C', points: 110 },
  { name: '학생 D', points: 90 },
  { name: '학생 E', points: 80 },
];

function PointRankModal({ onClose }) {
  return (
    <div style={modalStyles.overlay}>
      <div style={modalStyles.content}>
        <h3>포인트 순위</h3>
        <ul>
          {mockPointRankData.map((student, index) => (
            <li key={index}>
              {index + 1}. {student.name} - {student.points} 포인트
            </li>
          ))}
        </ul>
        <button onClick={onClose} style={modalStyles.closeButton}>
          닫기
        </button>
      </div>
    </div>
  );
}

// 모달 스타일 정의
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
  closeButton: {
    marginTop: '15px',
    padding: '5px 10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default PointRankModal;
