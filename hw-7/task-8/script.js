class Cinderella{
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince{
    constructor(name, age, findedShoe) {
        this.name = name;
        this.age = age;
        this.findedShoe = findedShoe;
    }
}

let Cinderellas = [
    new Cinderella('Ann', 20, 43),
    new Cinderella('2', 30, 30),
    new Cinderella('3', 40, 31),
    new Cinderella('4', 50, 20),
    new Cinderella('5', 100, 25),
    new Cinderella('6', 17, 27),
    new Cinderella('7', 34, 40),
    new Cinderella('8', 67, 21),
    new Cinderella('9', 122, 19),
    new Cinderella('10', 31, 16),
]


let prince = new Prince('Gercog', 25, 30);

for (const cinderella of Cinderellas) {
    if(cinderella.footSize === prince.findedShoe){
        console.log(cinderella)
    }
}



findFoot = Cinderellas.find(value => value.footSize === prince.findedShoe)
console.log(findFoot);

