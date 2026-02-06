let arr =['aadada', 1231, true, '1290h12', 13913.131, false]

function rebuilder(array){
   document.write('<ul>');
    for (const element of array) {
        document.write(`<li>${element}</li>`);
    }
    document.write('</ul>');
}

rebuilder(arr)
