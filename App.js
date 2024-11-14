import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BoardList from './components/BoardList';
import PostList from './components/PostList';
import PostCreation from './components/PostCreation';
import PostDetail from './components/PostDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BoardList />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/create-post" element={<PostCreation />} />
        <Route path="/post-detail" element={<PostDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
