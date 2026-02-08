let sum = (arr) =>{
    let counter = 0;
    for (const element of arr) {
        counter = counter + element;
    }
    return counter;
}

let array = [11, 22, 33, 44, 55]

console.log(sum(array));
