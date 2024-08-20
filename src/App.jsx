import Comment from './components/Comment';
import './App.css';
import commentsData from './data/comments';
import { updateComment, toggleLike } from './utils/helper';
import { useState } from 'react';

function App() {
  const [comments, setComments] = useState(commentsData);

  const addNewReply = (targetId, newComment) => {
    const newUpdatedComments = updateComment(comments, targetId, newComment);
    setComments(newUpdatedComments);
  };

  const handleLike = (targetId) => {
    const updatedComments = toggleLike(comments, targetId);
    setComments(updatedComments);
  };

  return (
    <Comment
      commentData={comments}
      addNewReply={addNewReply}
      handleLike={handleLike}
    />
  );
}

export default App;
