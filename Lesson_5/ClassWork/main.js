
//створити функцію яка приймає три числа та виводить найменьше.
let min = (a,b,c) => {
    if ( a <= b && a <= c) {
        console.log(a);
    }
    else if (b <= a && b <= c ) {
        console.log(b);
    }
    else {
        console.log(c);
    }
}

//min(11,12,123);
//end


//створити функцію яка приймає три числа та виводить найбільше.
let max = (a,b,c) => {
    if ( a >= b && a >= c) {
        console.log(a);
    }
    else if (b >= a && b >= c ) {
        console.log(b);
    }
    else {
        console.log(c);
    }
}

//max(11,12,133);
//end


//створити функцію яка повертає найбільше число з масиву
let maxNum = (a) => {
    let n = 0;
    for ( let i of a) {
        if ( n <= i) {
            n = i;
        }
    } console.log(n);
}

let arr = [12,0,-22,32,12,45,66];
//maxNum(arr);
//end


//створити функцію яка повертає найменьше число з масиву
let minNum = (a) => {
    let n = 0;
    for ( let i of a) {
        if ( n <= i) {
            n = i;
        }
    }
    for ( let i of a) {
        if ( n >= i ) {
            n = i;
        }
    } console.log(n);
}
//minNum(arr);
//end


//створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let sum = (a) => {
    let s = 0;
    for (let i of a) {
        s += i;
    }
    console.log(s);
}

let arr1 = [12,10,8]; // => 30
//sum(arr1);
//end


//створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let mean = (a) => {
    let s = 0;
    for (let i of a) {
        s += i;
    }
    console.log(s / a.length);
}

//mean(arr1);
//end


//створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
let minMaxNum = (a) => {
    let n = 0;
    for ( let i of a) {
        if ( n <= i) {
            n = i;
        }
    } console.log(n)
    let m = n;
    for ( let i of a) {
        if ( m >= i ) {
            m = i;
        }
    } return m;
}

//let a = minMaxNum(arr); // виводить найбільше і тут повертає найменше
//console.log(a); // виводить найменше
//end


//створити функцію яка заповнює масив рандомними числами
let random = (a,b) => {
    for (let i = 0; i < b; i++) {
        a[i] = Math.round(Math.random() * 100);
    }
    return a;
}
let arr2 = [];
random(arr2, 12);
//console.log(arr2);
//end


//створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let randomWithLimit = (a,b,limit) => {
    for (let i = 0; i < b; i++) {
        a[i] = Math.round(Math.random() * limit);
    }
    return a;
}
let arr3 = [];
randomWithLimit(arr3, 5, 3);
//console.log(arr3);
//end


//Функція приймає масив та робить з нього новий масив в зворотньому порядку.
let arr4 = ['e', 'l', 'i', 'm', 's'];
let turn = (a) => {
    let b = [];
    for ( let i = 0; i < a.length; i++) {
        b[i] = a[a.length - i - 1];
    }
    for ( let i = 0; i < b.length; i++) {
        a[i] = b[i];
    } return a;
}
turn(arr4);
//console.log(arr4);
//end