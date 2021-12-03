//Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
let valid = (a) => {
let a1 = a.replace(/[^a-zа-яё]/gi, '');
let a2 = a1.toUpperCase();
let i = 1;
for ( i; i < a1.length; i++) {
    if (a1[i] === a2[i]) {
        break;
    }
}
let a3 = a1.slice(0, i);
let a4 = a1.slice(i, a1.length);
console.log(a3 + ' ' + a4);
}

//valid(n1);
//valid(n2);
//valid(n3);
//end


//створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let arr = [];
let random = (a,b) => {
    for ( let i = 0; i < b; i++) {
        a[i] = Math.floor(Math.random() * 100);
    }
    console.log(a);
}

//random(arr,5);
//end


//створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
//random(arr,5);
//console.log(arr.sort());
//end


//створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа
//random(arr,11);
let array = arr.filter((item) => {
    if (item % 2 === 0) {
        return true;
    }
});
//console.log(array);
//end


//створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
//random(arr,6);
let newArr = arr.map(function callback(value,index) {
    return arr[index] + '';
})
//console.log(newArr);
//end


//створити функцію sortNums(direction),
//яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//random(arr,5);
let sortNums = (array, direction) => {
    if (direction === 'ascending') {
        let newArray = array.sort();
    } else if ( direction === 'descending') {
        let newArray = array.sort((a,b) => b - a);
    } else {
        console.log("Wrong input!")
    }
}
//sortNums(arr, 'descending');
//end


//відсортувати його за спаданням за monthDuration

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let sortDuration = (a) => {
    a.sort(( a,b) => b.monthDuration - a.monthDuration);
    for( let i of a ) {
        console.log(i);
    }
}

//sortDuration(coursesAndDurationArray);
//end


//відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filterDuration = (a) => {
    a.filter(a => a.monthDuration > 5)
    for( let i of a) {
        console.log(i);
    }
}
//filterDuration(coursesAndDurationArray);
//end