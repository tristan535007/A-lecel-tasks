const point = ".";
const grid = "#";
const lineRow = 11;
const lineColumn = 6;
let lineText = "";
let leftLength = 5;
let rightLength = 5;
let newString = "";
debugger;
for (let i = 0; i < lineColumn; i++) {
  lineText = "";
  for (let r = 0; r < leftLength; r++) {
    lineText += point + " ";
  }
  for (let m = 0; m < lineRow - (leftLength + rightLength); m++) {
    lineText += grid + " ";
  }
  for (let l = 0; l < rightLength; l++) {
    lineText += point + " ";
  }
  leftLength -= 1;
  rightLength -= 1;
  newString += lineText + "\n";
}
console.log(newString);
