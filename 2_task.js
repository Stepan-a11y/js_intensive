
//Task 2

let num1_1 = Number(prompt("Введите первое число"));
let num2_2 = Number(prompt("Введите второе число"));

if (isNaN(num1_1) || isNaN(num2_2)){
console.log("Некорректный ввод!")
}else{
console.log(`Ответ: ${num1_1 + num2_2}, ${num1_1 / num2_2}`);
}