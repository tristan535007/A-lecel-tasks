import { promiseReducer } from "./promiseReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { actionSetLike } from "./actionGetPost";
import { promisePostReducer } from "./promisePostReducer";
import { authReducer } from "./authReducer";
import { actionLogin } from "./actionLogin";
import { actionAuthLogout } from "./actionAuthLogout";
import { actionPromise } from "./actionPromise";
import { gql } from "./gql";
import { promiseUsersReducer } from "./promiseUsersReducer";
import { actionGetPersonalData } from "./actionGetPersonalData";
import { actionSetAvatar, actionSetUpdMe } from "./actionGetUpdatePerson";
import { getFollowingPostsAc } from "./actionGetFollowingPosts";
import {
  actionPicturePostId,
  actionSetComment,
  actionSetPost,
} from "./actionAddComment";
import { actionRegistration } from "./action_Registration";
import { actionFindFriends } from "./actionFindFriends";

let store = createStore(
  combineReducers({
    promise: promiseReducer,
    post: promisePostReducer,
    auth: authReducer,
    users: promiseUsersReducer,
  }),
  applyMiddleware(thunk)
);

// store.subscribe(() => console.log(store.getState()));
window.store = store;

export {
  store,
  actionRegistration,
  actionLogin,
  actionAuthLogout,
  actionPromise,
  actionGetPersonalData,
  actionSetUpdMe,
  actionSetComment,
  getFollowingPostsAc,
  actionFindFriends,
  gql,
  actionSetPost,
  actionSetAvatar,
  actionPicturePostId,
  actionSetLike,
};
