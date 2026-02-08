let list = (arr) => {
    document.write('<ul>')
    for (const element of arr) {
        document.write(`<li>${element}</li>`)
    }
}
document.write('</ul>')
list(['burger', true, 12313, 'cinema'], 3)
