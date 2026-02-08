let minOfNumbers = (arr) => {
    let minNumber = arr[0]
    for (let i = 1; i < arr.length; i++) {
        const number = arr[i];
        if (number < minNumber) {
            minNumber = number
        }
    }
    return minNumber;
}

let array = [1, 3123, -33, 313131, -99]

console.log(minOfNumbers(array));
