import { React, useEffect, useState } from "react";
import { FeedItem, ListContent } from "..";
import { connect } from "react-redux";
import { getFollowingPostsAc } from "../../reducers";
const Feed = ({ followingPosts, myFollowing = [], postsCollection }) => {
  // console.log(postsCollection, "postsCollection", myFollowing, "myFollowing");
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight; //высчитываем высоту страницы

  let [skip, setSkip] = useState(0); // данные для атрибута skip - пропустить
  let [limit, setLimit] = useState(2); //данные для атрибута limit
  let [offset, setOffset] = useState(0); // значене при скролле

  useEffect(() => {
    //myFollowing проверяем есть ли поле following и [] ли это
    if (
      (Array.isArray(myFollowing) && myFollowing.length === 0) ||
      !postsCollection
    ) {
      console.log("1й");
      followingPosts(
        myFollowing.map((friend) => friend._id),
        skip,
        limit
      );
      setSkip(skip + 2);
      setLimit(limit + 2);
    }
    //отслеживает событие скролла
    window.addEventListener("scroll", () => {
      setOffset(Math.ceil(document.documentElement.scrollTop));
    });
    if (offset >= height && Array.isArray(myFollowing)) {
      console.log("2й");
      followingPosts(
        myFollowing.map((friend) => friend._id),
        skip,
        limit
      );
      setSkip(skip + 2);
      setLimit(limit + 2);
    }

    // console.log(skip, limit, offset, "ofs >=", height, "hei");
  }, [offset]);

  return (
    <ListContent>
      {!Array.isArray(postsCollection) // проверка на поле в myFollowingPosts, если есть значит есть подписчики с постами, тогда мапим
        ? "No any posts yet you should make a friends!"
        : postsCollection.map((post) => {
            return <FeedItem key={post.createdAt} post={post} />;
          })}
    </ListContent>
  );
};

export const CFeed = connect(
  (s) => ({
    myFollowing: s.users?.myInfo?.following,
    postsCollection: s.post?.myFollowingPosts,
  }),
  { followingPosts: getFollowingPostsAc }
)(Feed);
