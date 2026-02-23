//Створити форму з трьома полями для name, surname, age та кнопкою.
// При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ.
// Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом

let h1 = document.getElementsByTagName("h1")[0];

let loginForm = document.getElementById("login");

let nameInput = document.getElementsByName("name")[0];
let surnameInput = document.getElementsByName("surname")[0];
let ageInput = document.getElementsByName("age")[0];

console.log(nameInput)

loginForm.onsubmit = function (ev){
    ev.preventDefault();
    h1.innerText = `Name - ${nameInput.value}, Surname - ${surnameInput.value}, Age - ${ageInput.value}`;
}
