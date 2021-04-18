// -------------a
function a(Alert) {
  alert(Alert);
}
// a("Hello!");

// ----------- cube

function cube(num) {
  if (!isNaN(num)) {
    return alert(Math.pow(num, 3));
  } else {
    alert("Only a numbers!");
  }
}

// cube(+prompt("Enter a number"));

//------- avg2
function avg2(param1, param2) {
  return alert("average result: " + (param1 + param2) / 2);
}
// avg2(+prompt("Enter 1st num ", 2), +prompt("Enter 2nd num ", 2));

//------- Sum3

function sum3(arr) {
  return alert(arr.reduce((a, b) => a + b));
}

//-------intRandom
let random;
function intRandom(param1, param2 = 0) {
  if (param2 === 0) {
    param2 = param1;
    param1 = 0;
  }
  if (Math.sign(param1) === -1 || Math.sign(param2) === -1 || param1 > param2) {
    return alert("-1 or param 1 > param 2");
  } else {
    do {
      random = Math.floor(Math.random() * param2);
    } while (!(random >= param1 && random <= param2));
  }

  return alert(`Your diapason from ${param1} to ${param2} is: ` + random);
}

// intRandom(2, 10);

//-----------greetAll
function sayHi() {
  for (const iterator of arguments) {
    if (iterator !== null) alert(iterator + " Hello!");
  }
}

// sayHi("SpyderMan", "Prepod");

//--------sum
function sum() {
  let numberSum = 0;
  for (const i of arguments) {
    numberSum += i;
  }
  alert(`Total sum: ${numberSum}`);
}

// sum(2, 3, 4, 50);

//----------Union

button.onclick = () => {
  let getNumber = Number(numOfEx.value);
  numOfEx.value = "";

  if (isNaN(getNumber)) {
    alert("Enter a number!");
  } else {
    switch (getNumber) {
      case 1:
        a(prompt("write something", "Hello!"));
        break;
      case 2:
        cube(+prompt("Enter a number"));
        break;
      case 3:
        avg2(+prompt("Enter 1st num ", 2), +prompt("Enter 2nd num ", 2));
        break;
      case 4:
        let collectNumbers = [];
        let userInput;
        do {
          userInput = +prompt("Write a number");
          if (isNaN(userInput)) {
            alert("Not a number!");
          } else {
            collectNumbers.push(userInput);
          }
        } while (userInput);
        sum3(collectNumbers);
        break;
      case 5:
        intRandom(
          +prompt("enter a 1st number"),
          +prompt("enter a 2nd number") || 0
        );
        break;
      case 6:
        let collectNames = [];
        let userInput_2;
        do {
          userInput_2 = prompt("Write a Name", "SpiderMan");
          collectNames.push(userInput_2);
        } while (userInput_2);
        sayHi(...collectNames);
        break;
      case 7:
        let collectNumbers_2 = [];
        let userInput_3;
        do {
          userInput_3 = +prompt("Write a number");
          if (isNaN(userInput_3)) {
            alert("Not a number!");
          } else {
            collectNumbers_2.push(userInput_3);
          }
        } while (userInput_3);
        sum(...collectNumbers_2);
        break;
    }
  }
};

//----------Union declarative

let listOfExercises = {
  a: a,
  cube: cube,
  avg2: avg2,
  sum3: sum3,
  intrandom: intRandom,
  greetAll: sayHi,
  sum: sum,
};

// listOfExercises.a("By-by!");
