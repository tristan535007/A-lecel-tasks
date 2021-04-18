import { PERSONAL } from "../reducers/promiseUsersReducer";
import { Gq_get_following_posts, Gq_personal_Data } from "../GqlRequests";
import { actionPromise } from "./actionPromise";
import { gql } from "./gql";
import { actionGetFollowingPosts } from "./actionGetFollowingPosts";

//"query": "[{\"_id\": \"602c129ae7cb2624d089b5de\" }]",
const actionPersonalData = (pd, myPosts) => ({
  type: PERSONAL,
  myInfo: pd,
  myPosts,
});

export const actionGetPersonalData = (myId) => async (dispatch) => {
  const myIdJson = JSON.stringify([{ _id: myId }]);
  const myJsonPosts = JSON.stringify([
    { ___owner: { $in: [myId] } },
    { sort: [{ _id: -1 }] },
  ]);
  //---персональные данные
  let personalData = await dispatch(
    actionPromise("personalData", gql(Gq_personal_Data, { query: myIdJson }))
  );

  //---запрашиваем все мои посты
  let allMyPosts = await dispatch(
    actionPromise(
      "allMyPosts",
      gql(Gq_get_following_posts, { usersList: myJsonPosts })
    )
  );

  // console.log(personalData, "personalData");
  // console.log(allMyPosts, "allMyPosts");
  if (personalData?.data?.UserFindOne && allMyPosts?.data?.PostFind) {
    dispatch(
      actionPersonalData(
        personalData.data.UserFindOne,
        allMyPosts.data.PostFind
      )
    );
  }
};
