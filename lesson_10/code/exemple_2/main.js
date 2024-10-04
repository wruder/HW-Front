const squareNumber = num => {
    const roundedNum = Math.floor(num);
    return roundedNum * roundedNum;
};

// Example usage:
console.log(squareNumber(4.7));  // Outputs: 16
console.log(squareNumber(5.2));  // Outputs: 25
console.log(squareNumber(-3.9)); // Outputs: 9