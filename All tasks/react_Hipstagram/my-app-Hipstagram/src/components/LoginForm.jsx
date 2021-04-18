import { React, useEffect, useState } from "react";
import { actionLogin } from "../reducers";
import { connect } from "react-redux";
import { Loader } from "../layout";
import { NavLink } from "react-router-dom";
import pathComp from "../PathForRoute/pathObject";
import history from "../history";

const LoginForm = ({ onLogin, spinerResponce, login }) => {
  let [loginInput, setLogin] = useState("Tristan");
  let [password, setPassword] = useState("535007");
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    // tracking for spinerResponce and make a toggle in loading
    if (spinerResponce === "RESOLVED") {
      setLoading(false);
    }
    login ? history.push(pathComp.my_profile) : history.push(pathComp.login);
  }, [spinerResponce, login]);

  return (
    <>
      <div style={{ width: "450px" }} className="container-sm mt-5">
        <div className="form-group">
          <label htmlFor="exampleDropdownFormEmail2">
            <p className="h3">Log in</p>
          </label>
          <input
            value={loginInput}
            type="text"
            className="form-control"
            id="exampleDropdownFormEmail2"
            onChange={(ev) => setLogin(ev.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleDropdownFormPassword2">Password</label>
          <input
            value={password}
            type="password"
            className="form-control"
            id="exampleDropdownFormPassword2"
            onChange={(ev) => setPassword(ev.target.value)}
          />
        </div>
        {/* <div className="form-group">
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="dropdownCheck2"
          />
          <label className="form-check-label" htmlFor="dropdownCheck2">
            Remember me
          </label>
        </div>
      </div> */}
        <button
          style={loading ? { display: "none" } : { display: "" }}
          type="button"
          className="btn btn-primary btn-lg btn-block"
          onClick={() => {
            setLoading(true);
            onLogin(loginInput, password);
          }}
        >
          Login
        </button>
        {loading && <Loader />}
      </div>
      <div className="d-flex justify-content-center">
        <p className="lead align-self-center" style={{ marginTop: "1em" }}>
          <em> Not registered? </em>
          <NavLink to="/registration"> Create new account?</NavLink>
        </p>
      </div>
    </>
  );
};

//(s,props) 2й параметр пропсы например <CLoginForm a="5"/> в пропсах будет 5

//spinerResponce ответ c actionLogin и logout
const CLoginForm = connect(
  (s) => ({
    login: s.auth.payload && s.auth.payload.sub.login,
    spinerResponce: s.promise.login && s.promise.login.status,
  }),
  {
    onLogin: actionLogin,
  }
)(LoginForm);

export default CLoginForm;
