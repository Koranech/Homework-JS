// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
//
// При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.

//let form = document.forms['form'] // якщо б було ім'я у форми
let form = document.getElementById("form");

let table = document.getElementById("table");


form.onsubmit = function (ev) {
    table.innerText = ''; // очистка минулої таблиці
    ev.preventDefault();

    let linesValue = +form.lines.value;
    let cellsValue = +form.cells.value;
    let infoValue = form.info.value;
    console.log(linesValue, cellsValue, infoValue);

    for (let i = 0; i < linesValue; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < cellsValue; j++) {
            let td = document.createElement('td');
           td.innerText = infoValue;
            tr.appendChild(td)

        }
        table.appendChild(tr)

    }
}
