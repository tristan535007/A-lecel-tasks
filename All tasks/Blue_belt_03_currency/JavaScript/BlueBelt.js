/* 
I must to say a truth i did not understand an exercise till the end
*/

// let ratios = {
//   usd: 0,
//   php: 0,
//   huf: 0,
// };

// function getData() {
//   fetch("https://api.exchangeratesapi.io/latest")
//     .then((res) => res.json())
//     .then((d) => {
//       ratios["usd"] = d.rates["USD"];
//       ratios["php"] = d.rates["PHP"];
//       ratios["huf"] = d.rates["HUF"];
//       let userData = +prompt("How many EUR do you want to change");
//       if (isNaN(userData)) {
//         alert("Write down amount");
//       } else {
//         for (const key in ratios) {
//           alert((userData * ratios[key]).toFixed(2) + " " + key);
//           console.log(ratios[key]);
//         }
//       }

//       let changeBase = d.base;
//       changeBase = "USD";
//       console.log(d.rates["USD"]);
//       console.log(d); // тут у нас есть данные
//       и ниже с ними можно работать
//       нигде кроме этой функции (этих фигурных скобок) переменной d нет
//     });
// }

fetch("https://api.exchangeratesapi.io/latest")
  .then((res) => res.json())
  .then((d) => {
    let str = "";
    for (const key in d.rates) {
      str += `<option value=${d.rates[key]}>${key}</option>`;
      selectData.innerHTML = str;
    }
  });

inputValue.oninput = () => {
  let inputValue = document.getElementById("inputValue").value;
  let getSelectData = document.getElementById("selectData").value;
  if (!isNaN(inputValue)) {
    let exchange = inputValue * getSelectData;
    result.innerHTML = exchange;
  } else {
    alert("Not a number!");
  }
  // console.log(getSelectData);
};
