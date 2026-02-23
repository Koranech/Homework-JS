//є сторінка, на якій є блок, в кому знаходиться цифра.
// Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let div = document.getElementsByTagName("div")[0];


let currentNumber = +localStorage.getItem("number"); // + робить заміну null на 0
currentNumber ++;

localStorage.setItem("number", currentNumber);


div.innerText = currentNumber;

