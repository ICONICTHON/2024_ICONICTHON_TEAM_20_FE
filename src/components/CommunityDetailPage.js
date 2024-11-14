// src/components/CommunityDetailPage.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PostModal from './PostModal';
import PostDetailModal from './PostDetailModal';

function CommunityDetailPage() {
  const { courseName } = useParams();
  const [posts, setPosts] = useState([]);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [isPostDetailModalOpen, setIsPostDetailModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null); // 선택한 게시물 데이터
  const [userPoints, setUserPoints] = useState(0);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const postsPerPage = 10; // 페이지당 게시물 수

  const currentUser = 'user123'; // 예시 사용자 ID (로그인된 사용자 ID를 사용할 수 있도록 수정 필요)

  // 게시물 작성 모달 열기
  const openPostModal = () => {
    setIsPostModalOpen(true);
  };

  // 게시물 상세 모달 열기
  const openPostDetailModal = (post) => {
    setSelectedPost(post);
    setIsPostDetailModalOpen(true);
  };

  // 게시물 추가 (게시글 작성 시에만 포인트 증가)
  const handleAddPost = (title, content) => {
    const newPost = {
      id: posts.length + 1,
      title,
      content,
      likes: 0,
      likedBy: [], // 추천한 사용자 목록
      comments: [],
    };
    setPosts([...posts, newPost]);
    setIsPostModalOpen(false); // 모달 닫기

    // 게시글 작성 시 포인트 증가
    setUserPoints((prevPoints) => prevPoints + 50); // 예: 50점 추가
  };

  // 게시물 추천 기능 (한 사용자당 한 번만 추천 가능)
  const handleLikePost = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === postId) {
          if (post.likedBy.includes(currentUser)) {
            alert('이미 추천하셨습니다.');
            return post;
          }
          // 추천이 가능하면 추천 수 증가 및 사용자 추가
          return {
            ...post,
            likes: post.likes + 1,
            likedBy: [...post.likedBy, currentUser],
          };
        }
        return post;
      })
    );

    // selectedPost의 추천 수 및 likedBy 업데이트
    if (selectedPost && selectedPost.id === postId) {
      if (selectedPost.likedBy.includes(currentUser)) {
        return; // 이미 추천했으면 업데이트하지 않음
      }
      setSelectedPost((prevPost) => ({
        ...prevPost,
        likes: prevPost.likes + 1,
        likedBy: [...prevPost.likedBy, currentUser],
      }));
    }
  };

  // 댓글 추가 (포인트 증가 없음)
  const handleAddComment = (postId, commentText) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [...post.comments, { text: commentText }],
            }
          : post
      )
    );

    // selectedPost의 댓글 리스트 업데이트
    if (selectedPost && selectedPost.id === postId) {
      setSelectedPost((prevPost) => ({
        ...prevPost,
        comments: [...prevPost.comments, { text: commentText }],
      }));
    }
  };

  // 페이지 전환 기능
  const handleNextPage = () => {
    if (currentPage < Math.ceil(posts.length / postsPerPage)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  // 현재 페이지에 해당하는 게시글 계산
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div>
      <h2>{courseName} 커뮤니티</h2>

      {/* 게시물 작성 버튼 */}
      <button onClick={openPostModal}>게시물 작성</button>

      {/* 게시물 리스트 */}
      <ul>
        {currentPosts.map((post) => (
          <li
            key={post.id}
            onClick={() => openPostDetailModal(post)}
            style={{ cursor: 'pointer', marginBottom: '10px' }}
          >
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>추천 수: {post.likes}</p>
          </li>
        ))}
      </ul>

      {/* 페이지 전환 버튼 */}
      <div>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          이전 페이지
        </button>
        <span> 페이지 {currentPage} </span>
        <button onClick={handleNextPage} disabled={currentPage === Math.ceil(posts.length / postsPerPage)}>
          다음 페이지
        </button>
      </div>

      {/* 사용자 포인트 */}
      <p>사용자 포인트: {userPoints} 점</p>

      {/* 게시물 작성 모달 */}
      {isPostModalOpen && (
        <PostModal
          onClose={() => setIsPostModalOpen(false)}
          onAddPost={handleAddPost}
        />
      )}

      {/* 게시물 상세 모달 */}
      {isPostDetailModalOpen && selectedPost && (
        <PostDetailModal
          post={selectedPost}
          onClose={() => setIsPostDetailModalOpen(false)}
          onLikePost={() => handleLikePost(selectedPost.id)}
          onAddComment={(commentText) => handleAddComment(selectedPost.id, commentText)}
        />
      )}
    </div>
  );
}

export default CommunityDetailPage;
