//створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let s =  (a,b) => {
    let s = a * b;
    console.log('Площа прямокутника = ' + s);
}

//s(12,13)
//end


//створити функцію яка обчислює та повертає площу кола з радіусом r
let r = (r) => {
    const p = 3.14;
    let s = p * Math.pow(r, 2);
    console.log(s);
}

//r(12);
//end


//створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let hr = (h,r) => {
    const p = 3.14;
    let s = (2 * p * r * h) + (2 * p * Math.pow(r, 2));
    console.log(s);
}

//hr(1,3);
//end


//створити функцію яка приймає масив та виводить кожен його елемент
let arr = [1, 2, 3, 4, 5, 6, 7];
let view = (a) => {
    for ( let i of a) {
        console.log(i);
    }
}

//view(arr);
//end


//створити функцію яка створює параграф з текстом. Текст задати через аргумент
let txt = (a) => {
    document.write(`<p>${a}</p>`);
}

//txt('Some text Some text Some text Some text Some text Some text');
//end


//створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let list = (a) => {
    document.write(`<ul>
                        <li>${a}</li>
                        <li>${a}</li>
                        <li>${a}</li>
                                 </ul>`);
}

//list('item of list')
//end


//Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let listWithNumbers = (a,b) => {
    document.write(`<ul>`)
    for (let i = 1; i <= b; i++ ) {
        document.write(`<li>${a + ' ' + i}</li>`)
    }
    document.write(`</ul>`);
}

//listWithNumbers('txt list', 15);
//end


//створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let array = [1,2,3, 'txt', 'txt2', 'txt3', true, false];
let listArr = (a) => {
    document.write(`<ul>`)
    for (let i = 0; i < a.length; i++ ) {
        document.write(`<li>${a[i]}</li>`)
    }
    document.write(`</ul>`);
}

//listArr(array);
//end


//створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let ar = [ {
    id: 1,
    name: 'One',
    age: 11
},
    {
        id: 2,
        name: 'Two',
        age: 22
    },
    {
        id: 3,
        name: 'Three',
        age: 33
    }
]

let viewArr = (a) => {
    for (let i = 0; i < a.length; i++) {
        document.write(`<div>id: ${a[i].id}  name: ${a[i].name}  age: ${a[i].age}</div>`)
    }

}

//viewArr(ar);
//end
