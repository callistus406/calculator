let numbers = document.querySelector(".numbers");
let display = document.querySelector("#display");
//let addition = document.querySelector("#addition")

(function(){
  numbers.addEventListener("click",e=>{
    if (e.target.textContent == "1"  )return display.value +=e.target.textContent; 
    if (e.target.textContent == "2"  )return display.value +=e.target.textContent; 
    if (e.target.textContent == "3"  )return  display.value +=e.target.textContent ; 
    if (e.target.textContent == "4"  )return display.value +=e.target.textContent; 
    if (e.target.textContent == "5"  )return display.value +=e.target.textContent; 
    if (e.target.textContent == "6"  )return display.value +=e.target.textContent; 
    if (e.target.textContent == "7"  )return display.value +=e.target.textContent; 
    if (e.target.textContent == "8"  )return display.value +=e.target.textContent; 
    if (e.target.textContent == "9"  )return display.value +=e.target.textContent; 
    if (e.target.textContent == "0"  )return display.value +=e.target.textContent; 
    if (e.target.textContent == "CE"  )return clearScreen(); 
    if (e.target.classList.contains("backspace") )return deleteNumbers(); 
     if (e.target.textContent == "+" )return customOperator("+"); 
     if (e.target.textContent == "-" )return customOperator("-"); 
     if (e.target.classList.contains("multiplication") )return customOperator("*");  
     if (e.target.classList.contains("division") )return customOperator("/"); 
     if(e.target.textContent == "=")return equal(e);
  });
})();

const clearScreen = function(){
  
  display.value="";
}

const deleteNumbers = function(){
  let arr = display.value;
  display.value = arr.slice(1);
}

let initVal;
let mathOperator;
const customOperator = function(operator){
  initVal = +display.value;
  display.value = "";
   return mathOperator = operator;
}

const equal = function(){
  let getValue = +display.value;
  if( mathOperator == "+" ) return display.value = initVal + getValue;
  if( mathOperator == "-" ) return display.value = initVal - getValue;
  if( mathOperator == "*" ) return display.value =  initVal * getValue;
  if( mathOperator == "/" ) console.log(getValue);return display.value = initVal / getValue;
}