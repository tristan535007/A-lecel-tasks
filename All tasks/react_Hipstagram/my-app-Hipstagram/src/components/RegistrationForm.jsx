import { React, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import history from "../history";
import pathComp from "../PathForRoute/pathObject";
import { actionRegistration } from "../reducers";

const valid = "is-valid";
const invalid = "is-invalid";
const validText = "Looks good!";

const RegistrationForm = ({ registration, isReg }) => {
  let [inputLogin, setInputLogin] = useState("");
  let [inputPasword, setInputPasword] = useState("");
  let [inputConfirm, setInputConfirm] = useState("");

  useEffect(() => {
    if (isReg) history.push(pathComp.my_profile);
  }, [isReg]);

  return (
    <Card className="text-center w-50 ml-auto mr-auto mt-5 border border-dark ">
      <Card.Header>
        <strong>Registration Form</strong>
      </Card.Header>
      <Card.Body>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationServer01">Enter your new login</label>
            <input
              value={inputLogin.trim()}
              type="text"
              className={"form-control"}
              id="validationServer01"
              required
              onChange={(e) => setInputLogin(e.target.value)}
            />
            <div className="valid-feedback">{validText}</div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="validationServer02">Enter your new password</label>
            <input
              value={inputPasword.trim()}
              type="text"
              className={`form-control ${
                inputPasword.trim() === inputConfirm.trim() &&
                inputPasword.trim() !== "" &&
                inputConfirm.trim() !== ""
                  ? valid
                  : invalid
              } `}
              id="validationServer02"
              required
              onChange={(e) => setInputPasword(e.target.value)}
            />
            <div className="valid-feedback">{validText}</div>
          </div>
        </div>

        <Card.Body>
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <input
                value={inputConfirm.trim()}
                placeholder="Confirm Password"
                type="text"
                className={`form-control ${
                  inputPasword.trim() === inputConfirm.trim() &&
                  inputPasword.trim() !== "" &&
                  inputConfirm.trim() !== ""
                    ? valid
                    : invalid
                } `}
                id="validationServer03"
                aria-describedby="validationServer03Feedback"
                required
                onChange={(e) => setInputConfirm(e.target.value)}
              />
              <div id="validationServer03Feedback" className="invalid-feedback">
                {inputPasword.trim() || inputConfirm.trim()
                  ? "Not a similar!"
                  : "You can not use empty field!"}
              </div>
            </div>
          </div>
        </Card.Body>
        <div className="form-row mb-2">
          <button
            disabled={
              inputPasword !== inputConfirm ||
              (inputPasword === "" && inputConfirm === "")
                ? true
                : false
            }
            className="btn btn-primary btn-lg btn-block "
            type="submit"
            onClick={() => {
              registration(inputLogin, inputPasword);
              setInputPasword("");
              setInputConfirm("");
            }}
          >
            Login
          </button>
        </div>
      </Card.Body>
    </Card>
  );
};

const CRegistrationForm = connect(
  (s) => ({
    isReg: s.auth?.token,
  }),
  { registration: actionRegistration }
)(RegistrationForm);

export { CRegistrationForm };
