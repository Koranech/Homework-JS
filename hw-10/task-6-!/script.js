//створити конвертор ваги з кг в фунти. дані заповнюються через інпут.
// При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

let div = document.getElementsByTagName("div")[0];


//1 кг = 2.2 фута

let input = document.getElementsByName("kilo")[0];

input.oninput = function () {
    div.innerText =  +this.value * 2.2; // Конвертація у number
}
