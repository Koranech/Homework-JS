let str = 'Ревуть воли як ясла повні'

function stringToarray(str){
    if (str){
        let newArr = str.split(' ');
        return newArr;
    }
    else
        return ['']; //виключаєм пусті стрінги і false-подібні значення
}

console.log(stringToarray(str));
