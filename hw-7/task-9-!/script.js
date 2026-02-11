//Через Array.prototype. створити власний foreach, filter


Array.prototype.ownForeach = function (callback) {
let arr = this;
    for (const item of arr) {
        callback(item)
    }
}

let arr = [1, 2, 4, 5]
arr.ownForeach((a) => console.log(a))

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~')


Array.prototype.ownFilter = function (element) {
    let arr = []
    for (const item of this) {
        if (element(item)) {
            arr.push(item)
        }
    }
    return arr
}

let users = [
        {name: "Олександр", age: 25, status: true},
        {name: "Марія", age: 30, status: false},
        {name: "Дмитро", age: 19, status: true},
        {name: "Олена", age: 42, status: false},
        {name: "Андрій", age: 28, status: true},
        {name: "Анна", age: 35, status: true},
        {name: "Максим", age: 22, status: false},
        {name: "Вікторія", age: 27, status: true},
        {name: "Ігор", age: 31, status: false},
        {name: "Юлія", age: 24, status: true}
    ];

let findAge = users.ownFilter((user) => user.age > 30);
console.log(findAge);

