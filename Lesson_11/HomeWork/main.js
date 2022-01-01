let btn = document.getElementById('btn');
let name = document.getElementById('name');
let age = document.getElementById('age')
let arr = [];
btn.onclick = function () {
    if (name.value !== '' && age.value !== '') {
        arr = {name: name.value, age: age.value};
}
    name.value = null;
    age.value = null;
    localStorage.setItem( 'object' ,JSON.stringify(arr));

}


let btnCar = document.getElementById('btnCar');
let model = document.getElementById('model');
let type = document.getElementById('type');
let volume = document.getElementById('volume');
btnCar.onclick = function () {

    if (model.value !== '' && type.value !== '' && volume.value !== '') {
        let arrArr = JSON.parse(localStorage.getItem('cars')) || []
        arrArr.push({model: model.value, type: type.value, volume: volume.value});
        localStorage.setItem( 'cars' ,JSON.stringify(arrArr));
    }

}
