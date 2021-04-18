import { UPDATEME } from "./promiseUsersReducer";
import { Gq_mutation_update_person, Gq_newAvatar } from "../GqlRequests";
import { actionPromise } from "./actionPromise";
import { gql } from "./gql";
import { actionGetPersonalData } from "./actionGetPersonalData";

// "user": {
//   "_id": "602c129ae7cb2624d089b5de",
//   "nick": "Tristan",
//   "following": [
//     {
//       "_id": "5d6fccfc5fce6722147978f2"
//     },
//     {
//       "_id": "5d5d825bc6a7071408ac1e05"
//     }
//   ]
// }
const actionGetUpdatePerson = (upd) => ({ type: UPDATEME, updatePerson: upd });
// const actionApdAva = (avatarUrl) => ({
//   type: UPDAVA,
//   updatedAvatar: avatarUrl,
// });

// Используется для обновления моих данных таких как ник ава и др

const actionSetUpdMe = (_id, nick, following) => async (dispatch) => {
  // console.log(store.getState().users.myInfo.avatar);
  const user = {
    _id,
    nick,
    following,
  };
  // console.log(user, "user");
  let updateData = await gql(Gq_mutation_update_person, {
    user: user,
  });

  // console.log(updateData, "UPD");
  if (updateData) {
    dispatch(actionGetPersonalData(_id));
  }
};

const actionSetAvatar = (imgId, myID) => async (dispatch) => {
  let result = await gql(Gq_newAvatar, {
    user: { _id: myID, avatar: { _id: imgId } },
  });

  if (result) {
    console.log(result, "result");
    dispatch(actionGetPersonalData(myID));
  }
};

export { actionSetUpdMe, actionSetAvatar };
