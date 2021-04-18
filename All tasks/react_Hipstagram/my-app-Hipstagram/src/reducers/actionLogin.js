import { Rq_Login_Password } from "../GqlRequests";
import { actionPromise, gql } from "../reducers";
import { LOGIN } from "./authReducer";

const actionAuthLogin = (jwt) => ({ type: LOGIN, jwt });

const actionLogin = (login, password) => async (dispatch) => {
  let loginData = await dispatch(
    actionPromise("login", gql(Rq_Login_Password, { login, password }))
  );
  console.log(loginData, "loginData");
  if (loginData && loginData.data.login) {
    dispatch(actionAuthLogin(loginData.data.login));
  }
};

export { actionLogin, actionAuthLogin };
