//Multiplication Table
document.body.style.textAlign = "center";

let arr = [];
let tempArr = [];
for (let x = 0; x < 10; x++) {
  let tempArr = [];

  for (var y = 1; y < 10; y++) {
    if (x === 0) {
      tempArr[y - 1] = y;
    } else {
      tempArr[y - 1] = x * y;
    }
  }

  arr[x] = tempArr;
}

for (const i in arr) {
  let tr = document.createElement("tr");
  let td = document.createElement("td");
  td.innerText = i;
  table.appendChild(tr);
  tr.appendChild(td);
  changeBackGround(td);

  for (const iterator of arr[i]) {
    let td = document.createElement("td");
    td.innerText = iterator;
    tr.appendChild(td);
    changeBackGround(td);
  }
}

function changeBackGround(cell) {
  cell.onmouseover = function (event) {
    for (let x = 0; x < arr.length; x++) {
      for (let y = 0; y < arr.length; y++) {
        cell.parentElement.parentElement.children[x].children[
          y
        ].style.background = "";
      }
    }
    for (let i = 0; i <= cell.cellIndex; i++) {
      cell.parentElement.parentElement.children[
        cell.parentElement.rowIndex
      ].children[i].style.background = "green";
    }
    for (let i = 0; i <= cell.parentElement.rowIndex; i++) {
      cell.parentElement.parentElement.children[i].children[
        cell.cellIndex
      ].style.background = "green";
    }
    this.style.background = "red";
  };
}

//--------------Calc
let firstInput = document.createElement("input");
let secondInput = document.createElement("input");
let resultWindow = document.createElement("input");
let button = document.createElement("button");
let br = document.createElement("br");

document.body.appendChild(firstInput).id = "firstInput";
document.body.appendChild(secondInput).id = "secondInput";
document.body.appendChild(button).id = "button";
document.body.appendChild(resultWindow).id = "result";
document.body.appendChild(br);

button.innerText = "Press for result!";

firstInput.type = "number";
secondInput.type = "number";
firstInput.style.margin = "50px 50px 0px 0px";
secondInput.style.marginRight = "50px";
button.style.marginRight = "20px";
result.placeholder = "There is will be aresult";

button.onclick = () => (result.value = +firstInput.value + +secondInput.value);

//------------Live calc

let firstInput1 = document.createElement("input");
let secondInput1 = document.createElement("input");
let resultWindow1 = document.createElement("input");

document.body.appendChild(firstInput1).id = "firstInput1";
document.body.appendChild(secondInput1).id = "secondInput1";
document.body.appendChild(resultWindow1).id = "result1";

firstInput1.type = "number";
secondInput1.type = "number";
firstInput1.style.margin = "50px 50px 0px 0px";
secondInput1.style.margin = "50px 50px 0px 0px";
result1.placeholder = "There is will be live aresult";

function getLiveCalc() {
  result1.value = +firstInput1.value + +secondInput1.value;
}

firstInput1.oninput = getLiveCalc;
secondInput1.oninput = getLiveCalc;
