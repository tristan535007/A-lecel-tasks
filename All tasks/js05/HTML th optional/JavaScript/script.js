//HTML th optional
let a = { name: "Ivan", surname: "Ivanov", height: 185, job: "manager" };
let b = { name: "Paul", surname: "Bul", age: 21, language: "eng" };
let c = { name: "Inna", pets: true, hobby: "knitting", married: false };
let persons = [a, b, c];
let newArrFields = [];
let personStrValues = [];
let thStr,
  tdStr = "";
let srtHtml = "<table border='1'> <tr>";

for (const key in persons) {
  for (const i in persons[key]) {
    if (!newArrFields.includes(i)) {
      newArrFields.push(i);
    }
  }
}

for (const iterator of newArrFields) {
  thStr = `<th>${iterator}</th>`;
  srtHtml += thStr;
}

for (const key in persons) {
  tdStr = "<tr>";
  for (const i of newArrFields) {
    if (Object.keys(persons[key]).includes(i)) {
      tdStr += `<td>${persons[key][i]}</td>`;
    } else {
      tdStr += "<td>----</td>";
    }
  }
  personStrValues.push(tdStr + "</tr>");
}
let [a1, b1, c1] = personStrValues;
document.write(srtHtml + "</tr>" + a1 + b1 + c1 + "</table>");
