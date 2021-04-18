import { actionPromise, gql } from ".";
import { Gq_getUsers } from "../GqlRequests";
import { USERS } from "./promiseUsersReducer";

export const actionUsers = (dataUsers) => ({
  type: USERS,
  dataUsers,
});

// "someAmountUsers":"[{},{\"skip\":[0],\"limit\":[10]}]"
//"sort\":[{\"_id\":1}

const actionAllUsers = (limitArg) => async (dispatch) => {
  const usersQuery = JSON.stringify([
    {},
    { sort: [{ _id: 1 }], limit: [limitArg] },
  ]);

  let usersData = await dispatch(
    actionPromise("allUsers", gql(Gq_getUsers, { someAmountUsers: usersQuery }))
  );
  // console.log(usersData, "Data");

  if (usersData?.data?.UserFind) {
    dispatch(actionUsers(usersData.data.UserFind));
  }
};

export { actionAllUsers };
