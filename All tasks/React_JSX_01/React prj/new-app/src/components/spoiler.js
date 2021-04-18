import React, { useState } from "react";
function Spoiler({ header = <div></div>, open, children }) {
  const [hide, setState] = useState(open);
  return (
    <div onClick={() => setState(!hide)}>
      {header}
      <br></br>
      <div>{hide && children}</div>
    </div>
  );
}
export default Spoiler;
