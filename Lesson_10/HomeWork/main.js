//- Создать произвольный елемент с id = text.
// Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// let div1 = document.createElement('div')
// div1.setAttribute('id', 'text');
// div1.style.backgroundColor = 'red';
// div1.style.width = '50px';
// div1.style.height = '50px';
// document.body.append(div1);
// let btn = document.createElement('button');
// btn.innerText = 'hide';
// document.body.append(btn);
// btn.style.marginTop = '20px';
// div1.style.display = 'absolute';
// btn.addEventListener('click', function () {
//     div1.style.display = 'none';
// })
//end


//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let btn = document.createElement('button');
// btn.innerText = 'click';
// document.body.append(btn);
// btn.onclick = function () { btn.style.display = 'none';}
//end

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let input = document.createElement('input');
// input.setAttribute('type', 'number')
// let btn = document.createElement('button');
// btn.innerText = 'check';
// document.body.append(input,btn);
// btn.onclick = function () {
//     if ( input.value < 18) {
//         alert('Too young!');
//         input.value = null;
//     } else {
//         alert('Enter');
//         input.value = null;
//     }
// }
//end


//- Создайте меню, которое раскрывается/сворачивается при клике
// let menu = document.createElement('div')
// menu.innerText = "menu";
// let menu_ul = document.createElement('ul')
// document.body.append(menu, menu_ul)
// let i = 0
// while (i < 4) {
//     let li = document.createElement('li');
//     li.innerText = 'option'
//     menu_ul.append(li);
//     i++;
// }
// menu.onmouseover = function () {
//     menu.style.cursor = 'pointer'
// }
//
// menu.onclick = function () {
//     menu_ul.style.display = (menu_ul.style.display == 'none') ? 'block' : 'none'
//
// }
//end


//- Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.

let array = [
    {title: 'user1', body: 'text text text text text text text text text'},
    {title: 'user2', body: 'text text text text text text text text text'},
    {title: 'user3', body: 'text text text text text text text text text'},
    {title: 'user4', body: 'text text text text text text text text text'},
    {title: 'user5', body: 'text text text text text text text text text'},
]
for ( let i of array) {
    let div = document.createElement('div');
    div.innerText = i.title + ': ';
    document.body.append(div);
    let div_b = document.createElement('div');
    div_b.innerText = i.body;
    div.append(div_b);
    div.style.margin = '5px'
    let btn = document.createElement('button');
    btn.innerText = 'hide';
    div.append(btn);
    btn.onclick = function () {
        div_b.style.display = (div_b.style.display == 'none') ? 'block' : 'none'
        div_b.style.display = (btn.innerText = 'open') ? 'hide' : 'open'

    }
}

