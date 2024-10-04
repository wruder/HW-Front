// Функция для проверки, является ли число простым
const isPrime = num => {
    if (num < 2) return false; // Числа меньше 2 не являются простыми
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // Если число делится на i, оно не простое
    }
    return true; // Если число прошло все проверки, оно простое
};

// Функция для нахождения всех простых чисел от 1 до n
const findPrimes = n => {
    const primes = []; // Массив для хранения простых чисел
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) primes.push(i); // Проверяем и добавляем простые числа
    }
    return primes; // Возвращаем массив простых чисел
};

// Примеры использования:
console.log(findPrimes(20)); // Выведет: [2, 3, 5, 7, 11, 13, 17, 19]
console.log(isPrime(17));     // Выведет: true
console.log(isPrime(18));     // Выведет: false