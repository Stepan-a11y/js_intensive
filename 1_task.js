//Task 1

let num1 = Number(prompt("Введите первое число"));
let num2 = Number(prompt("Введите второе число"));

if (isNaN(num1) || isNaN(num2) || num2 < 2 || num2 > 36){
console.log("Некорректный ввод!")
}else{
console.log(num1.toString(num2))
}