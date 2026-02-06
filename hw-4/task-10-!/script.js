let array = [1, 2, -15, 999, -145]

function minValueOfArray(arr) {
   let minValue = arr[0]; //Щоб в подальшому перезаписувати
    for (const number of arr) {
        if (number < minValue) {
            minValue = number
        }
    }
    return minValue;
}

console.log(minValueOfArray(array));

//Щоб перший елемент не порівнювася з самим собою
function minValueOfArray2(arr) {
 let minValue = arr[0]; //Щоб в подальшому перезаписувати
    for (let i = 1; i < arr.length; i++) {
        let number = arr[i]
        if (number < minValue) {
            minValue = number;
        }
    }
    return minValue;
}

console.log(minValueOfArray2(array));

//спрощений варіант
function minValueOfArray3(arr){
    for (let i = 1; i < arr.length; i++) {
            if (arr[i] < arr[0]) {
                arr[0] = arr[i]
            }
    }
    return arr[0]
}

console.log(minValueOfArray3(array));









































