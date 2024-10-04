 //const randN = Math.random();

 function doubleNumber(n) {
  const res = n*2;
  return res;
 };

 //const resDouble10 = doubleNumber(10);
 //console.log(resDouble10);

 console.log(doubleNumber(50));

 console.log(doubleNumber(25,30));

 console.log(doubleNumber());

 function square(num) {
    return num * num;
}


console.log(square(5)); 
console.log(square(10)); 



const doubleNumberExpression = function(n = 1000 ) {
    return n * 2;

}

console.log(doubleNumberExpression(75)); 
//arow function 

const doubleNumberAroww = (n) => {
    return n * 2;
}
  console.log(doubleNumberAroww(275));

  //----------------------------------
  // принимает как аргумент имя (строку) и возвращает нам строку "Привет <Walter>";
     //function greet(name) {
    //return `Привет, ${name}`;
//}


////console.log(greet("Walter")); // "Привет, Walter"

//const isString = value => typeof value === 'string';


//console.log(isString("Walter")); // true
//console.log(isString(123));      // false

//const greet = name => typeof name === 'string' ? `Привет, ${name}` : 'Введите корректное значение';


///console.log(greet("Walter"));  // "Привет, Walter"
//console.log(greet(123));       // "Введите корректное значение"
//console.log(greet(true));      // "Введите корректное значение"


//const greetingArrow = name => 
    ////typeof name === "string" ? `Hello ${name}` : 'Введите корректное значение';

// Примеры использования
//console.log(greetingArrow("Walter"));  // "Hello Walter"
//c//onsole.log(greetingArrow(123));       // "Введите корректное значение"
//console.log(greetingArrow(true));      // "Введите корректное значение"



//const countCharacters = str => str.length;


//const logCharacterCount = str => console.log(str.length);


//console.log(countCharacters("Hallo"));  // 5
//logCharacterCount("Привет");            // 6




//const countSymbols = (world) => {
   // const resultOfFunc =(typeof world === "string") ? world.length : 'не строка';
   //const numberOfSymbols = world.length;
    //////return numberOfFunc;

//}
//c//onsole.log(numberOFSymbols(" world") );
 

const countSymbols2 = text => 
    ( typeof text === "string") ? text.length :' не строка';

console.log ( countSymbols2("Hello"));