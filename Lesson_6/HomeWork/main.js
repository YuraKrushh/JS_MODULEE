

//Знайти та вивести довижину настипних стрінгових значень
let s1 = 'hello world';
let s2 = 'lorem ipsum';
let s3 = 'javascript is cool';

let long = (a) => {
    console.log(a.length);
}
//long(s1);
//end


//Перевести до великого регістру наступні стрінгові значення
let up = s1.toUpperCase();
//console.log(up);
//end


//Перевести до нижнього регістру настипні стрінгові значення
let low = up.toLowerCase();
//console.log(low);
//end


//Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
//console.log(str);
let strNew = str.trim();
//console.log(strNew);
//end


//Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
let stringToArray = (str) => {
    str = str.split(' ');
    return str;
}
let stR = 'Каждый охотник желает знать';
let arr = stringToArray(stR);
//document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
//console.log(arr);
//end


//Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
function delete_characters(a,n) {
    a = a.slice(0,n);
    return a;
}
//document.writeln(delete_characters(stR, 7));
//end


//Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
//При цьому всі символи рядка необхідно перевести у верхній регістр.
let sTr = "HTML JavaScript PHP";

let insert_dash = (str) => {
    str = str.toUpperCase();
    str = str.replaceAll(' ','-');
    return str;
}
//document.writeln(insert_dash(sTr));
//end


//Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let up_first = (str) => {
    let s = str[0].toUpperCase();
    str = str.replace(str[0], s);
    console.log(str);
}
//up_first('upper');
//end


//Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let capitalize = (str) => {
    return str.split(' ').map(word=>word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};
document.write(capitalize('okten hi you are welcome'));
console.log(capitalize('okten hi you are welcome'));