import { React, useEffect } from "react";
import { connect } from "react-redux";
import { actionSetComment, actionSetLike } from "../../reducers";
import { ListContent } from "..";
import { PagePostItem } from "../../pages/PagePostItem";

const PostPage = ({
  match: {
    params: { _id },
  },
  postsCollection = [],
  addComment,
  setLike,
}) => {
  let postContent; // id приходит в match, postsCollection из стейта => достаем пост который равен тому что в match
  postsCollection.forEach((post) => {
    if (post._id === _id) postContent = post;
  });

  return (
    <ListContent>
      {(postsCollection.length && (
        <PagePostItem
          addComment={addComment}
          post={postContent}
          setLike={setLike}
        />
      )) || <p>Try againe</p>}
    </ListContent>
  );
};

export const CPostPage = connect(
  (s) => ({
    postsCollection: s.post?.myFollowingPosts,
  }),
  { addComment: actionSetComment, setLike: actionSetLike }
)(PostPage);
