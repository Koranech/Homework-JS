let coursesAndDurationArray = [

    {title: 'JavaScript Complex', monthDuration: 5},

    {title: 'Java Complex', monthDuration: 6},

    {title: 'Python Complex', monthDuration: 6},

    {title: 'Python Complex', monthDuration: 4},

    {title: 'FullStack', monthDuration: 7},

    {title: 'Frontend', monthDuration: 4}

];

let newArr = coursesAndDurationArray.map((value, index) => {return {id: index+1, ...value}})

console.log(newArr)
