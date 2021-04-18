//----------3 persons
let a = { name: "Ivan", surname: "Ivanov" };
let b = { name: "Paul", surname: "Bul" };
let c = { name: "Inna", surname: "Ivanova" };
let persons = [a, b, c];

//---------different fields
a.fathername = "Genadievi4";
a.age = "19";
a.sex = "male";
b.fathername = "Grigorievi4";
b.age = "21";
b.sex = "male";
c.fathername = "Ivanovna";
c.age = "25";
c.sex = "female";

//------fields check

for (let i = 0; i < persons.length; i++) {
  // console.log("age" in persons[i]);
  if ("married" in persons[i] !== "true") {
    alert("excess field!");
  }
}

//------loop of persons

for (let j = 0; j < persons.length; j++) {
  console.log(persons[j]);
}

// ------loop of name and surname

for (const key in persons) {
  console.log(persons[key].name + " " + persons[key].surname);
}

// -----FullName
for (const key in persons) {
  persons[key].FullName = persons[key].name + " " + persons[key].surname;
  console.log(persons[key].FullName);
}

//-----serialize
console.log(JSON.stringify(a));
console.log(JSON.stringify(b));
console.log(JSON.stringify(c));

//----deserialize

/*
let d = JSON.stringify(a);
persons.push(d);
console.log(persons[3]);*/

// let test = JSON.parse(`${d}`);
// console.log(test);

//--------HTML

var str = "<table border='1'>";
for (const key in persons) {
  str += `<tr>
  <td>${persons[key].name}</td>
  <td>${persons[key].surname}</td>
  </tr>`;
}
document.write(str);

//------HTML optional fields and color

persons.forEach(function (item, index) {
  let string = `<table id = table_${index} border='1'>`;
  let styleColor = `<style> #table_${index} tr:nth-child(even)  {background:yellow}</style>`;
  let person = item;
  for (const key in person) {
    string += `<tr>
  <td>${key + ":"}</td>
  <td>${person[key]}</td>
  </tr>`;
    // console.log(key + "   " + person[key]);
  }
  return document.write(string + "</br>" + styleColor);
});

//-------HTML th optional did it separate

//-----------destruct array
let [odd1, even1, odd2, even2, odd3, ...rest] = [1, 2, 3, 4, 5, "a", "b", "c"];
console.log(odd1, even1, odd2, even2, odd3, rest);

//--------destruct string
let [number, [s1, s2, s3]] = [1, "abc"];
console.log(number, s1, s2, s3);

//--------destruct 2

let obj = {
  name: "Ivan",
  surname: "Petrov",
  children: [{ name: "Maria" }, { name: "Nikolay" }],
};

let {
  name,
  surname,
  children: [{ name: name1 }, { name: name2 }],
} = obj;
console.log(name1);

//-------------destruct 3
let [a1, b1, ...rest1] = [1, 2, 3, 4, 5, 6, 7, 10];
console.log(a1, b1, rest1.length);
