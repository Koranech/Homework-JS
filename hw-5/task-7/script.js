let list = (msg, quantity) => {
    document.write('<ul>')
    for (let i = 0; i < quantity; i++) {
        document.write(`<li>${msg}</li>`)
    }
}
document.write('</ul>')
list('burger', 3)
