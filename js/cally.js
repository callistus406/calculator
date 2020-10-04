let firstName = "candy";
let lastName = "morgan";
let password = 1234;

let fName = prompt("Enter your firstName");
let lName = prompt("Enter your lastName");
let pwd = prompt("Enter your password");


const checkUser = function(){
if ((fName == firstName) && (lName == lastName) && (pwd == password)) {
    userId(10, 2);
}else{
    alert("User does not exist!!");
}
}

const userId = function(num1, num2){
    let sum = num1 + num2;
    alert("Your unique ID is " + sum);
    
    
}

checkUser();