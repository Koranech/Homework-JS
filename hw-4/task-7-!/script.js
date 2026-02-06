function writer(text, liCount) {
   document.write('<ul>')
    for (let i = 0; i < liCount; i++) {
        document.write(` <li>${text}</li>`)}
    document.write('</ul>')
}

writer('як справи?', 4);
