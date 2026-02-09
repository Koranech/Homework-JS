let nums =  [11,21,3];

function sortNums(array,direction){
   let sort = array.sort((a,b)=> {
        if (direction === 'ascending'){
           return  a-b
        }
       else if (direction === 'descending'){
            return  b-a
        }
    });
    return sort
}

//Або
function sortNums2(array,direction){
    if(direction === 'descending')return array.sort((a,b)=> b-a);
    if(direction === 'ascending')return array.sort((a,b)=> a-b);
}


console.log(sortNums(nums, 'ascending'));
console.log(sortNums2(nums, 'descending'));

