//- Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
// Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// document.body.onclick = function (e) {
//      console.log('Tag:' + e.target.tagName);
//     let arr = [];
//     let p = [];
//     function classFinder (start) {
//         if (start.children.length) {
//             for (const element of start.children){
//                 if (element.classList !== null && element.classList.length !== 0 ) {
//                     p = element.className.split(' ');
//                     arr = arr.concat(p);
//                 }
//                 classFinder(element)
//             }
//
//         }
//     }
//     classFinder(e.target)
//     let an = e.target.className.split(' ');
//     let as = []
//     for ( let i of an) {
//         if ( i !== '' && i !== null) {
//             as.push(i);
//         }
//     }
//     console.log('classes: ' + arr.concat(as));
//
//     let arr1 = [];
//     let p1 = [];
//     function classFinder1 (start) {
//         if (start.children.length) {
//             for (const element of start.children){
//                 if (element.id !== null && element.id !== '' ) {
//                     p1 = element.id;
//                     arr1 = arr1.concat(p1);
//                 }
//                 classFinder(element)
//             }
//
//         }
//     }
//     classFinder1(e.target)
//     let an1 = e.target.id;
//     let as1 = []
//     for ( let i of an1) {
//         if ( i !== '' ) {
//             as1.push(i);
//         }
//     }
//     console.log('id: ' + arr1.concat(as1.join('')));
//     console.log('height: '+e.target.offsetHeight + 'px')
//     console.log('width: '+e.target.offsetWidth + 'px')
//     console.log('-----------------')
// }
//end






