const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const number = document.getElementById("number");
let currentNumber = 0;

increase.addEventListener("click", function(){
    number.innerHTML = ++currentNumber
    numberCheck()
})
decrease.addEventListener("click", function(){
    number.innerHTML = --currentNumber
    numberCheck()
})

function numberCheck(){
    if (currentNumber == 0) {
        decrease.setAttribute("disabled", "true")
    } else {
        decrease.removeAttribute("disabled")
    }
}