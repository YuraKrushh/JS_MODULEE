//Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

class User {
    constructor(id, name, username, email,street, suite,city,zipcode,lat,lng,phone,website,company_name,catchPhrase,bs) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = {
            street: street,
            suite: suite,
            city: city,
            zipcode: zipcode,
            geo: {
                lat: lat,
                lng: lng
            }
        }
        this.phone = phone;
        this.website = website
        this.company = {
            name: company_name,
            catchPhrase: catchPhrase,
            bs: bs
        }
    }
}
let user = new User ('1','Alex', 'John','alex@mail.com',
    'Kulas Light','Apt. 556','Gwenborough','92998-3874',-37.3159,81.1496,'1-770-736-8031 x56442',
    'hildegard.org', 'Romaguera-Crona','Multi-layered client-server neural-net','harness real-time e-markets');

//console.log(user);
//end


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span



class Tag {
    constructor(name, action,atr_name1,atr_action1,atr_name2,atr_action2) {
        this.titleOfTag = name;
        this.action = action;
        this.atributes = [{
            name: atr_name1,
            action: atr_action1
        },
            {
                name: atr_name2,
                action: atr_action2

            }];

    }
}

let area = new Tag('area','Каждый элемент *area* определяет активные области изображения, которые являются ссылками.',
    'accesskey', 'Переход к области с помощью комбинации клавиш', 'alt','Альтернативный текст для области изображения.');
//console.log(area);

let div = new Tag('div','Элемент *div* является блочным элементом и предназначен для выделения фрагмента документа ' +
    'с целью изменения вида содержимого.','align', 'Выравнивание содержимого контейнера *div* по краю.','title',
    'Добавляет поясняющий текст к контейнеру *div* в виде всплывающей подсказки, которая отображается, когда курсор мыши задерживается на содержимом.');
//console.log(div);

let h1 = new Tag('h1','HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, ' +
    'расположенной после заголовка.','align-left','Выравнивание заголовка по левому краю.','align-center',
    'Выравнивание по центру.');
//console.log(h1);

let span = new Tag('span','Тег *span* предназначен для определения строчных элементов документа. ',
    'class','Задает стилевой класс.','dir','Задает направление и отображение текста — слева направо или справа налево.')
//console.log(span);
//end