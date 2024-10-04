const countSymbols = (text) => {
const resultOfFunc = ( typeof text === "string") ? text.length : 'не строка';
return resultOfFunc;

}
function countSymbolsFD(text) {
    const resultOfFunc = ( typeof text === "string") ? text.length : 'не строка';
    return resultOfFunc;

}

const resultOFArowwFunction = countSymbols ("Hello World");
console.log (resultOFArowwFunction);