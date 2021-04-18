function LoginForm(parant, open, isButton = true, placeHolder) {
  let input = document.createElement("input");
  let button = document.createElement("button");
  parant.appendChild(input).style = "margin:10px";
  input.placeholder = placeHolder;
  //exist  button true/false
  if (isButton) {
    parant.appendChild(button).innerText = "Press it";
    button.setAttribute("disabled", "");
    button.id = "button";
  }
  // text or password type
  open ? (input.type = "text") : (input.type = "password");
  //all methods
  this.setValue = (param) => (input.value = param);
  this.getValue = () => input.value;
  this.onChange = () => {};
  //event func
  input.oninput = () => this.onChange();
}
//obj without a button
let loginElement = new LoginForm(
  document.body,
  true,
  false,
  "Enter your login"
);
//obj with button
let passwordElement = new LoginForm(
  document.body,
  true,
  true,
  "Enter your password"
);

console.log(loginElement.getValue());

loginElement.onChange = passwordElement.onChange = () => {
  if (loginElement.getValue() && passwordElement.getValue())
    button.removeAttribute("disabled");
};
