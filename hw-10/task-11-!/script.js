//***PAGINATION
//
// зробити масив на 100 об’єктів та дві кнопки prev next
//
// при завантаженні сторінки з’являються перші 10 об’єктів.
//
// При натисканні next виводяться наступні 10 об’єктів
//
// При натисканні prev виводяться попередні 10 об’єктів


let arr = []

for (let i = 0; i < 100; i++) {
    let obj = {id: i, name: `User ${i+1}`}
    arr.push(obj)
}


let start = 0;

let container = document.getElementsByClassName('container')[0]

let render = function(){
    container.innerText = ''
    let slice = arr.slice(start, start + 10);
    for (const item of slice) {
        let div = document.createElement('div')
        div.innerText = item.id + ' ' + item.name;
        container.appendChild(div);
    }
}

prev = document.getElementById('prev');
next = document.getElementById('next');

prev.addEventListener('click', () => {
    if(start > 0){
        start -=10
        render()
    }
});

next.addEventListener('click', () => {
    if(start + 10 < arr.length){
        start +=10
        render()
    }
});
