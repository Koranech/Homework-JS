
//Так як в замовленні може бути багато речей, то краще всього зробити, щоб можна було задавати багато продуктів
function Client(id, name, surname , email, phone, ...products){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = products;
}

//Окремий конструктор для продуктів
function Product(title, price){
    this.title = title;
    this.price = price;
}

let clients = [
    new Client(4, 'ketchup', 'pomidor', '12312e2asd@gmail.com', '+3806666766666', new Product('suhariki', 20), new Product('cola', 50)),
    new Client(2, 'kakd', '19rf-3', '12312e2as@gmail.com', '+3806616766666', new Product('suhariki', 20), new Product('cola', 50)),
    new Client(3, 'adadada', ' ujm9o23', '12312e2a@gmail.com', '+3802666766666', new Product('suhariki', 20), new Product('cola', 50)),
    new Client(1, 'x3edryh890', '123ruj-', '12312e2@gmail.com', '+3802666766666', new Product('suhariki', 20), new Product('cola', 50)),
    new Client( 8, '12rhujip', '23uj90', '12312e@gmail.com', '+3806666366666', new Product('suhariki', 20), new Product('cola', 50)),
    new Client(6, '23879y', '34t8i9', '12312@gmail.com', '+3806666766566', new Product('suhariki', 20), new Product('cola', 50)),
    new Client(7, '83i9h', '3rt7g8', '1231@gmail.com', '+3806666736666', new Product('suhariki', 20), new Product('cola', 50)),
    new Client(5, '2390ryh', 'y908h', '123@gmail.com', '+3806666766566', new Product('suhariki', 20), new Product('cola', 50)),
    new Client(9, '123ru8i0', '34t', '12@gmail.com', '+3806666766665', new Product('suhariki', 20), new Product('cola', 50)),
    new Client(10, '123i0', '45bnj', '1d@gmail.com', '+3806666766866', new Product('suhariki', 20), new Product('cola', 50)),
]

console.log(clients)

let client = new Client(1, 'ketchup', 'pomidor', '12312e2asd@gmail.com', '+3806666766666', new Product('suhariki', 20), new Product('cola', 50))

console.log(client.order)
