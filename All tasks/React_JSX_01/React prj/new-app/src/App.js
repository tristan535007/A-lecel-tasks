import React from "react";
import PasswordConfirm from "./components/password confirm";
import RangeInput from "./components/range input";
import Spoiler from "./components/spoiler";
import TimeControl from "./components/time control";
import Timer from "./components/timer";
import { TimerContainer } from "./components/TimerContainer";

const SecondsTimer = ({ seconds }) => <h2>{seconds}</h2>;
function App() {
  return (
    <div className="wrapper">
      <Spoiler header={<h1>Header 1</h1>} open={true}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          veniam, fuga nihil tempore deserunt laboriosam. Dolore ipsa odio
          impedit dolorem excepturi? Fugit pariatur velit iusto, error voluptas
          perferendis laboriosam doloremque!
        </p>
      </Spoiler>
      <Spoiler header={<h2>Header 2</h2>} open={false}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          veniam, fuga nihil tempore deserunt laboriosam. Dolore ipsa odio
          impedit dolorem excepturi? Fugit pariatur velit iusto, error voluptas
          perferendis laboriosam doloremque!
        </p>
      </Spoiler>
      <RangeInput min={2} max={10} />
      <PasswordConfirm min={2} />
      <Timer secondS={15} minuteS={0} hourS={0} />
      <TimeControl />
      <TimerContainer seconds={5} refresh={100} render={SecondsTimer} />
    </div>
  );
}

export default App;