//-- взять массив пользователей
let usersWithAddress = [
                {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
                {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
                {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
                {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
                {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
                {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
                {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
                {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
                {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
            ];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

// let f = document.getElementsByTagName('form')[0];
// let ch1 = f.getElementsByClassName('status')[0];
// let ch2 = f.getElementsByClassName('status')[1];
// let ch3 = f.getElementsByClassName('status')[2];
// let all = f.getElementsByClassName('status')[3];
// let btn = f.getElementsByTagName('button')[0];
// let div_show = []
//
//
// let statusFalse = usersWithAddress.filter(status => status.status === false)
// let age29 = usersWithAddress.filter(age => age.age > 29);
// let kyiv = usersWithAddress.filter(city => city.address.city === "Kyiv")
//
//
// btn.onclick = function (e) {
//     e.preventDefault();
//     if (ch1.checked === false && ch2.checked === false && ch3.checked === false && all.checked === true) {
//         div_show = document.getElementsByClassName('show');
//         for (let i of div_show) {
//             i.style.display ='none'
//
//         }
//         for (let i of usersWithAddress) {
//             let div = document.createElement('div');
//             div.classList.add('show');
//             div.style.margin = '9px'
//             div.style.padding = '5px'
//             div.style.display = 'inline-flex';
//             div.style.border = '2px solid black'
//             div.innerText = 'Name:'+i.name + '  Id: ' + i.id + ' Age: ' + i.age + ' ' + i.status + ' '
//                 + i.address.city + ' ' + i.address.street + ' ' + i.address.number;
//             document.body.append(div);
//
//         }
//     } else if (ch1.checked === true && ch2.checked === false && ch3.checked === false && all.checked === false) {
//             div_show = document.getElementsByClassName('show');
//             for (let i of div_show) {
//                 i.style.display = 'none'
//             }
//         for ( let i of statusFalse) {
//             let div = document.createElement('div');
//             div.classList.add('show');
//             div.style.margin = '9px'
//             div.style.padding = '5px'
//             div.style.display = 'inline-flex';
//             div.style.border = '2px solid black'
//             div.innerText = 'Name:'+i.name + '  Id: ' + i.id + ' Age: ' + i.age + ' ' + i.status + ' '
//                 + i.address.city + ' ' + i.address.street + ' ' + i.address.number;
//             document.body.append(div);
//     }
//     } else if (ch2.checked === true && ch1.checked === false && ch3.checked === false && all.checked === false) {
//         div_show = document.getElementsByClassName('show');
//         for (let i of div_show) {
//             i.style.display = 'none'
//         }
//         for (let i of age29) {
//             let div = document.createElement('div');
//             div.classList.add('show');
//             div.style.margin = '9px'
//             div.style.padding = '5px'
//             div.style.display = 'inline-flex';
//             div.style.border = '2px solid black'
//             div.innerText = 'Name:'+i.name + '  Id: ' + i.id + ' Age: ' + i.age + ' ' + i.status + ' '
//                 + i.address.city + ' ' + i.address.street + ' ' + i.address.number;
//             document.body.append(div);
//         }
//     } else if (ch3.checked === true && ch1.checked === false && ch2.checked === false && all.checked === false) {
//         div_show = document.getElementsByClassName('show');
//         for (let i of div_show) {
//             i.style.display = 'none'
//         }
//         for (let i of kyiv) {
//             let div = document.createElement('div');
//             div.classList.add('show');
//             div.style.margin = '9px'
//             div.style.padding = '5px'
//             div.style.display = 'inline-flex';
//             div.style.border = '2px solid black'
//             div.innerText = 'Name:'+i.name + '  Id: ' + i.id + ' Age: ' + i.age + ' ' + i.status + ' '
//                 + i.address.city + ' ' + i.address.street + ' ' + i.address.number;
//             document.body.append(div);
//         }
//     } else if (ch1.checked === true && ch2.checked === true && ch3.checked === false && all.checked === false) {
//         div_show = document.getElementsByClassName('show');
//         for (let i of div_show) {
//             i.style.display = 'none'
//         }
//         let newArr = statusFalse.filter(age => age.age > 29);
//         for (let i of newArr) {
//             let div = document.createElement('div');
//             div.classList.add('show');
//             div.style.margin = '9px'
//             div.style.padding = '5px'
//             div.style.display = 'inline-flex';
//             div.style.border = '2px solid black'
//             div.innerText = 'Name:'+i.name + '  Id: ' + i.id + ' Age: ' + i.age + ' ' + i.status + ' '
//                 + i.address.city + ' ' + i.address.street + ' ' + i.address.number;
//             document.body.append(div);
//         }
//     } else if (ch1.checked === true && ch2.checked === true && ch3.checked === true && all.checked === false) {
//         div_show = document.getElementsByClassName('show');
//         for (let i of div_show) {
//             i.style.display = 'none'
//         }
//         let newArr = statusFalse.filter(age => age.age > 29);
//         let newArr1 = newArr.filter(city => city.address.city === 'Kyiv');
//         for (let i of newArr1) {
//             let div = document.createElement('div');
//             div.classList.add('show');
//             div.style.margin = '9px'
//             div.style.padding = '5px'
//             div.style.display = 'inline-flex';
//             div.style.border = '2px solid black'
//             div.innerText = 'Name:'+i.name + '  Id: ' + i.id + ' Age: ' + i.age + ' ' + i.status + ' '
//                 + i.address.city + ' ' + i.address.street + ' ' + i.address.number;
//             document.body.append(div);
//         }
//     }
//     else if (ch1.checked === true && ch2.checked === false && ch3.checked === true && all.checked === false) {
//         div_show = document.getElementsByClassName('show');
//         for (let i of div_show) {
//             i.style.display = 'none'
//         }
//         let newArr = statusFalse.filter(city => city.address.city === 'Kyiv');
//         for (let i of newArr) {
//             let div = document.createElement('div');
//             div.classList.add('show');
//             div.style.margin = '9px'
//             div.style.padding = '5px'
//             div.style.display = 'inline-flex';
//             div.style.border = '2px solid black'
//             div.innerText = 'Name:'+i.name + '  Id: ' + i.id + ' Age: ' + i.age + ' ' + i.status + ' '
//                 + i.address.city + ' ' + i.address.street + ' ' + i.address.number;
//             document.body.append(div);
//         }
//     } else if (ch1.checked === false && ch2.checked === true && ch3.checked === true && all.checked === false) {
//         div_show = document.getElementsByClassName('show');
//         for (let i of div_show) {
//             i.style.display = 'none'
//         }
//         let newArr = age29.filter(city => city.address.city === 'Kyiv');
//         for (let i of newArr) {
//             let div = document.createElement('div');
//             div.classList.add('show');
//             div.style.margin = '9px'
//             div.style.padding = '5px'
//             div.style.display = 'inline-flex';
//             div.style.border = '2px solid black'
//             div.innerText = 'Name:'+i.name + '  Id: ' + i.id + ' Age: ' + i.age + ' ' + i.status + ' '
//                 + i.address.city + ' ' + i.address.street + ' ' + i.address.number;
//             document.body.append(div);
//         }
//     }
// }
//end




// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
// let next = document.getElementById('next')
// let back = document.getElementById('back')
// let images = document.getElementsByClassName('img');
//
// let i=1;
// for ( i=1; i < images.length; i++) {
//     images[i].style.display = 'none';
// }
//
// let a = 0;
// next.onclick = function () {
//     if (a === images.length-1 ) {
//         a = 0;
//         images[a].style.display = 'block';
//         for ( i=1; i < images.length; i++) {
//             images[i].style.display = 'none';
//         }
//     } else {
//         images[a].style.display = 'none';
//         images[a + 1].style.display = 'block'
//         a++;
//     }
//
//     return a;
// }
//
// let b = images.length - 1;
// back.onclick = function () {
//     if (a === 0 ) {
//         a = images.length - 1;
//         images[a].style.display = 'block';
//         for ( i=0; i < images.length - 1 ; i++) {
//             images[i].style.display = 'none';
//         }
//     } else {
//         images[a - 1].style.display = 'block';
//         images[a].style.display = 'none'
//         a--;
//     }
// }
//end