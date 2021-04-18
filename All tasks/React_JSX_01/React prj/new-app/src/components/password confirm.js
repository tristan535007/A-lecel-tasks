import React, { useState } from "react";
const styles = {
  div: { display: "flex", justifyContent: "space-between", margin: "15px" },

  input: {
    background: "green",
  },
};
function PasswordConfirm({ min }) {
  //2
  const [enterPassword, setPassword] = useState("qwerty");
  const [repeatPassword, setRepeatPassword] = useState("qwerty");
  return (
    <div style={styles.div}>
      <input
        style={
          (enterPassword.toLocaleLowerCase() ===
            repeatPassword.toLocaleLowerCase() &&
            enterPassword.length > min &&
            styles.input) ||
          null
        }
        value={enterPassword.toLocaleLowerCase()}
        type="password"
        placeholder="enter a password"
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <input
        style={
          (enterPassword.toLocaleLowerCase() ===
            repeatPassword.toLocaleLowerCase() &&
            repeatPassword.length > min &&
            styles.input) ||
          null
        }
        value={repeatPassword.toLocaleLowerCase()}
        type="password"
        placeholder="repeat a password"
        onChange={(ev) => setRepeatPassword(ev.target.value)}
      />
    </div>
  );
}
export default PasswordConfirm;
