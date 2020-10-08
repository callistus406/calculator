let numbers = document.querySelector(".numbers");
let display = document.querySelector("#display");
let capture = document.querySelector(".capture");
let storeVal;
// const activate = function () {
//   let initialSize = 20 - display.value.length;
//   initialSize = initialSize <= 15 ? 15 : initialSize;
//   display.style.fontSize = initialSize + "px";
//   console.log(display.value.length);

// }
// display.addEventListener("onkeyup", activate);


 
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
    // if (e.target.textContent == "(") return signOperator("(");
    // if (e.target.textContent == ")") return signOperator(")");
    if (e.target.classList.contains("pi")) return display.value += 3.14159265358;
    if (e.target.textContent == "Mod") return customOperator("Mod");
    // if (e.target.textContent == "n!") return customOperator("!");

    if (e.target.textContent == "=") return equal(e);
  });


const clearScreen = function () {
  display.value = "";
}

const deleteNumbers = function () {
  let arr = display.value;
  display.value = arr.slice(1);
}

let initVal;
let mathOperator;
let storeSign;
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

  let total =1;
  for (let index = 0; index < initVal; index++) {

    total = total * (initVal - 1);
  }
  // return (initVal != 1) ? initVal * factorial(initVal - 1) : 1;
  return total;
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

  // if (mathOperator == "(") { capture.textContent = ""; return display .value = initVal * getValue; }
  // if (mathOperator == ")") { capture.textContent = ""; return display.value = initVal / getValue; }
} 