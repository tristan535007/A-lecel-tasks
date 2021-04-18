import jwt_decode from "jwt-decode";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

function authReducer(state, action) {
  if (state === undefined) {
    //если в localStorage есть токен
    //добавить в action token из localStorage, и проимитировать LOGIN (action.type = 'LOGIN')
    // не делаем return {}
    //если localStorage пуст - return {}
    if (localStorage.authToken) {
      action.type = LOGIN;
      action.jwt = localStorage.authToken;
    } else {
      return {};
    }
  }
  if (action.type === LOGIN) {
    // console.log("ЛОГИН", action);
    localStorage.authToken = action.jwt;
    return { token: action.jwt, payload: jwt_decode(action.jwt) };
  }
  if (action.type === LOGOUT) {
    // console.log("ЛОГАУТ");
    localStorage.removeItem("authToken");
    return {};
  }
  return state;
}

export { authReducer, LOGOUT, LOGIN };
