function User(id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    return this
}



let users = [
    new User(1, 'ketchup', 'pomidor', '12312e2asd@gmail.com', '+3806666766666'),
    new User(2, 'kakd', '19rf-3', '12312e2as@gmail.com', '+3806616766666'),
    new User(3, 'adadada', ' ujm9o23', '12312e2a@gmail.com', '+3802666766666'),
    new User(4, 'x3edryh890', '123ruj-', '12312e2@gmail.com', '+3802666766666'),
    new User(5, '12rhujip', '23uj90', '12312e@gmail.com', '+3806666366666'),
    new User(6, '23879y', '34t8i9', '12312@gmail.com', '+3806666766566'),
    new User(7, '83i9h', '3rt7g8', '1231@gmail.com', '+3806666736666'),
    new User(8, '2390ryh', 'y908h', '123@gmail.com', '+3806666766566'),
    new User(9, '123ru8i0', '34t', '12@gmail.com', '+3806666766665'),
    new User(10, '123i0', '45bnj', '1d@gmail.com', '+3806666766866'),
]

let usersFilter = users.filter(user => user.id%2===0);
console.log(usersFilter)
