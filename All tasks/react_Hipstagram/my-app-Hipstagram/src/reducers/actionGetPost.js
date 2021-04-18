import { getFollowingPostsAc } from ".";
import { Gq_addLike } from "../GqlRequests";
import { gql } from "./gql";

const actionSetLike = (postId) => async (dispatch) => {
  let result = await gql(Gq_addLike, { like: { post: { _id: postId } } });

  console.log(result?.data?.LikeUpsert?.post.owner._id, "id");
  if (result?.data?.LikeUpsert?.post.owner._id) {
    //передаем id  owner-a для обн стейта
    dispatch(getFollowingPostsAc([result?.data?.LikeUpsert?.post.owner._id]));
  }
};

export { actionSetLike };
