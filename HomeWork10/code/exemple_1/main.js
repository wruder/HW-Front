const evenOdd = num=> {
const roundedNum = Math.floor (num);
return roundedNum % 2 === 0 ? 'even' : 'odd';
}
console.log (evenOdd(4.7));
console.log (evenOdd(5.2));
console.log (evenOdd(2));
console.log (evenOdd(-3));

