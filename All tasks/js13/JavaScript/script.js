//-----traffic lights and Stage 2
const delay = (ms) => new Promise((ok) => setTimeout(() => ok(ms), ms));
let setTime = 3000;

//----create constructor for lights elements in DOM and some style
function TraficElement(light, parent) {
  this.light = light;
  let div = document.createElement("div");
  let span = document.createElement("span");
  parent.appendChild(div).id = `id_${this.light}`;

  span.style.margin = "auto 0px";
  div.setAttribute(
    "style",
    `border: 1px solid; height: 100px; width: 100px; border-radius: 50%; background: ${this.light}; margin: 3px 0px; display: flex; justify-content: center`
  );
  this.setColor = (color) => (div.style.background = color);
  this.setTimeView = (time) => (div.appendChild(span).innerText = time);
}
//-----create 3 obj
let red = new TraficElement("red", conteiner);
let yellow = new TraficElement("yellow", conteiner);
let green = new TraficElement("green", conteiner);
let traficArr = [green, yellow, red]; // add new obj to array

//-----async function for changing a colors
async function trafficLight() {
  red.setColor("");
  yellow.setColor("");
  green.setColor("");

  while (true) {
    for (const i of traficArr) {
      i.setColor(i.light);
      i.setTimeView(setTime / 1000 + " sec");
      await delay(setTime);
      i.setTimeView("");
      i.setColor("");
    }
  }
}

button.onclick = () => {
  // button.setAttribute("disabled", "");
  trafficLight();
  domEventPromise(knopka, "click").then((e) =>
    console.log("event click happens", e)
  );
};
//------domEventPromise------
let domEventPromise = (bttName, eventName) =>
  new Promise((resolve) => {
    function tempFunc(event) {
      resolve(event);
      bttName.removeEventListener(eventName, tempFunc);
    }
    bttName.addEventListener(eventName, tempFunc);
  });

//--------PedestrianTrafficLight
let red_2 = new TraficElement("red", conteiner_2);
let green_2 = new TraficElement("green", conteiner_2);
let traficArr_2 = [green_2, red_2];

async function trafficLight_2() {
  red_2.setColor("");
  green_2.setColor("");
  for (const i of traficArr_2) {
    i.setColor(i.light);
    i.setTimeView(setTime / 1000 + " sec \n auto traffic");
    await delay(setTime);
    i.setTimeView("");
    i.setColor("");
  }
}

async function PedestrianTrafficLight() {
  await trafficLight_2();

  red_2.setColor("");
  green_2.setColor("");
  for (const i of traficArr_2) {
    i.setColor(i.light);
    i.setTimeView(setTime / 1000 + " sec \n pedestr traffic");
    await delay(setTime);
    i.setTimeView("");
    i.setColor("");
  }
  await delay(5000);
  button_2.removeAttribute("disabled");
}

async function startRaceTraf() {
  while (true) {
    await Promise.race([
      domEventPromise(button_2, "click")
        .then(() => button_2.setAttribute("disabled", ""))
        .then(() => setTimeout(() => PedestrianTrafficLight()), setTime),
      trafficLight_2(),
    ]);
  }
}
startRaceTraf();
