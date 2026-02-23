//Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так,
// щоб при натисканні на кнопку зникав елемент з id=”text”.

let h2 = document.createElement("h2")

let h1 = document.getElementById('text')

let deleteButton = document.getElementById('delete')
let backButton = document.getElementById('back')

deleteButton.onclick = function () {
    h1.style.display = 'none'
}


backButton.onclick = function () {
    h1.style.display = 'block'
}
backButton.addEventListener('click', function () {
    h1.style.color = 'green'
})
