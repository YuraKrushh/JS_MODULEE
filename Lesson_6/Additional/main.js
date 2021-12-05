//Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
//let newArr = [];
let cutString = (str, n) => {
    while (str.length) {
        newArr.push(str.substring(0, n));
        str = str.slice(n, str.length+1);
    }
    console.log(newArr)
}
//cutString('наслаждениелододлодла',10)   // [нас,лаж,ден,ие]


//Створити функцію-валідатор для адрес електронної пошти.
// Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ
// далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com


let str = 'some.email@gmail.com'
let str_new = '';
let valid = (str) => {
    let n = str.indexOf('@');
    if ( n < 2 && n !== -1 ) {
        console.log('Minimum 2 sign before @')
    } else if ( n === -1 )  {
        console.log('Need "@" ');
    } else {
        let m = str.indexOf('.');
        let k = 0;
        for ( let i of str) {
            if ( i === '.') {
                k++;
            }
        }
        if ( k >= 2) {
            console.log('Too much "."');
        } else {
            if ( m - n <= 2) {
                console.log('Wrong mail name');
            } else {
                str_new = str.toLowerCase();
            }
        }

    } return str_new;
}

//valid(str);
//console.log(str_new);
//end


//є масив, відсортувати його в спадаючому порядку за кількістю елементів в полі modules

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

let sort = (arr) => {
    arr = arr.sort((a,b) => b.modules.length - a.modules.length);
    console.log(arr);
}

//sort(coursesArray);
//end


//Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//let symb = "о", ;
//document.writeln(count(str, symb)) // 5
let s = "Астрономия это наука о небесных объектах"

let count = (str,symb) => {
    let num = 0;
    let up = symb.toUpperCase();
    if ( up === symb) { str = str.toUpperCase()} //щоб було не важливо чи ми шукаємо 'о' чи 'О';
    else { str = str.toLowerCase()}
    str.split('').map( function (value) { if (value === symb) { num++ }  return num } );
    console.log(num)
}
//count(s,'о')
//


//Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
let str_cut = "Сила тяжести приложена к центру масс тела";
let cutter = (str, n) => {
    str_cut = str_cut.split(' ').slice(0,n).join(' ');
    console.log(str_cut)
}

cutter(str_cut,3);
