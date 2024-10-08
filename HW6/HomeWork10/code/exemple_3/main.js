const суммаЧетных = (начало, конец) => {
    let сумма = 0;
    for (let i = Math.floor(начало); i <= Math.floor(конец); i++) {
        if (i % 2 === 0) {
            сумма += i;
        }
    }
    return сумма;
};

// Примеры использования:
console.log(суммаЧетных(1.5, 10.2));  // Выведет: 30
console.log(суммаЧетных(-3.8, 5.9));  // Выведет: 2