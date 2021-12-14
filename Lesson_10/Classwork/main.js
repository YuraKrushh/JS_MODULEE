// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується
// та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.


//let btn = document.getElementById('show');
// let btn1 = document.getElementById('reset');
//
// let form1 = document.forms.f1;
// let form2 = document.forms.f2;
//
// btn.onclick = function () {
//     console.log(form1.name.value + ' - ' +form1.age.value);
//     console.log(form2.name.value + ' - ' +form2.age.value);
// }
// btn1.onclick = function () {
//     form1.name.value = null;
//     form2.name.value = null;
//     form1.age.value = null;
//     form2.age.value = null;
//
// }
//end


//- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// let in1 = document.createElement('input')
// in1.setAttribute('type','number');
// in1.classList.add('rows');
// document.body.append(in1);
//
// let in2 = document.createElement('input')
// in2.setAttribute('type','number');
// in2.classList.add('counts');
// document.body.append(in2);
//
// let in3 = document.createElement('input')
// in3.setAttribute('type','text');
// in3.classList.add('content');
// document.body.append(in3);
//
// let btn = document.createElement('button');
// btn.innerText = 'create'
// btn.setAttribute('id', 'btn');
// document.body.append(btn);
//
// let btnRes = document.createElement('button');
// btnRes.innerText = 'reset'
// btnRes.setAttribute('id', 'btnRes');
// document.body.append(btnRes);
//
// let r;
// let c;
// let txt;
// btn.onclick = function () {
//      r = in1.value;
//      c = in2.value;
//      txt = in3.value;
//
//      let div = document.createElement('div');
//      div.style.margin = '15px';
//      document.body.append(div)
//      for ( let i = 0; i < r; i++) {
//         let tr = document.createElement('tr');
//          div.append(tr);
//          for ( let i = 0; i < c; i++) {
//             let td = document.createElement('td');
//             td.innerText = txt;
//             td.style.padding = '5px';
//             td.style.border = '2px solid black';
//             tr.append(td);
//         }
//     }
// }
//
// btnRes.onclick = function () {
//     in1.value = null;
//     in2.value = null;
//     in3.value = null;
// }
//end


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let array = ['дурак','дебіл','козел','тварь'];
// let arr = [];
// let in2 = document.createElement('input');
// in2.setAttribute('type','text');
// document.body.append(in2);
//
// let btn2 = document.createElement('button');
// btn2.innerText = 'check'
// document.body.append(btn2);
//
// btn2.onclick = function () {
//    for ( let i of array) {
//            if ( in2.value.toLowerCase() === i) {
//                alert('WARNING!')
//                in2.value = null;
//                return 0;
//            }
//        }
//    for ( let i of array) {
//        if (in2.value.toLowerCase() !== i) {
//            alert(in2.value);
//            in2.value = null;
//            return 0;
//        }
//    }
// }
//end




// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

let array = ['дурак','дебіл','козел','тварь'];
let arr = []
let in1 = document.createElement('input');
in1.setAttribute('type','text');
document.body.append(in1);

let btn1 = document.createElement('button');
btn1.innerText = 'check'
document.body.append(btn1);

btn1.onclick = function () {
    arr = in1.value.toLowerCase().split(' ');
    let msg = 0;
    for ( let i of array) {
        for (let k = 0; k < arr.length; k++){
        if ( i === arr[k]){
            msg++;
            in1.value = null;
            arr[k] = '*'.repeat(arr[k].length);
        }}
    } if ( msg !== 0) {
        let arrayUp = arr.join(' ').split('');
        arrayUp[0] = arrayUp[0].toUpperCase();
        alert('WARNING! NEW STRING: ' + arrayUp.join(''));

    } else {
        let arrayUp = in1.value.split('')
        arrayUp[0] = arrayUp[0].toUpperCase();
        alert(arrayUp.join(''));
    }

}
//end