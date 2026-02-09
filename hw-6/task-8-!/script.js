let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},

{title: 'Java Complex', monthDuration: 6},

{title: 'Python Complex', monthDuration: 6},

{title: 'QA Complex', monthDuration: 4},

{title: 'FullStack', monthDuration: 7},

{title: 'Frontend', monthDuration: 4}

];

let sortByMonthDuration = coursesAndDurationArray.sort((a, b) => b.monthDuration -a.monthDuration);
console.log(sortByMonthDuration);

let filteredCourses = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filteredCourses);

let mapCourses = coursesAndDurationArray.map((value, index) => {return{id: index +1, ...value}})
console.log(mapCourses);

//Або

let newCourses = coursesAndDurationArray
.sort((a, b) => b.monthDuration - a.monthDuration)
.filter(value => value.monthDuration > 5)
.map((value, index) =>({id: index +1, ...value}))

console.log(newCourses);
