//const squareArray = arr => arr.map(num => num * num);

// Примеры использования
//const numbers = [1, 2, 3, 4, 5];
//const squaredNumbers = squareArray(numbers);
//console.log(squaredNumbers);  // Выведет: [1, 4, 9, 16, 25]


const squareArray1 = arr => {
    const result = []; 
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i] * arr[i];  
    }
    return result;  
};


const numbers1 = [1, 2, 3, 4, 5, 10,];
console.log(squareArray1(numbers1));  // Выведет: [1, 4, 9, 16, 25]


