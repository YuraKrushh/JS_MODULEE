// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id,name,surname,email,phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(1, 'Phil', 'Bill', 'phil@gmail.com', '+38097'),
    new User(3, 'Bill', 'Git', 'bill@gmail.com', '+38096'),
    new User(6, 'Mike', 'Down', 'mmike@gmail.com', '+38098'),
    new User(2, 'Ned', 'Up', 'ned12@gmail.com', '+38091'),
    new User(7, 'Pitt', 'Fin', 'pitty1@gmail.com', '+38092'),
    new User(4, 'James', 'Jay', 'jjjms@gmail.com', '+38093'),
    new User(9, 'Alex', 'Clerk', 'leax@gmail.com', '+38094'),
    new User(5, 'Carl', 'Zek', 'carl45@gmail.com', '+38095'),
    new User(8, 'Homer', 'Crack', 'hommy67@gmail.com', '+38090'),
    new User(10, 'Bart', 'Jimmy', 'elbarto@gmail.com', '+38089'),
]

//Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filter_arr = [];
let filter = (arr) => {
    filter_arr = arr.filter(value => value.id % 2 === 0);
    console.log(filter_arr);
}
//filter(users);

//Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let filter_sort = [];
let sort = (arr) => {
    filter_sort = arr.sort(function (a,b) {return a.id - b.id});
    console.log(filter_sort);
}
//sort(users);


// створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [
    new Client(1,'Alex', 'Brown', 'alll@gmail.com', '+38099', ['meal','milk','bread','cheese']),
    new Client(2,'Jim', 'Crew', 'cccc@gmail.com', '+38069', ['meal','milk']),
    new Client(3,'Nona', 'Kitt', 'ktkt@gmail.com', '+38033', ['meal','milk','bread'])
]

//console.log(clients)

//Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let clients_sorted
let sort_clients = (arr) => {
    clients_sorted  = arr.sort(function (a,b) {return a.order.length - b.order.length});
    console.log(clients_sorted);
}

sort_clients(clients);






