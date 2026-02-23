// *** (подібне було вище, але…будьте уважні в другій частині)
// створити сторінку з довільним блоком, в середині якого є значення “100грн”
//
// при перезавантаженні сторінки до значення додається по 10грн, але !!!
// зміна ціни відбувається тільки на перезавантаження,
// які відбулись пізніше ніж 10 секунд після попереднього.
//
// При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд,
// нічого не відбувається

let div = document.getElementsByTagName('div')[0];

let now = Date.now()
let lastTime = +localStorage.getItem('lastTime')
let currentValue = +localStorage.getItem('value');

if (!currentValue) {
    currentValue = 100;
}

if (now - lastTime > 10000) {
    currentValue += 10;
    localStorage.setItem('lastTime', now);
}

localStorage.setItem('value', currentValue);
div.innerText = `${currentValue} грн`
