// створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18,
// та повідомити про це користувача

let h1 = document.getElementsByTagName("h1")[0];
let input = document.getElementById("age");

let form = document.getElementById("form");

form.onsubmit = function(ev){
    ev.preventDefault();
    let age = input.value;
    if(age >= 18){
        h1.innerText = 'Welcome';
    }
    else{
        h1.innerText = 'No!';
    }
}
