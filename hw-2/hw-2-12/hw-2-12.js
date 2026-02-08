let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let course1 = coursesAndDurationArray[0];
if(course1.monthDuration>5){
    console.log('Super!')
}
else{
    console.log('Not Super!')
}

let course2 = coursesAndDurationArray[1];
if(course2.monthDuration>5){
    console.log('Super!')
}
else{
    console.log('Not Super!')
}

let course3 = coursesAndDurationArray[2];
if(course3.monthDuration>5){
    console.log('Super!')
}
else{
    console.log('Not Super!')
}

let course4 = coursesAndDurationArray[3];
if(course4.monthDuration>5){
    console.log('Super!')
}
else{
    console.log('Not Super!')
}

let course5 = coursesAndDurationArray[4];
if(course5.monthDuration>5){
    console.log('Super!')
}
else{
    console.log('Not Super!')
}

let course6 = coursesAndDurationArray[5];
if(course6.monthDuration>5){
    console.log('Super!')
}
else{
    console.log('Not Super!')
}
console.log('~~~~~~~~~~')

//Це з 3 уроку
for (const course of coursesAndDurationArray) {
    if(course.monthDuration>5){
        console.log('Super!')
    }
    else{
        console.log('Not Super!')
    }
}
