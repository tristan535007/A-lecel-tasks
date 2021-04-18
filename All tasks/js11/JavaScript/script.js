//fetch basic and fetch improved
fetch("https://swapi.dev/api/people/1/")
  .then((res) => res.json())
  .then((luke) => objectToDOM(document.body, luke));

function objectToDOM(el, data) {
  //create DOM el and style it - table
  let table = document.createElement("table");
  table.setAttribute("border", "1");
  table.id = "table";
  el.append(table);
  //begin work with response data
  for (const key in data) {
    let td = document.createElement("td");
    let tr = document.createElement("tr");

    let arrLinks; // create temporary variable for collectig arrays

    table.appendChild(tr).innerText = key; // create rows with names of obj
    // catching arrays
    if (
      typeof data[key] === "string" &&
      data[key].startsWith("http://swapi.dev/api")
    ) {
      arrLinks = [data[key]];
    } else if (Array.isArray(data[key]) && data[key].length > 0) {
      let tempArr = data[key];

      for (const i of tempArr) {
        if (i.startsWith("http://swapi.dev/api")) arrLinks = tempArr;
      }
    } else {
      tr.appendChild(td).innerText = data[key];
      // console.log(data[key]);
    }
    //work with new array - arrLinks
    if (arrLinks) {
      arrLinks.forEach((value, index) => {
        let button = document.createElement("button");
        tr.appendChild(td).append(button);
        button.style.margin = "2px 5px";
        button.textContent = `${key}_${index + 1}`;
        button.onclick = () => {
          fetch(value)
            .then((data) => data.json())
            .then((info) => {
              table.remove();
              objectToDOM(document.body, info);
            });
        };
        console.log(value, index, key);
      });
    }
  }
}
//--------myfetch
myfetch("https://swapi.dev/api/people/1/").then((luke) => console.log(luke));

function myfetch(url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status == 200) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject(xhr.status);
      }
    };
  });
}

//-----race
const delay = (ms) => new Promise((ok) => setTimeout(() => ok(ms), ms));
Promise.race([
  myfetch("https://swapi.dev/api/people/1/"),
  delay(Math.floor(Math.random() * 10) * 20),
]).then((firstResult) => console.log("I'm first! ", firstResult));
