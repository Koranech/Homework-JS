// Є масив coursesArray котрий лежить в arrays.js
// (на цей момент ви вже знаєте де він знаходиться)
//
//
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками,
// в яких будуть зберігатись значення окремих властивостей,
// для властивості modules зробити список з елементами
//
// Приклад структури знаходиться у файлі example.png,
// який лежить в папці з поточним файлом


let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

for (const course of coursesArray) {
    let divBox = document.createElement('div');
    divBox.classList.add('box')
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    let header = document.createElement('header');
    header.innerText = course.title
    let section = document.createElement('section')
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    let asideLeft = document.createElement('aside');
    asideLeft.classList.add('aside-left');
    asideLeft.innerText = course.monthDuration;

    let asideRight = document.createElement('aside');
    asideRight.classList.add('aside-right');
    asideRight.innerText = course.hourDuration;

    section.append(asideLeft, asideRight);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    let main = document.createElement('main');

    let firstDiv = document.createElement('div');
    let secondDiv = document.createElement('div');
    let thirdDiv = document.createElement('div');
    let ul = document.createElement('ul');


    let modules = course.modules;
    for (const module of modules) {
        if(module === 'html'){
            firstDiv.innerText = module;
        }
       else if(module === 'css'){
            secondDiv.innerText = module;
        }
       else if(module === 'js'){
            thirdDiv.innerText = module;
        }
        else{
            let li = document.createElement('li');
            li.innerText = module;
            ul.appendChild(li);
        }
    }

    main.append(firstDiv, secondDiv, thirdDiv, ul)

    divBox.append(header, section, main)
    document.body.append(divBox)

}


