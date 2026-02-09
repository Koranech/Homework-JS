// описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
//
// Після опису, використовуючи функції масивів:
//
//  – знайти піковий туз (ace spade)
//
//  – всі шістки
//
//  – всі червоні карти
//
//  – всі буби (diamond)
//
//  – всі трефи від 9 та більше
//
// Приклад моделі об’єкту карти:
//
// {
//
//     cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
//
//     value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//
//     color:”, // ‘red’,’black’
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

//console.log(cards)

//знайти піковий туз (ace spade)
console.log(cards.filter(value => value.suit === 'spade' && value.value === 'ace' ));

//всі шістки
console.log(cards.filter(value => value.value === '6'));

//всі червоні карти
console.log(cards.filter(value => value.color === 'red'));

//всі буби (diamond)
console.log(cards.filter(value => value.suit === 'diamond'));

//  – всі трефи від 9 та більше
console.log(cards.filter(value => value.suit === 'clubs' && value.value !== '6' && value.value !== '7' && value.value !== '8'))
