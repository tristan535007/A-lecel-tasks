let gameOptions = ["stone", "scissors", "paper"];

let input = document.getElementById("input_field");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("button").click();
  }
});

function getData() {
  let fieldHtmlData = document.getElementById("input_field").value;
  let transformHtmlData = String(fieldHtmlData).toLocaleLowerCase(); //paper
  let rules = false;
  for (let index in gameOptions) {
    if (transformHtmlData == gameOptions[index]) {
      rules = true;
      document.getElementById("input_field").value = "";
      document.getElementById("user_window").innerHTML = transformHtmlData;
    }
  }
  if (!rules) {
    alert("You've written down wrong options");
  } else {
    compereOptions(transformHtmlData, getRandom());
  }

  return undefined;
}

function getRandom() {
  for (let index = 0; index < 100; index++) {
    let randomIndex = Math.floor(Math.random() * 10);
    if (randomIndex <= 2) {
      document.getElementById("computer_window").innerHTML =
        gameOptions[randomIndex];
      return gameOptions[randomIndex];
    }
  }
  return undefined;
}

function textResult(textParametr) {
  document.getElementById("user_window-result").innerHTML = textParametr;
}
function compereOptions(playrOpt, computerOpt) {
  console.log(playrOpt, computerOpt);
  let won = "You won!";
  let loose = "You lose!";
  let draw = "Draw!";
  if (playrOpt === computerOpt) textResult(draw);
  if (playrOpt === "stone" && computerOpt === "scissors") textResult(won);
  if (playrOpt === "stone" && computerOpt === "paper") textResult(loose);
  if (playrOpt === "scissors" && computerOpt === "stone") textResult(loose);
  if (playrOpt === "scissors" && computerOpt === "paper") textResult(won);
  if (playrOpt === "paper" && computerOpt === "stone") textResult(won);
  if (playrOpt === "paper" && computerOpt === "scissors") textResult(loose);
}
