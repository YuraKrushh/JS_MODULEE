let favourArr = localStorage.getItem('favourites');
let arr = JSON.parse(favourArr);
for ( let i of arr) {
    let div = document.createElement('div');
    div.classList.add('object');
    div.innerText = 'Name: ' + i.name + '; Age: ' + i.age + ';';
    document.body.append(div);
}
let back = document.createElement('button');
back.innerText = 'Delete all and back';
document.body.append(back);
back.onclick = function () {
    document.location = './index.html'
}