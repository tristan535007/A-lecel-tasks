//html tree
/*
 <body>
        <div>
            <span>Enter a data please:</span><br/>
            <input type='text' id='name'>
            <input type='text' id='surname'>
        </div>
        <div>
            <button id='ok'>OK</button>
            <button id='cancel'>Cancel</button>
        </div>
    </body>*/

/*let body = {
  subTags: [
    {
      tagName: "dir",
      subTags: [
        { tagName: "span", text: "Enter a data please:" },
        { tagName: "br" },
        { tagName: "input", attrs: { type: "text", id: "name" } },
        { tagName: "input", attrs: { type: "text", id: "surname" } },
      ],
    },

    {
      tagName: "dir",
      subTags: [
        { tagName: "button", attrs: { id: "ok" }, text: "OK" },
        { tagName: "button", attrs: { id: "cancel" }, text: "Cancel" },
      ],
    },
  ],
};
console.log(body.subTags[1].subTags[1]);
console.log(body.subTags[0].subTags[3].attrs.id);
*/

//declarative fields
/*
function declarative(someObject) {
  for (const key in someObject) {
    if (typeof someObject[key] === "string") {
      someObject[key] = prompt(
        "write down " + key + " for example: " + someObject[key]
      );
    } else if (typeof someObject[key] === "number") {
      someObject[key] = +prompt(
        "write down " + key + " for example: " + someObject[key]
      );
    } else if (typeof someObject[key] === "boolean") {
      alert("Choose " + key + "?");

      someObject[key] = confirm("yes or no");
    } else {
      for (const key2 in someObject.resolution) {
        someObject.resolution[key2] = +prompt(
          "write down " + key2 + " for example: " + someObject.resolution[key2]
        );
      }
    }
  }
  console.log(someObject);
}

var notebook = {
  brand: "HP",
  type: "440 G4",
  model: "Y7Z75EA",
  ram: 4,
  size: "14",
  weight: 1.8,
  resolution: {
    width: 1920,
    height: 1080,
  },
};
declarative(notebook);

var phone = {
  brand: "meizu",
  model: "m2",
  ram: 2,
  color: "black",
};
declarative(phone);

var person = {
  name: "Donald",
  surname: "Trump",
  married: true,
};
declarative(person);
*/

//object links
/*
var person = {
  name: "Donald",
  surname: "Trump",
  married: true,
  smartphone: "",
  laptop: "",
};
var notebook = {
  brand: "HP",
  type: "440 G4",
  model: "Y7Z75EA",
  ram: 4,
  size: "14",
  weight: 1.8,
  resolution: {
    width: 1920,
    height: 1080,
  },
  owner: "",
};
var phone = {
  brand: "meizu",
  model: "m2",
  ram: 2,
  color: "black",
  owner: "",
};

person.smartphone = phone;
person.laptop = notebook;
notebook.owner = person;
phone.owner = person;

console.log(
  person.smartphone.owner.laptop.owner.smartphone == person.smartphone
);*/

//imperative array fill 3

/*let emptyArr = [];
emptyArr[0] = prompt("write down any data");
emptyArr[1] = prompt("write down any data");
emptyArr[2] = prompt("write down any data");
console.log(emptyArr);*/

//while confirm
/*let someData = "0";
while (someData != "") {
  someData = prompt("write down any data");
  if (someData == null) break;
  console.log(someData);
}*/

//array fill

/*let amptyArr = [];
while (amptyArr) {
  let data = prompt("any data");
  if (data == null || data === "") {
    break;
  }
  amptyArr.push(data);
}
console.log(amptyArr);*/

//array fill nopush
/*let amptyArr = [];
let i = 0;
while (amptyArr) {
  let data = prompt("any data");
  if (data == null || data === "") {
    break;
  }
  amptyArr[i] = data;
  i++;
}
console.log(amptyArr);*/

//infinite probability
/*let counter = 1;
while (counter) {
  let random = Math.random();
  console.log(random);
  if (random > 0.9) break;
  counter++;
}
console.log("Total iterations " + counter);*/

//empty loop
/*
let data = prompt("any text");
while (data != "") {
  data = prompt("any text");
}*/

//progression sum    29.11.20 - Fixed this terror :)
/*
let anyNumber = +prompt("any number");
let arr = [];

for (let i = 1; i < anyNumber; i += 3) {
  arr.push(i);
}
console.log(arr.reduce((a, b) => a + b));*/

//chess one line
/*
let lineLength = +prompt("write down a line length of this symbols #", "7");
let symbol = " # ";
let newString = "";

for (let index = 0; index < lineLength; index++) {
  newString += symbol;
}
console.log(newString);*/

//numbers

let string,
  newString = "";
let newLine = "\n";
for (let column = 0; column < 10; column++) {
  string = "";
  for (let row = 0; row < 10; row++) {
    let transformTostring = String(row);
    string += transformTostring;
  }
  newString += string + newLine;
}
console.log(newString);

//chess
/*let grid = "#";
let point = ".";
let firstLine,
  secondLine,
  newBlock = "";

for (let i = 0; i < 5; i++) {
  firstLine = "";
  secondLine = "";

  for (let j = 0; j < 6; j++) {
    firstLine = firstLine + point + grid;
  }
  for (let k = 0; k < 6; k++) {
    secondLine = secondLine + grid + point;
  }
  newBlock = newBlock + firstLine + "\n" + secondLine + "\n";
}
console.log(newBlock);*/

//cubes
/*
let arrayN = +prompt("input length of arr", "5");
let arr = [];
let cube = 3;

for (let index = 0; index < arrayN; index++) {
  arr.push(index);
}
console.log(arr);

for (let index2 = 0; index2 < arr.length; index2++) {
  arr[index2] = arr[index2] ** cube;
}
console.log(arr);*/

//multiply table
/*
let arr = [];
let arr2 = [];
for (let x = 0; x <= 10; x++) {
  let arr2 = []; //1.2.3.4

  for (var y = 0; y <= 10; y++) {
    arr2[y] = x * y;
  }

  arr[x] = arr2;
}

console.log(arr[8][9]);*/

//matrix to html table
/*
let arr = [];
let arr2 = [];
let textArr2 = "";
let multTable = "";
for (let x = 0; x <= 10; x++) {
  let textArr2 = "";
  let arr2 = []; //1.2.3.4,5,6,7,8,9,10

  for (var y = 0; y <= 10; y++) {
    let transform = "";
    arr2[y] = x * y;
    transform = String(arr2[y]);
    textArr2 += transform + " ";
  }
  multTable += textArr2 + "\n";
}
console.log(multTable); */
