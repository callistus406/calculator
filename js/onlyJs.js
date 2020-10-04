let one = document.querySelector("body");
let input = document.createElement("input");
one.append(input);
let btn = document.createElement("button");
one.append(btn);
btn.append("Click");

btn.addEventListener("click", function(){
    let div = document.createElement("");
    div.classList.add("background")
    one.append(div);
})



