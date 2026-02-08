let swap = (arr, index1, index2) => {
   if(index1 < arr.length && index2 < arr.length){
       let switcher = arr[index1];
       arr[index1] = arr[index2];
       arr[index2] = switcher;
       return arr;
   }
}
let array = [11, 22, 33, 44, 55, 66];

console.log(swap(array, 0, 4));
