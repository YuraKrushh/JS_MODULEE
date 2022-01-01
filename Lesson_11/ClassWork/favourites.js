let favourArr = localStorage.getItem('favourites');
let arr = JSON.parse(favourArr);
for ( let i of arr) {
    let div = document.createElement('div');
    div.classList.add('object');
    div.innerText = 'Name: ' + i.name + '; Age: ' + i.age + ';';
    document.body.append(div);
}
let back = document.createElement('button');
back.innerText = 'Back';
document.body.append(back);
back.onclick = function () {
    history.back();
}
let deleteAll = document.createElement('button');
deleteAll.innerText = 'Delete All';
document.body.append(deleteAll);
deleteAll.onclick = function () {
    document.location = './index.html'
}