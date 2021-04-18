function Password(parent, open) {
  let inputPassword = document.createElement("input");
  let checkBoxInput = document.createElement("input");
  parent.appendChild(inputPassword);
  parent.appendChild(checkBoxInput).type = "checkbox";
  if (open) {
    checkBoxInput.checked = open;
    inputPassword.type = "text";
  } else {
    checkBoxInput.checked = open;
    inputPassword.type = "password";
  }

  this.setValue = function (password) {
    inputPassword.value = password;
  };
  this.getValue = () => inputPassword.value;
  this.setOpen = function (option) {
    option
      ? (checkBoxInput.checked = option)
      : (checkBoxInput.checked = option);
    option ? (inputPassword.type = "text") : (inputPassword.type = "password");
  };
  this.getOpen = () => checkBoxInput.checked;

  this.onOpenChange = () => {};

  //param ? (inputPassword.type = "text") : (inputPassword.type = "password");

  this.onChange = () => {};

  function clickCheck() {
    checkBoxInput.checked
      ? (inputPassword.type = "text")
      : (inputPassword.type = "password");
  }

  checkBoxInput.onclick = () => {
    clickCheck();
    this.onOpenChange();
  };
  inputPassword.oninput = () => this.onChange();
}

let p = new Password(document.body, true);
p.setValue("qwerty");
console.log(p.getValue() + " // getValue method");
p.setOpen(true);
console.log(p.getOpen() + " // getOpen method");

//---------LoginForm
//С помощью предыдущего кода Password сделайте форму логина, кнопка в которой будет активна только если и login и пароль не пусты

let divConteiner = document.createElement("div");
document.body.appendChild(divConteiner);
divConteiner.setAttribute(
  "style",
  "width:170px; height:auto; border: 2px solid; padding:10px; margin-top:20px"
);
divConteiner.id = "conteiner";
// create login field
let loginElement = new Password(divConteiner, true);
divConteiner.querySelector('input[type="checkbox"]').remove();
conteiner.children[0].placeholder = "Login";
// create password field
let passwordElement = new Password(divConteiner, true);
divConteiner.querySelector('input[type="checkbox"]').remove();
conteiner.children[1].style = "margin:10px 0px";
conteiner.children[1].placeholder = "Enter your password";
// create a button
let button = document.createElement("button");
conteiner.appendChild(button).innerText = "Press it!";
button.id = "button";
button.setAttribute("disabled", "");

passwordElement.onChange = loginElement.onChange = () => {
  if (loginElement.getValue() && passwordElement.getValue()) {
    button.removeAttribute("disabled");
  } else {
    button.setAttribute("disabled", "");
  }
};

//-------Password Verify

//Create a new div element and style it
let divConteiner2 = document.createElement("div");
document.body.appendChild(divConteiner2);
divConteiner2.setAttribute(
  "style",
  "width:170px; height:auto; border: 2px solid; padding:10px; margin-top:20px"
);
divConteiner2.id = "conteiner_2";
//new Object
let inputDefaultPass = new Password(divConteiner2, false);
conteiner_2.children[0].style.margin = "10px 0px";
inputDefaultPass.setValue("qwerty");
let defaultPassword = inputDefaultPass.getValue();
//new Object
let extraInput = new Password(divConteiner2, false);
divConteiner2.querySelector('input[type="checkbox"]').remove();
conteiner_2.children[1].setAttribute("id", "hiddenInput");
hiddenInput.setAttribute("placeholder", "your password");

//create a new button
let button2 = document.createElement("button");
button2.id = "button2";
//Check a password func
extraInput.onChange = inputDefaultPass.onChange = () => {
  extraInput.getValue() === inputDefaultPass.getValue() ||
  (extraInput.getOpen() && inputDefaultPass.getValue() === defaultPassword)
    ? addRemoveButton(conteiner_2, button2, true)
    : addRemoveButton(conteiner_2, button2, false);
};
//toggle-func for checkBox element
extraInput.onOpenChange = () => {
  if (extraInput.getOpen()) {
    hiddenInput.style.display = "none";
    inputDefaultPass.setOpen(extraInput.getOpen());
    addRemoveButton(conteiner_2, button2, true);
  } else {
    hiddenInput.style.display = "initial";
    addRemoveButton(conteiner_2, button2, false);
    inputDefaultPass.setOpen(extraInput.getOpen());
  }
};

//create or remove func for button
function addRemoveButton(IdNameAppendElem, idNameOfButton, param) {
  param
    ? (IdNameAppendElem.appendChild(idNameOfButton).innerText = "Press it!")
    : idNameOfButton.remove();
  idNameOfButton.setAttribute("style", "margin-left:20px");
}

//Form will be continue...
