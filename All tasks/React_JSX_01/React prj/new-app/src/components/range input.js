import React, { useState } from "react";

function RangeInput({ min, max }) {
  //2   10
  const [value, setValue] = useState("");
  //   console.log(value.length);
  return (
    <input
      placeholder={`enter a text between min:${min} max:${max}`}
      value={value}
      onChange={(ev) => setValue(ev.target.value)}
      style={
        +value.length < min || +value.length > max
          ? { background: "#CB6B6B" }
          : { background: "green" }
      }
    />
  );
}
export default RangeInput;
