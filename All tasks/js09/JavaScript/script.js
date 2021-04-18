//---------makeProfileTimer
/*
function makeProfileTimer() {
  let startTime = performance.now();
  alert("Замеряем время работы этого alert");
  function getEndTime() {
    return performance.now();
  }
  alert(((getEndTime() - startTime) / 1000).toFixed(3) + " sec");
}
let timer = makeProfileTimer();
console.log(timer);*/

//---------makeSaver
/*
function makeSaver(param) {
  let checParam = true;
  let result;
  return function () {
    if (checParam) {
      checParam = !checParam;
      return (result = param());
    }
    return result;
  };
}
let saver = makeSaver(Math.random);
let value1 = saver();

console.log(value1 + " value1");
let value2 = saver();

console.log(value2 + " value2");
console.log(value1 === value2);
var saver2 = makeSaver(
  () =>
    console.log("saved function called") ||
    [null, undefined, false, "", 0, Math.random()][Math.ceil(Math.random() * 6)]
);
var value3 = saver2();
var value4 = saver2();
console.log(value3 === value4);
*/

//---------Final Countdown
/*
function countDown(param) {
  for (let i = 0; i <= param; i++) {
    setTimeout(() => console.log(param - i), i * 1000);
  }
}

countDown(5);
*/

//------Self Invoked
/*
function selfInvokedCountDown(param, index = 0) {
  if (!index) index = param;
  if (param >= 0) {
    setTimeout(() => console.log(index - param), param * 1000);
    selfInvokedCountDown(param - 1, index);
  }
  return;
}
selfInvokedCountDown(5);
*/

//-------myBind

function myBind(method, context, arr) {
  return (...arg) => {
    let i = 0;
    let newArr = [];
    for (const data of arr) {
      if (data === undefined) {
        newArr.push(arg[i]);
        i++;
      } else {
        newArr.push(data);
      }
    }
    // console.log(...newArr);
    return method.call(context, ...newArr);
  };
}

var pow5 = myBind(Math.pow, Math, [undefined, 5]);
var cube = myBind(Math.pow, Math, [undefined, 3]);
var chessMin = myBind(Math.min, Math, [
  undefined,
  4,
  undefined,
  5,
  undefined,
  8,
  undefined,
  9,
]);
var zeroPrompt = myBind(prompt, window, [undefined, "0"]);
console.log(chessMin(-1, -5, 3, 15));
console.log(pow5(2));
console.log(cube(3));
console.log(zeroPrompt());
