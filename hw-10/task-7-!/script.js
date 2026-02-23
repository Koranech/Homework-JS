//В localStorage зберігаються масиви. Вам потрібно зробити функцію,
// які дістає потрібний вам масив з localStorage та додає в нього об’єкт
//
// сигнатура функції –
//
// addToLocalStorage(arrayName:string,objToAdd:any{}):void


function addToLocalStorage(arrayName, objToAdd) {
    const lsArr = localStorage.getItem(arrayName);
    if (!lsArr) {
        throw new Error('не існує такого масиву');
    }

    const array = JSON.parse(lsArr);
    if (typeof objToAdd === "object") {
        array.push(objToAdd);
    }
    localStorage.setItem(arrayName, JSON.stringify(array));
}

let obj = {
    id: 1,
    name: "John",
}

addToLocalStorage('sessionList', obj)

let obj2 = {
    id: 2,
    name: "Peter",
}
addToLocalStorage('sessionList', obj2)

let obj3 = {
    id: 3,
    name: "Jarvis",
}
addToLocalStorage('sessionList', obj3)

