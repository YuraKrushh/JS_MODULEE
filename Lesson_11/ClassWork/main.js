let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
localStorage.setItem('favourites',JSON.stringify([]));
for ( let i of users) {
    let div = document.createElement('div');
    div.classList.add('object');
    div.innerText = 'Name: ' + i.name + '; Age: ' + i.age +';';
    let btn = document.createElement('button');
    div.append(btn);
    btn.innerText = 'Add to favourite'
    btn.classList.add('button');
    document.body.append(div);
    btn.onclick = function () {
        let favourites = JSON.parse(localStorage.getItem('favourites'));
        favourites.push(i);
        const uniqueArray = favourites.filter((thing, index) => {
            const _thing = JSON.stringify(thing);
            return index === favourites.findIndex(obj => {
                return JSON.stringify(obj) === _thing;
            });
        });
        console.log(uniqueArray);
        localStorage.setItem('favourites', JSON.stringify(uniqueArray));
    }

}
let btnFavour = document.createElement('button');
btnFavour.innerText = "Favourites";
document.body.append(btnFavour);
btnFavour.onclick = function () {
    document.location = './favourites.html'
}




