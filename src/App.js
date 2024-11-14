// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BoardList from './components/BoardList';
import CommunityDetailPage from './components/CommunityDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BoardList />} />
        <Route path="/community/:courseName" element={<CommunityDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
