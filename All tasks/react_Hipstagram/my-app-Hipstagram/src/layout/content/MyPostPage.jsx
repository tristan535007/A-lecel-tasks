import React from "react";
import { FeedItem, ListContent } from "..";
import { connect } from "react-redux";
const MyPostPage = ({ myPosts }) => {
  return (
    <ListContent>
      {!Array.isArray(myPosts) || myPosts.length === 0 // проверка на поле в myFollowingPosts, если есть значит есть подписчики с постами, тогда мапим
        ? "No any posts yet you should make some!"
        : myPosts.map((post) => {
            return <FeedItem key={post.createdAt} post={post} />;
          })}
    </ListContent>
  );
};

export const CMyPostPage = connect(
  (s) => ({
    myPosts: s.users?.myPosts,
  }),
  null
)(MyPostPage);
