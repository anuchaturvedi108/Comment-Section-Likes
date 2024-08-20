export const updateComment = (comments, targetId, newComment) => {
  return comments.map((comment) => {
    if (comment.id === targetId) {
      return {
        ...comment,
        subComments: [
          ...comment.subComments,
          {
            id: Date.now(), // Use Date.now() instead of new Date().getTime()
            comment: newComment,
            subComments: [],
            likes: 0,
          },
        ],
      };
    }

    return {
      ...comment,
      subComments: updateComment(comment.subComments, targetId, newComment),
    };
  });
};

export const toggleLike = (comments, targetId) => {
  return comments.map((comment) => {
    if (comment.id === targetId) {
      return {
        ...comment,
        likes: comment.likes + 1, // Increment likes
      };
    }

    return {
      ...comment,
      subComments: toggleLike(comment.subComments, targetId),
    };
  });
};
