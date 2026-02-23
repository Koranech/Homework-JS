//Є масив:
//
// [‘Main’,’Products’,’About us’,’Contacts’]
//
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let ul = document.getElementsByTagName('ul')[0]

let arr = ['Main', 'Products', 'About us', 'Contacts']

for (const element of arr) {
    let li = document.createElement('li');
    li.innerText = element
    ul.appendChild(li)
}
