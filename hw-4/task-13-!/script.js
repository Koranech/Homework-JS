//mkGDenYnNjn
//
// Написати функцію обміну валюти exchange (sumUAH,currencyValues,exchangeCurrency)
//
//
// Приклад exchange(10000,[{currency:’USD’,value:25},
// {currency:’EUR’,value:42}],’USD’) // => 400

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let chosenCurrency; //вводим нову зміну 'обрана валюта'
    //ітеруємо масив валют
    for (const item of currencyValues) {
            //якщо назва валюти в масиві 'currencies' співпадає зі вказаною нами валютою 'exchangeCurrency'
        if (item.currency === exchangeCurrency) {
            //тоді назва валюти з масиву присвоюється до внутрішньої змінної 'chosenCurrency'
            chosenCurrency = item;
        }
    }
    //як результат повертаємо => наші гроші поділені на значення/вартість нашої обраної валюти
    let result = sumUAH / chosenCurrency.value
    return result;
}

let money = 10000

let currencies =[
    {currency: 'USD', value: 43},
    {currency: 'EUR', value: 51}
]

console.log(exchange(money, currencies,'EUR'));

