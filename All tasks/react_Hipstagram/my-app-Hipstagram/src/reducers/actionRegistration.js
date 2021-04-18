import { GQ_registration } from "../GqlRequests";

const actionRegistration = (result) => ({ type: REGISTRATION, result }); //нужно помещать в стор???

const actionReg = (login, password) => async (dispatch) => {
  let regData = await dispatch(
    actionPromise("registration", gql(GQ_registration, { login, password }))
  );
  console.log(regData, "regData");
};

export { actionReg };
