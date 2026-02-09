// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
//
// Приклад моделі кінцевого об’єкту
//
// {
//
//     spades:[],
//
//         diamonds:[],
//
//     hearts:[],
//
//     clubs:[]
//
// }

let suits = ['spade', 'diamond', 'heart', 'clubs'];
let values = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];

let cards = [];

for (const suit of suits) {
    for (const value of values) {
        let card = {suit: suit, value: value}
        if(card.suit === 'heart' || card.suit === 'diamond'){
            card.color = 'red'
        }
        else{
            card.color = 'black'
        }
        cards.push(card)
    }
}

console.log(cards);

let reduce = cards.reduce((acc, card) => {
    if(card.suit === 'spade'){
        acc.spades.push(card);
    }
    else if(card.suit === 'diamond'){
        acc.diamonds.push(card);
    }
    else if(card.suit === 'heart'){
        acc.hearts.push(card);
    }
    else {
        acc.clubs.push(card);
    }
    return acc;
},{spades: [],  diamonds:[],  hearts:[], clubs:[]})

console.log(reduce)
