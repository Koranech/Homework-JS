//Створити функцію, яка робить глибоку копію об’єкта.
//
// Додати перевірки на undefined, null, NaN.
//
// Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції, які в нього були до цього моменту.

user = {
    id: 1,
    name: 'John',
    greeting() {
        return 'Hello World!';
    }
}

// let newUser = JSON.parse(JSON.stringify(user))

function newUser(obj) {
    if (obj) {
        let functions = [];
        for (const key in obj) {
            if (typeof obj[key] === 'function') {
                let functionClone = obj[key].bind({});
                functions.push({functionClone, key})
            }
        }
        console.log(functions)
        const parseUser = JSON.parse(JSON.stringify(obj));
        for (const func of functions) {
            parseUser[func.key] = func.functionClone;
        }
        return parseUser;
    }

    throw new Error('ERROR')
}


console.log(newUser(user));
