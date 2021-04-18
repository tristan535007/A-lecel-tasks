const getGQL = (url) => (query, variables = {}) =>
  fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...(localStorage.authToken
        ? { Authorization: `Bearer ${localStorage.authToken}` }
        : {}),
    },
    body: JSON.stringify({ query, variables }),
  }).then((res) => res.json());
let gql = getGQL("http://shop-roles.asmer.fs.a-level.com.ua/graphql");
let arrGoods = [];

//login constructor
function LoginForm(parent) {
  //Create 3 elements of form
  let inputPassword = document.createElement("input");
  let inputLogin = document.createElement("input");
  let button = document.createElement("button");
  let bin = document.createElement("div");
  //style
  bin.className = "bin_goods";
  inputPassword.type = "password";
  inputLogin.type = "text";
  //add it to DOM
  parent.insertBefore(inputPassword, wrapper).placeholder = "Password";
  parent.insertBefore(inputLogin, wrapper).placeholder = "Log";
  parent.insertBefore(button, wrapper).innerText = "Press Login";
  parent.insertBefore(bin, wrapper).innerText = "Your order bin ";

  //methods
  this.setChilds = (htmlEl, text) => {
    htmlEl.innerText = "";
    bin.appendChild(htmlEl);
    if (text) {
      htmlEl.innerText = text + " pieces";
    }
  };
  this.correctLogin = (arg) => {
    let check;
    if (arg) {
      inputPassword.style.display = "none";
      inputLogin.style.display = "none";
      button.innerText = "Press Logout";
      return (check = true);
    } else {
      inputPassword.style.display = "inline";
      inputLogin.style.display = "inline";
    }
    return check;
  };
  this.getValue = () => [inputPassword.value, inputLogin.value];
  this.setValue = (arg1, arg2) => {
    (inputPassword.value = arg1), (inputLogin.value = arg2);
  };
  // button click event
  button.onclick = () => {
    if (this.clickEv) {
      this.clickEv();
    }
  };
  //button click event for bin
  bin.onclick = () => {
    if (this.orderClick) {
      this.orderClick();
      bin.style.background = "green";
      setTimeout(() => {
        bin.style.background = "";
      }, 500);
    }
  };
}
//constructor for elements of categories
function BoxOfGoods(imgName, goodName, goodDescription, goodPrice, _id) {
  let maineGoodConteiner = document.createElement("div");
  let goodImg = document.createElement("img");
  let goodSpanName = document.createElement("span");
  let goodSpanDescription = document.createElement("span");
  let goodSpanPrice = document.createElement("span");
  let buyGood = document.createElement("div");

  //adding to DOM
  conteiner_for_goods.appendChild(maineGoodConteiner);
  maineGoodConteiner.appendChild(
    goodImg
  ).src = `http://shop-roles.asmer.fs.a-level.com.ua/${imgName}`;
  maineGoodConteiner.appendChild(goodSpanName).innerText = goodName;
  maineGoodConteiner.appendChild(
    goodSpanDescription
  ).innerText = goodDescription;
  maineGoodConteiner.appendChild(goodSpanPrice).innerText = goodPrice + " $";
  maineGoodConteiner.appendChild(buyGood).innerText = "Add it!";
  //methods field

  buyGood.onclick = () => {
    collectGoods(_id);
  };

  //giving class name for scc styling
  maineGoodConteiner.className = "good_box";
  buyGood.className = "order_field";
}
//create event click
let newLogForm = new LoginForm(document.body);
newLogForm.clickEv = () => {
  if (newLogForm.correctLogin()) {
    localStorage.removeItem("authToken");
    newLogForm.correctLogin(false);
  }
  getRespLogin(newLogForm.getValue()[0], newLogForm.getValue()[1]);
};
newLogForm.orderClick = () => {
  makeOrder();
};

//function for login logout

async function getRespLogin(pass, log) {
  let promisLog = await gql(
    `query login($login:String,$password:String){

  login(login:$login,password:$password)
}`,
    {
      login: log,
      password: pass,
    }
  );
  console.log(promisLog.errors);
  if (promisLog.errors) return;
  if (promisLog.data.login) {
    localStorage.authToken = promisLog.data.login;
    alert("Passwor's correct!");
    newLogForm.correctLogin(true);
  } else {
    alert("Please login!");
  }

  newLogForm.setValue("", "");
}

//function for side bar
async function categories(el = side_nav_categories, parentId = null) {
  let result = await gql(
    `query cats($query:String){
    CategoryFind(query: $query){
      _id
      name
      goods{
        name
      }
      subCategories{
        name
        goods{name}
      }
    }
  }`,
    { query: JSON.stringify([{ "parent._id": parentId }]) }
  );

  if (result.errors) return;
  let ul = document.createElement("ul");
  el.appendChild(ul);
  for (const { name, _id } of result.data.CategoryFind) {
    let li = document.createElement("li");
    li.innerText = name;
    ul.append(li);
    let check;
    li.onclick = () => {
      if (!check) {
        categories(li, _id);
        check = true;
      }
      //recreate a new information about goods after clicking
      if (document.getElementById("conteiner_for_goods")) {
        document.getElementById("conteiner_for_goods").remove();
      }
      let tempCont = document.createElement("div");
      tempCont.id = "conteiner_for_goods";
      wrapper.appendChild(tempCont);
      showGoods(_id);
    };
  }
}
categories();
//drow  goods in DOM
async function showGoods(catId) {
  let result = await gql(
    `query goods($query:String){
      GoodFind(query: $query){
       description
       _id
       price
       name
       images{
         url
       }
     }
     }`,
    { query: JSON.stringify([{ "categories._id": catId }]) }
  );
  for (const {
    name,
    _id,
    description,
    price,
    images: [{ url }],
  } of result.data.GoodFind) {
    //adding content to conteiner_for_goods in DOM via constructor
    BoxOfGoods(url, name, description, price, _id);
  }
}

//make order async function

async function makeOrder(arrOfGoods) {
  let promisOfOrder = await gql(
    `mutation newOrder($arr:[OrderGoodInput]){
      OrderUpsert(order:{
        orderGoods:$arr					
      }){
        total
        
        orderGoods{
          good{
            name
          }
          price
          count
        }
      }
        
      }`,
    { arr: arrGoods }
  );
  //show promis results add it to DOM
  let binAccess = document.querySelector(".bin_goods");

  for (const {
    good: { name },
    price,
    count,
  } of promisOfOrder.data.OrderUpsert.orderGoods) {
    let divFornameResult = document.createElement("div");
    let divForPriceResult = document.createElement("div");
    let divForCountResult = document.createElement("div");
    binAccess.append(divFornameResult);
    binAccess.append(divForPriceResult);
    binAccess.append(divForCountResult);
    divFornameResult.innerText = name;
    divForPriceResult.innerText = price + "$";
    divForCountResult.innerText = count + " pieces";
  }
  let divForTotalResult = document.createElement("div");
  binAccess.append(divForTotalResult);
  divForTotalResult.innerText =
    "Your total price: " + promisOfOrder.data.OrderUpsert.total + "$";
}

let spanCount = document.createElement("span");
function collectGoods(good) {
  let orderUnit = { count: 1, good: { _id: good } };
  arrGoods.push(orderUnit);
  newLogForm.setChilds(spanCount, arrGoods.length);
}
