let history = ["1", "1", "1", "1"];
let predictArray = [];
let rndNumber = 1;

do {
  let randomPredict = getRandomNum();
  if (predictArray[history] === undefined) {
    console.log(`I think it's ${randomPredict} - from Math Random`);
    rndNumber = prompt("enter a number from 0 to 1");
    randomPredict === rndNumber
      ? alert("I've knew it!")
      : alert("I'm only a machine :(");
  } else {
    console.log(`I think it's ${predictArray[history]} - from predictArray`);
    rndNumber = prompt("enter a number from 0 to 1");
    predictArray[history] === rndNumber
      ? alert("I've knew it!")
      : alert("I'm only a machine :(");
  }

  if (rndNumber) {
    predictArray[history] = rndNumber;
    history.push(rndNumber);
  }
  if (history.length === 5) history.shift();
  // console.log(predictArray);
  // console.log(randomPredict);
} while (rndNumber);

function getRandomNum() {
  let num = "";
  while (!(num === "0" || num === "1")) {
    num = String(Math.trunc(Math.random() * 5));
  }
  return num;
}

