// Comment for git bot

const totalFlats = 36;
const amountOfFlats = 4;
let input = document.getElementById("flatNumber");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("button").click();
    getData();
  }
});
function getData() {
  let htmlData = document.getElementById("flatNumber").value;
  let numOfFlat = Number(htmlData);
  if (!isNaN(numOfFlat) && Math.sign(numOfFlat) !== -1 && numOfFlat > 0) {
    document.getElementById("floor").innerHTML = getEquationOfFlat(numOfFlat);
    document.getElementById("entrance").innerHTML = getEquationOfEntrance(
      numOfFlat
    );
  } else {
    alert("Enter a number or positive number bigger then 0");
  }
}

function getEquationOfFlat(value) {
  let resultOfFlat = ((value - 1) % totalFlats) / amountOfFlats + 1;
  let transformOfFlat = Math.floor(resultOfFlat);
  return transformOfFlat;
}
function getEquationOfEntrance(value) {
  let resultOfEntrance = value / totalFlats + 1;
  let transformEntrance = Math.floor(resultOfEntrance);
  return transformEntrance;
}
