import { CommentItem } from './Item';

const Comment = (props) => {
  const { commentData, addNewReply, handleLike } = props;
  return (
    <>
      {commentData.map((comment) => (
        <CommentItem
          comment={comment}
          key={comment.id}
          addNewReply={addNewReply}
          handleLike={handleLike}
        />
      ))}
    </>
  );
};

export default Comment;
