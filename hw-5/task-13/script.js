let exchange = (sumUAH, currencyValues, exchangeCurrency) =>{
let newCurrency;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            newCurrency = item.value
        }
    }
    return sumUAH / newCurrency;
}


let money = 15000;

let currencies = [
    {currency: 'USD', value: 43},
    {currency: 'EUR', value: 51},
];

console.log(exchange(money, currencies, 'EUR'));
console.log(exchange(money, currencies, 'USD'));
