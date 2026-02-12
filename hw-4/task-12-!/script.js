//створити функцію swap(arr,index1,index2).
// Функція міняє місцями значення у відповідних індексах
//
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swapElementsOfArray(array, index1, index2){
    if (index1< array.length && index2< array.length){
       // В даному випадку index1 i index2 - це не порядкові номери індексів, це порядкові номери чисел в масиві
        let swapElement = array[index1]; //створив ще одну комірку в пам'яті та збережу її для коректної заміни
        array[index1] = array[index2];
        array[index2] = swapElement;
        //бо якщо просто зробити
        // array[index1] = array[index2];
        // array[index2] = array[index1];
        //то перший елемент заміниться, а другий залишиться незмінним (послідовність дій)
        return array;
    }
    return 'Елемента з таким індексом в масиві не існує';
}

arr =[1,2,3,4,5, 6];
console.log(swapElementsOfArray(arr, 1, 5));











function swap2(arr, i1, i2){
    if(i1 < arr.length && i2 < arr.length){
        let temp = arr[i1]
        arr[i1] = arr[i2];
        arr[i2] = temp;
        return arr;
    }

}

console.log(swap2(arr,0, 5))
