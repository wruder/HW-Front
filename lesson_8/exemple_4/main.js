// условный оператор
const age = 5;
if( age < 12) {
    console.log("вы ребенок");
}
else if (age < 18){
    console.log("вы подросток");

}
else {
    console.log("ВЫ взрослый");
}


const name = "Monday";

switch(name){
    case "Monday": console.log("первый день недели");
    break;
     case "Tuesday": console.log("второй день недели");
     break;
     default: console.log("3 и дальше");
}

const result = (age >18)? "ВЫ уже взрослый" : "Вы еще не взрослый ";
console.log (result);