//--------ES6
//later

//--------sort
//Функция позволяет отсортировать любой набор данных по имени поля (второй параметр). Третьим параметром идет необязательный Boolean, который в случае
//true делает сортировку по возрастанию, в случае false - по убыванию. По умолчанию (без третьего параметра) происходит сортировка по возрастанию
var persons = [
  { name: "Иван", age: 17 },
  { name: "Мария", age: 35 },
  { name: "Алексей", age: 73 },
  { name: "Яков", age: 12 },
];

function sort(obj, sortNameKey, param = true) {
  param &&
    console.log(obj.sort((a, b) => (a[sortNameKey] > b[sortNameKey] ? 1 : -1)));
  param ||
    console.log(obj.sort((a, b) => (a[sortNameKey] > b[sortNameKey] ? -1 : 1)));
  /* 
  
  if (param)
    console.log(obj.sort((a, b) => (a[sortNameKey] > b[sortNameKey] ? 1 : -1)));
  else
    console.log(obj.sort((a, b) => (a[sortNameKey] > b[sortNameKey] ? -1 : 1)));
    
 */
}

sort(persons, "age", false);

//--------------array map
let someArr = ["1", {}, null, undefined, "500", 700].map((a) =>
  Number(a) ? Number(a) : a
);
for (const iterator of someArr) {
  console.log(typeof iterator);
}

//-------array reduce
let someArr2 = ["0", 5, 3, "string", null];
console.log(
  someArr2.reduce((a, b) => {
    if (typeof a !== "number") a = 1;
    if (typeof b !== "number") b = 1;
    return a * b;
  })
);

//----------object filter
var phone = {
  brand: "meizu",
  model: "m2",
  ram: 2,
  color: "black",
};

function filter(obj, f) {
  let sortedObj = {};
  // console.log(Object.entries(obj));
  for (const [key, value] of Object.entries(obj)) {
    if (f(key, value)) sortedObj[key] = value;
  }
  console.log(sortedObj);
}

filter(phone, (key, value) => key == "color" || value == 2);

//-------object map

function map(obj, f) {
  let newObj = {};
  for (const key in obj) {
    let tempObj = f(key, obj[key]);
    for (const key in tempObj) {
      newObj[key] = tempObj[key];
    }
  }
  console.log(newObj);
}

map({ name: "Иван", age: 17 }, function (key, value) {
  var result = {};
  result[key + "_"] = value + "$";
  return result;
}); //должен вернуть {name_: "Иван$", age_: "17$"}
