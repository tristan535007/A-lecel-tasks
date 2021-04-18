import { Gq_registration } from "../GqlRequests";
import { actionLogin, actionPromise, gql } from ".";

const actionRegistration = (login, password) => async (dispatch) => {
  let regData = await dispatch(
    actionPromise("registration", gql(Gq_registration, { login, password }))
  );

  if (regData && regData.data.createUser) {
    dispatch(actionLogin(login, password));
  }
};

export { actionRegistration };
