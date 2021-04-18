import { Gq_get_following_posts } from "../GqlRequests";
import { actionPromise } from "./actionPromise";
import { gql } from "./gql";
import { FOLLOWING } from "./promisePostReducer";
import { store } from ".";
const actionGetFollowingPosts = (data) => ({
  type: FOLLOWING,
  myFollowingPosts: data,
});
//"usersList":"[{\"___owner\": { \"$in\": [\"5d6fccfc5fce6722147978f2\",\"5d8c89140f14012445c3bb5a\"] }},
//{\"sort\":[{\"_id\":1}],\"skip\":[0],\"limit\":[1]}]"

const getFollowingPostsAc = (
  followingArr = [store.getState().auth.payload?.sub?.id], //мой id по дефолту для отображения моих постов
  skip = 0,
  limit = 0
) => async (dispatch) => {
  //myFollowingJson - регулярное выражене, в нее попадает массив фолловеров и разварачивается + условие колва скач постов за раз
  const myFollowingJson = JSON.stringify([
    { ___owner: { $in: [...followingArr] } },
    { sort: [{ _id: -1 }], skip: [skip], limit: [limit] },
  ]);
  let followData = await dispatch(
    actionPromise(
      "myFollowingPosts",
      gql(Gq_get_following_posts, { usersList: myFollowingJson })
    )
  );
  //неплохо бы при подгрузке прикрутить прелоудер.....
  // console.log(followData?.data?.PostFind, "followData_POSTS");
  // console.log(myFollowingJson, "JSON");
  if (followData?.data?.PostFind && followData?.data?.PostFind.length !== 0) {
    dispatch(actionGetFollowingPosts(followData.data.PostFind));
  }
};

export { getFollowingPostsAc, actionGetFollowingPosts };
