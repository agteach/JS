let num1 = 8;
let num2 = 2;

// Set the text content of the span elements
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let result = document.getElementById("sum-el")
function add(){
    let sum = num1+num2
    result.textContent=sum
    console.log(sum)
}
function subtract(){
let substract = num1-num2
result.textContent=substract
}
function multiply(){
let multiply = num1*num2
result.textContent=multiply
}
function divide(){
let divide =num1/num2
result.textContent=divide
}