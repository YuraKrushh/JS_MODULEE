//Дано натуральное число n. Выведите все числа от 1 до n.
// (function (n) {
//     for (let i = 1; i <= n; i++) {
//         console.log(i);
//     }
// }(4));
//end


//Даны два целых числа A и В .
// Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
let row = (a,b) => {
if (a <= b) {
    for ( let i = a; i <= b; i++) {
        console.log(i);
    }
}
else {
    for ( let i = b; i <= a; i++) {
        console.log(i);
    }
}
}
//row(33,21);
//end


//функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
let arr = [12,13,14,16,20];
function i (arr, i) {
    let a  = arr[i+1];
    arr[i+1] = arr[i];
    arr[i] = a;
    return arr;
}
let arr1 = i(arr,3);
//console.log(arr1);
//end


//Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
let array = [0,0,0,0,0,0,0,0,3,4];
let zero = (array) => {
    let arrayNew = [];
    let n = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 0 ) {
            arrayNew[n] = array[i];
            n++;
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0 ) {
            arrayNew[n] = array[i];
            n++;
        }
    }
    console.log(arrayNew);
}
//zero(array);
//end