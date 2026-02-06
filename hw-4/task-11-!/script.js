//створити функцію sum(arr), яка приймає масив чисел,
// сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sumOfArrayNumbers(array){
    let counter = 0; //Потрібен лічильник, з котрого все почнеться
    for (const number of array) {
        counter = counter + number;
    }
    return counter;
}

let arr = [11, 22, 33, 44, 55, 66]
console.log(sumOfArrayNumbers(arr));

let arr2 = [113131, -222, -33333, 44333, 14155, 6166]
console.log(sumOfArrayNumbers(arr2));
