import { SEARCHUSERS } from "./promiseUsersReducer";
import { Gq_findFriends } from "../GqlRequests";
import { actionPromise } from "./actionPromise";
import { gql } from "./gql";
import { toQuery } from "../components/toQuery/toQueryFunction";

const actionSearchUsers = (upd) => ({ type: SEARCHUSERS, dataUsers: upd });
// "queryFind":"[{\"$or\":[{\"login\":\"/Yona|Tristan/\"},{\"nick\":\"/Yona|Tri/\"}]}]",
//[{"$or":[{"login":"/Yona|Tristan/"},{"nick":"/Yona|Tristan/"}]}]

export const actionFindFriends = (inputStr) => async (dispatch) => {
  let jsonResult = JSON.stringify([toQuery(undefined, inputStr.split(" "))]); //undefined - используем поля по умолчанию

  let resultSearch = await dispatch(
    actionPromise(
      "searchFriends",
      gql(Gq_findFriends, {
        query: jsonResult,
      })
    )
  );
  console.log(resultSearch, "resultSearch");
  if (resultSearch?.data?.UserFind) {
    dispatch(actionSearchUsers(resultSearch.data.UserFind));
  }
};
