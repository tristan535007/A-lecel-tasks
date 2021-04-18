var credentials = {
  login: "admin",
  password: "qwerty",
};

function getData() {
  let loginData = document.getElementById("login").value;
  let passwordData = document.getElementById("password").value;

  if (
    loginData === credentials.login &&
    passwordData === credentials.password
  ) {
    getColor("lightgreen");
    clearFields();
  } else {
    getColor("red");
    clearFields();
  }
}

function getColor(color) {
  document.getElementById("login").style.background = color;
  document.getElementById("password").style.background = color;
  setTimeout(() => {
    document.getElementById("login").style.background = "#fff";
    document.getElementById("password").style.background = "#fff";
  }, 500);
}
function clearFields() {
  document.getElementById("login").value = "";
  document.getElementById("password").value = "";
}
