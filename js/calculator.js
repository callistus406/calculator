let numbers = document.querySelector(".numbers");

let display = document.querySelector("#display");

let capture = document.querySelector(".capture");
let dot = document.querySelector("#dot");
let openBracket = document.querySelector("#openBracket");
let closeBracket = document.querySelector("#closeBracket");
let inv = document.querySelector("#inv");
let sqrt = document.querySelector(".sqrt");



let storeVal;
// const activate = function () {
//   let initialSize = 20 - display.value.length;
//   initialSize = initialSize <= 15 ? 15 : initialSize;
//   display.style.fontSize = initialSize + "px";
//   console.log(display.value.length);

// }
// display.addEventListener("onkeyup", activate);

// openBracket.addEventListener("click", _ => {
//   display.value += "(";
// });
// sqrt.addEventListener("click", _ => {
//   display.value += ")";
// });
dot.addEventListener("click", _ => {
  display.value += ".";
});

numbers.addEventListener("click", e => {

  if (e.target.textContent == "1") return display.value += e.target.textContent;
  if (e.target.textContent == "2") return display.value += e.target.textContent;
  if (e.target.textContent == "3") return display.value += e.target.textContent;
  if (e.target.textContent == "4") return display.value += e.target.textContent;
  if (e.target.textContent == "5") return display.value += e.target.textContent;
  if (e.target.textContent == "6") return display.value += e.target.textContent;
  if (e.target.textContent == "7") return display.value += e.target.textContent;
  if (e.target.textContent == "8") return display.value += e.target.textContent;
  if (e.target.textContent == "9") return display.value += e.target.textContent;
  if (e.target.textContent == "0") return display.value += e.target.textContent;
  if (e.target.textContent == "CE") return clearScreen();
  if (e.target.classList.contains("backspace")) return deleteNumbers();
  if (e.target.textContent == "+") return customOperator("+");
  if (e.target.textContent == "-") return customOperator("-");
  if (e.target.classList.contains("multiplication")) return customOperator("*");
  if (e.target.classList.contains("division")) return customOperator("/");
  if (e.target.classList.contains("sqrt")) return squreRoot();
  if (e.target.classList.contains("pow")) return square();
  if (e.target.classList.contains("fact")) return factorial();
  if (e.target.classList.contains("pi")) return display.value += 3.14159265358;
  if (e.target.textContent == "Mod") return customOperator("Mod");
  if (e.target.classList.contains("log")) return log();
  if (e.target.classList.contains("sin")) return sin();
  if (e.target.classList.contains("cos")) return cos();


  // if (e.target.textContent == "n!") return customOperator("!");

  if (e.target.textContent == "=") return equal(e);
});

const clearScreen = function () {
  display.value = "";
  capture.innerHTML = "";
}
// Math.Si
const deleteNumbers = function () {
  let arr = display.value;
  display.value = arr.slice(1);
}

let initVal;
let mathOperator;
let storeSign;

const square = function () {
  initVal = +display.value;
  display.value = Math.pow(10, initVal);
  capture.innerHTML = `sqr( ${initVal} )`;
}
const squreRoot = function () {
  initVal = +display.value;
  display.value = Math.sqrt(initVal);
  capture.innerHTML = "√" + " " + initVal;



}
const log = function () {
  initVal = +display.value;
  if (initVal == 0 || display.value == "" ) throw display.value  = "invalid input";
  display.value = Math.log(initVal);
  capture.innerHTML = "log(" + initVal + ")";
}
const sin = function () {
  initVal = +display.value;
  display.value = Math.sin(initVal);
  capture.innerHTML = "sin(" + initVal + ")";
}
const cos = function () {
  initVal = +display.value;
  // if (initVal == 0 || display.value == "") throw display.value = "invalid input";
  display.value = Math.cos(initVal);
  capture.innerHTML = "cos(" + initVal + ")";
}
const signOperator = function (operator) {

  initVal = +display.value;
  capture.innerHTML = initVal + " " + operator;

  return mathOperator = operator;
}
const customOperator = function (operator) {
  initVal = +display.value;
  capture.innerHTML = initVal + " " + operator;
  display.value = "";
  return mathOperator = operator;
}

const factorial = function () {
  initVal = +display.value;

  // console.log(initVal);

  var total = 1;
  for (index = 0; index < initVal; index++) {

    total = total * (initVal - index);
  }
  capture.innerHTML = "fact(" + initVal + ")";

  return display.value = total;
}


const equal = function () {
  // if()
  let getValue = +display.value;
  if (mathOperator == "+") { capture.textContent = ""; return display.value = initVal + getValue; }
  if (mathOperator == "-") { capture.textContent = ""; return display.value = initVal - getValue; }
  if (mathOperator == "*") { capture.textContent = ""; return display.value = initVal * getValue; }
  if (mathOperator == "/") { capture.textContent = ""; return display.value = initVal / getValue; }
  if (mathOperator == "Mod") { capture.textContent = ""; return display.value = initVal % getValue; }
  // if (mathOperator == "!") { capture.textContent = ""; return display.value = factorial(); }

  // if (mathOperator == ")") { capture.textContent = ""; return display.value = initVal / getValue; }
} 