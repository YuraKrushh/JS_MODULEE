// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// - drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// - info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// - increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// - changeYear (newValue) - змінює рік випуску на значення newValue
// - addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Avto(model, manufacturer, year, max_speed, engine) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.max_speed = max_speed;
    this.engine = engine;

    this.drive = function () {
        console.log('Їдемо зі швидкістю ' + `${max_speed}` + 'км/год');
    }
    this.info = function () {
        for (const i in this) {
            if (typeof this[i] !== 'function')
                console.log(`${i} - ${this[i]}`);
        }
    }
    this.increaseMaxSpeed = function (newSpeed) {
        console.log((this.max_speed + newSpeed + ' км/год'));
        }
    this.changeYear = function (newValue) {
        this.year = newValue;
        console.log(this.year);
    }
    this.driver = function (firstname){
        this.driver_name = firstname;
    }
}

let avto = new Avto('Opel', 'Germany', '2012', 150, '1.6');
//console.log(avto);
//avto.drive();
//avto.info();
//avto.increaseMaxSpeed(20);
//avto.changeYear(2017);
//avto.driver('Nick');
//console.log(avto);
//avto.info();
//end













//(Те саме, тільки через клас)

class Car {
    constructor(model, manufacturer, year, max_speed, engine) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.max_speed = max_speed;
        this.engine = engine;
    }
    drive() {
        return 'Їдемо зі швидкістю ' + `${this.max_speed}` + 'км/на годину';
    }
    info = function () {
        for (const i in this){
            if (typeof this[i] !== 'function')
                console.log(`${i} - ${this[i]}`);
    }
    }
    increaseMaxSpeed(newSpeed) {
        return this.max_speed + newSpeed + ' км/год';
    }
    changeYear(newValue) {
        this.year = newValue;
        return this.year;
    }
    driver(firstname){
        this.driver_name = firstname;
    }
}


let car = new Car('BMW', 'Germany', '2000', 160, '2.0');
//console.log(car);
//console.log(car.drive());
//car.info();
//console.log(car.increaseMaxSpeed(20));
//console.log(car.changeYear(2005));
//car.driver('Mike');
//console.log(car);
//car.info();
//end




// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Princess {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }


}

let Array = [
    new Princess('Anna',18, 36),
    new Princess('Elza',28, 37),
    new Princess('Nona',24, 38),
    new Princess('April',20, 39),
    new Princess('May',29, 40),
    new Princess('Viktoria',19, 41),
    new Princess('Lilo',23, 42),
    new Princess('Marge',26, 43),
    new Princess('Lisa',28, 44),
    new Princess('Kim',22, 45),
];
console.log(Array);

class Prince {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}
let prince = new Prince('Micky', 20, 42);

let para = (array, prince) => {
    for (let i of array) {
        if (i.size === prince.size) {
            console.log('Your princess is ' + `${i.name}`);
        }
    }
}

//para(Array, prince);

let find_para = (array,prince) => {
    let result = array.find(value => value.size === prince.size);
    console.log(result);
}
//find_para(Array,prince);
