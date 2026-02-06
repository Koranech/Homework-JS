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

function userWriter(arr) {
        for (const item of arr) {
                console.log(item);
        }
}

userWriter(users)
