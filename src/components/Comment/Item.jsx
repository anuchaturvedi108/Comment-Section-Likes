import { useState, useCallback } from 'react';
import styles from './styles.module.css';

export const CommentItem = ({ comment, addNewReply, handleLike }) => {
  const [showReply, setShowReply] = useState(false);
  const [showAddReply, setShowAddReply] = useState(false);
  const [newComment, setNewComment] = useState('');

  const toggleReplyVisibility = useCallback(
    () => setShowReply((prev) => !prev),
    []
  );
  const toggleAddReplyVisibility = useCallback(
    () => setShowAddReply((prev) => !prev),
    []
  );

  const addComment = useCallback(() => {
    if (newComment.trim()) {
      addNewReply(comment.id, newComment.trim());
      setShowAddReply(false);
      setShowReply(true);
      setNewComment('');
    }
  }, [newComment, addNewReply, comment.id]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        addComment();
      }
    },
    [addComment]
  );

  return (
    <div className={styles.commentContainer}>
      <div className={styles.details}>
        <div>{comment.comment}</div>
        <div className={styles.controls}>
          <span onClick={() => handleLike(comment.id)}>
            Like ({comment.likes})
          </span>
          {comment.subComments.length > 0 && (
            <span onClick={toggleReplyVisibility}>
              {showReply ? 'Hide Reply' : 'View Reply'}
            </span>
          )}
          <span onClick={toggleAddReplyVisibility}>
            {showAddReply ? 'Cancel' : 'Add Reply'}
          </span>
        </div>
      </div>
      {showReply && (
        <div className={styles.subComments}>
          {comment.subComments.map((subComment) => (
            <CommentItem
              key={subComment.id}
              comment={subComment}
              addNewReply={addNewReply}
              handleLike={handleLike}
            />
          ))}
        </div>
      )}
      {showAddReply && (
        <input
          className={styles.replyBox}
          type="text"
          autoFocus
          placeholder="Enter your reply!"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          onBlur={addComment}
          onKeyDown={handleKeyDown}
        />
      )}
    </div>
  );
};
