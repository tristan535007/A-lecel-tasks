//Switch if
function switchIf() {
  let color = prompt(
    "write down color",
    "red, black, blue or green"
  ).toLocaleLowerCase();
  if (color === "red") {
    document.write('<div style = "background-color: red;">red </div>');
    document.write('<div style = "background-color: black;">black </div>');
  } else if (color === "black") {
    document.write('<div style = "background-color: black;">black </div>');
  } else if (color === "blue") {
    document.write('<div style = "background-color: blue;">blue </div>');
    document.write('<div style = "background-color: green;">green </div>');
  } else if (color === "green") {
    document.write('<div style = "background-color: green;">green </div>');
  } else {
    document.write(
      '<div style = "background-color: grey;"> I do not understand </div>'
    );
  }
  console.log(color);
}
//Prompt: or
function promptOr() {
  let age = +prompt("Enter your age");
  age || (age === null && !age) ? alert(age) : alert("");
}

//confirm: or this days
function confirmOrThisDays() {
  let nastyApp = confirm("");
  nastyApp ? confirm("Shopping?") : alert("You are an asshole!");
}

//triple prompt
function triplePrompt() {
  let arr = [
    prompt("", "Surname"),
    prompt("", "Name"),
    prompt("", "Father's name"),
  ];
  let fullName = "";
  for (let i = 0; i < arr.length; i++) {
    fullName += arr[i] + " ";
  }
  alert(fullName);
}

//Default: or
function defaultOr() {
  let arr = [
    prompt("", "Surname"),
    prompt("", "Name"),
    prompt("", "Father's name"),
  ];
  console.log(arr);
  let fullName = "";
  let defaultNames = ["Terechov", "Petr", "Nicolaevich"];
  debugger;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == null || arr[i] == "") {
      fullName += defaultNames[i] + " ";
    } else {
      fullName += arr[i] + " ";
    }
  }
  alert(fullName);
}

//login and password
function loginAndPassword() {
  let person = {
    login: "admin",
    password: "qwerty",
  };
  let askLogin = prompt("Insert login");
  let askPassword;
  if (askLogin === person.login) {
    askPassword = prompt("Insert password");
    if (askPassword === person.password) alert("You've entered!");
    else alert("You entered wrong password!");
  } else {
    alert("You entered wrong login");
  }
}

//currency calc
function currencyCalc() {
  let chooseBetween = prompt("choose currency", "usd or eur");
  let usd, eur;
  switch (chooseBetween) {
    case "usd":
      usd = 27.5;
      let transformUsdToUah = +prompt("insert how many uah?", "0");
      alert(usd * transformUsdToUah);
      break;
    case "eur":
      eur = 33.5;
      let transformEurToUah = +prompt("insert how many uah?", "0");
      alert(eur * transformEurToUah);
      break;
  }
}

//currency calc: improoved
function currencyCalcImprooved() {
  let chooseBetween = prompt("choose currency", "usd or eur");
  let usd, eur;
  switch (chooseBetween.toLocaleLowerCase()) {
    case "usd":
      usd = 27.5;
      let transformUsdToUah = +prompt("insert how many uah?", "0");
      alert(usd * transformUsdToUah);
      break;
    case "eur":
      eur = 33.5;
      let transformEurToUah = +prompt("insert how many uah?", "0");
      alert(eur * transformEurToUah);
      break;
  }
}

//currency calc: two rates
function currencyCalcTwoRates() {
  let rates = confirm("Buy or Sell?");
  rates ? getCurrencySum(27.5, 33.5) : getCurrencySum(29.8, 35.2);

  function getCurrencySum(usdPrise, eurPrise) {
    let chooseBetween = prompt("choose currency", "usd or eur");
    let usd = usdPrise;
    let eur = eurPrise;
    console.log(chooseBetween);
    if (chooseBetween === null) {
      alert("Cancel!");
    } else if (chooseBetween.toLowerCase() === "usd") {
      let transformUsdToUah = +prompt("insert how many uah?", "0");
      alert(usd * transformUsdToUah);
    } else if (chooseBetween.toLowerCase() === "eur") {
      let transformEurToUah = +prompt("insert how many uah?", "0");
      alert(eur * transformEurToUah);
    } else {
      alert("Cancel!");
    }
  }
}

function getData() {
  let dataHtml = document.getElementById("textField").value;
  let exerciseName = dataHtml.toLocaleLowerCase();
  switch (exerciseName) {
    case "switch if":
      switchIf();
      break;
    case "prompt: or":
      promptOr();
      break;
    case "confirm: or this days":
      confirmOrThisDays();
      break;
    case "triple prompt":
      triplePrompt();
      break;
    case "default: or":
      defaultOr();
      break;
    case "login and password":
      loginAndPassword();
      break;
    case "currency calc":
      currencyCalc();
      break;
    case "currency calc: two rates":
      currencyCalcTwoRates();
      break;
    case "currency calc: improoved":
      currencyCalcImprooved();
      break;
  }
}
