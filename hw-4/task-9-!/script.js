let users = [
        {id: 1,name: "Олександр", age: 25, status: true},
        {id: 2, name: "Марія", age: 30, status: false},
        {id: 3, name: "Дмитро", age: 19, status: true},
        {id: 4, name: "Олена", age: 42, status: false},
        {id: 5, name: "Андрій", age: 28, status: true},
        {id: 6, name: "Анна", age: 35, status: true},
        {id: 7, name: "Максим", age: 22, status: false},
        {id: 8, name: "Вікторія", age: 27, status: true},
        {id: 9, name: "Ігор", age: 31, status: false},
        {id: 10, name: "Юлія", age: 24, status: true}
    ];

function divBuilder(array) {
    for (const element of array) {
        document.write(`<div>id - ${element.id}; name - ${element.name}; age - ${element.age}</div> <hr>`);
    }
}

divBuilder(users)
