let ask, pricePerHour, totalHours, amount, currency;

do {
  ask = prompt("Hello! would you like to calculate  your salary?" + "Put y/n");
  if (ask === "y" || ask === "yes") {
    alert("Let's go!");
    break;
  } else if (ask === "n" || ask === "no") {
    alert("as you wish");
    break;
  } else if (ask == null) {
    alert("as you wish");
    break;
  } else if (typeof +ask === "number") {
    alert("Please, enter Y/N or Yes or No");
  } else {
    alert("as you wish");
  }
  console.log(ask);
} while (ask != "y" || ask != "yes" || ask != null || ask != "no");
console.log(ask);
if (ask === null || ask === "no" || ask === "n") {
  alert("Bye-Bye");
} else {
  maineCode();
}

function maineCode() {
  do {
    pricePerHour = prompt("Enter your price per hour");
    currency = prompt("UAN or USD");
    totalHours = prompt("Your month total hours");
    let arr = [pricePerHour, currency, totalHours];
    for (const key in arr) {
      if (arr[key] === null) {
        break;
      } else if (arr[key] < 0) {
        alert("You can not use negative number");
        break;
      } else {
        break;
      }
    }
  } while (
    (checkForNumber(pricePerHour) && checkForNumber(totalHours)) ||
    !checkForString(currency)
  );
  amount = totalHours * pricePerHour + " " + currency.toUpperCase();
  alert(amount);

  function checkForString(value) {
    if (value === null) {
      currency = " ";
      return true;
    } else {
      let transformed = value.toUpperCase();
      let result =
        transformed === "UAN" || transformed === "USD" ? true : false;
      return result;
    }
    return true;
  }
}

function checkForNumber(value) {
  let transformed = Number(value);
  if (isNaN(transformed)) return true;
  return false;
}
