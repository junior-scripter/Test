
document.querySelector('button').addEventListener('click', myClick);

function myClick() {
    let input = document.getElementById('myinput').value;

    if (input == 'google') {
        setTimeout(function(){ window.alert('Yandex круче, но это не точно)'); },3000);
    }
    else {
        (input == '');
        setTimeout(function(){ window.alert(input); },3000);
        setTimeout(function(){ window.alert(arrayStudent[0].name); },3000);
    }
}

let student1 = {
    name: 'Анатолий',
    age: '32',
}
let student2 = {
    name: 'Василий',
    age: '24',
}
let student3 = {
    name: 'Дмитрий',
    age: '37',
}
let student4 = {
    name: 'Кирилл',
    age: '18',
}

let arrayStudent = [student1, student2, student3, student4];

function superSum(a,b){
    if (isNaN(a) || isNaN(b)){
        setTimeout(function(){ window.alert("Вводить нужно было только числа"); },3000);
        //alert("Вводить нужно было только числа");
        return 0;
    }
    return a+b;
}

let num1 = +prompt("Введите первое число", "");
let num2 = +prompt("Введите второе число", "");
setTimeout(function(){ window.alert(superSum (num1, num2)); },3000);

var array = [2, 5, 6, 33, 12, 148, 27, 112, 89, 9];
var max = findMax(array);
var min = getMinValue(array);

function findMax(array){
    var max = array[0];
    for (var i = 0; i < array.length; i++) {
        if (max < array[i]) max = array[i];
    }
    return max;
}
console.log(max);

function getMinValue(array){
    var min = array[0];
    for (var i = 0; i < array.length; i++) {
        if (min > array[i]) min = array[i];
    }
    return min;
}

console.log(min);

let a = 'Анатолий';
let b = 'Василий';

function swap(a, b) {
    return [b, a]
}

[a, b] = swap(a, b);

console.log(a);
console.log(b);
