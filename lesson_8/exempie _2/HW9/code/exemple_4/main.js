// Объявляем массив из 10 элементов и заполняем его случайными числами от 1 до 50
const массив = Array.from({ length: 10 }, () => Math.floor(Math.random() * 50) + 1);

// Находим сумму всех элементов массива
const сумма = массив.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Выводим массив и сумму его элементов в консоль
console.log("Массив:", массив);
console.log("Сумма всех элементов массива:", сумма);