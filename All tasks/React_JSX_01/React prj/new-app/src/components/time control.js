import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Timer from "./timer";

const styles = {
  input: { margin: "15px", width: "50px" },
  div: { display: "flex", justifyContent: "space-between", margin: "15px" },
};

function setCondition(e, maxValue, setFunc) {
  let num = Number(e.target.value);
  num && !(num > maxValue) ? setFunc(num) : setFunc(0);
}

function TimeControl() {
  //   console.log(setMyTimer);
  const [hh, setHh] = useState(0);
  const [mm, setMm] = useState(0);
  const [ss, setSs] = useState(0);
  return (
    <Container>
      <p>hh</p>
      <input
       type="text"
        style={styles.input}
        value={hh > 12 ? 12 : hh}
        onChange={(e) => setCondition(e, 12, setHh)}
      />

      <p>mm</p>
      <input
        type="text"
        style={styles.input}
        value={mm}
        onChange={(e) => setCondition(e, 60, setMm)}
      />

      <p>ss</p>
      <input
        type="text"
        style={styles.input}
        value={ss}
        onChange={(e) => {
          setCondition(e, 60, setSs);
        }}
      />

      <Timer secondS={ss} minuteS={mm} hourS={hh} />
    </Container>
  );
}
export default TimeControl;
