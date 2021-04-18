import { RENEWCOMMENTS, NEWPICTUREPOSTID } from "./promisePostReducer";
import { Gq_setComment, getPost, Gq_newPost } from "../GqlRequests";
import { actionPromise } from "./actionPromise";
import { gql } from "./gql";

const actionReNewComments = (updComm) => ({
  type: RENEWCOMMENTS,
  newComments: updComm,
});

//добавляем в стор текущий id картинки поста
const actionPicturePostId = (id) => ({
  type: NEWPICTUREPOSTID,
  newCurrentPictureId: id,
});
const actionSetComment = (comment = "", postId) => async (dispatch) => {
  //отправляем коммент: айди коммента + текст
  const commentObj = { text: comment, post: { _id: postId } };
  //пишем await чтобы избежать прихода старых данных
  await gql(Gq_setComment, {
    addPostComment: commentObj,
  });

  // отправляем запрос на обновление коменнтов по айди поста
  const idJson = JSON.stringify([{ _id: postId }]);
  let commentsData = await dispatch(
    actionPromise(
      "reNewPostComments",
      gql(getPost, {
        query: idJson,
      })
    )
  );
  // console.log(commentsData, "commentsData");
  if (commentsData?.data?.PostFindOne) {
    dispatch(actionReNewComments(commentsData.data.PostFindOne));
  }
};

// "post":{
//   "text":"My 5-th post",
//   "title":"Life is good",
//   "comments":{
//     "text": "Nice post Bro, call me later!"
//   },
//   "images":[{"_id":"605799312abbf719f974be08"}]
// },

//-----------НОВЫЙ ПОСТ
const actionSetPost = (text, title, pictureId) => async (dispatch) => {
  await gql(Gq_newPost, {
    post: { text, title, images: [{ _id: pictureId }] },
  });

  // dispatch(getFollowingPostsAc([store.getState().auth.payload?.sub?.id]));
};

export { actionSetComment, actionSetPost, actionPicturePostId };
