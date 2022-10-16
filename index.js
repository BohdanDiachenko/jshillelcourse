
let numOrStr = prompt("input number or string");
console.log(numOrStr);

switch (isNaN(numOrStr) || numOrStr) {
    case null:
        console.log("ви скасували");

        break;

    case "":
        console.log("Empty String");

        break;

    case true:
        console.log(" number is Ba_NaN");

        break;

    default:
        console.log("OK!");

        break;
}


// let arithmeticOperations = prompt('що ви хочете зробити(add, sub, mult, div)?');
// let result;
// if(arithmeticOperations === 'add' || arithmeticOperations === 'sub' || arithmeticOperations === 'mult' || arithmeticOperations === 'div'){
//     let oneNumber = +(prompt('введіть перше число'));
//     let twoNumber = +(prompt('введіть друге число'));
//     if(arithmeticOperations === 'add'){
//         arithmeticOperations = '+';
//         result = oneNumber + twoNumber;
//     };
//     if (arithmeticOperations === 'sub'){
//         arithmeticOperations = '-';
//         result = oneNumber - twoNumber;
//     };
//     if (arithmeticOperations === 'mult'){
//         arithmeticOperations = '*';
//         result = oneNumber * twoNumber;
//     };  
//     if (arithmeticOperations === 'div'){
//         arithmeticOperations = '/';
//         result = oneNumber / twoNumber;
//     };
//     alert(`${oneNumber} ${arithmeticOperations} ${twoNumber} = ${result}`);
// } 
// else {
//     alert('читай умову');
// };



// let arithmeticOperations;
// let oneNumber;
// let twoNumber
// switch (arithmeticOperations = prompt('що ви хочете зробити(add, sub, mult, div)?')) {

//     case a = "add":
//         oneNumber = +(prompt('введіть перше число'));
//         twoNumber = +(prompt('введіть друге число'));
//         alert(`${oneNumber} + ${twoNumber} = ${oneNumber + twoNumber}`);
//         break;

//     case "sub":
//         oneNumber = +(prompt('введіть перше число'));
//         twoNumber = +(prompt('введіть друге число'));
//         alert(`${oneNumber} - ${twoNumber} = ${oneNumber - twoNumber}`);
//         break;

//     case "mult":
//         oneNumber = +(prompt('введіть перше число'));
//         twoNumber = +(prompt('введіть друге число'));
//         alert(`${oneNumber} * ${twoNumber} = ${oneNumber * twoNumber}`);;
//         break;

//     case "div":
//         oneNumber = +(prompt('введіть перше число'));
//         twoNumber = +(prompt('введіть друге число'));
//         alert(`${oneNumber} / ${twoNumber} = ${oneNumber / twoNumber}`);;
//         break;
        
//     default:
//         alert("Читай умову!");
//         break;
// };

// let firstNumber = +prompt('введіть перше число');
// let secondNumber = +prompt('введіть друге число');
// let add = `${firstNumber}+${secondNumber} = ${firstNumber + secondNumber}`;
// let sub = `${firstNumber}-${secondNumber} = ${firstNumber - secondNumber}`;
// let mult = `${firstNumber}*${secondNumber} = ${firstNumber * secondNumber}`;
// let div = `${firstNumber}/${secondNumber} = ${firstNumber / secondNumber}`;
// let resolt = `Ваш результат:\n${add}\n${sub}\n${mult}\n${div}`;
// alert(resolt);


//homework2/1

// let surName = prompt ('Enter your last name');

// let firstName = prompt('Enter your firs name');

// let patronymic = prompt('Enter your middle name');

// let greeting = 'good morning ' + surName + ' ' + firstName + ' ' + patronymic;
// // let greeting = `Good Morning ${surName} ${firstName} ${patronymic}`;


// alert(greeting);




// HomeWork2/2

// let number =  92358;
// let string = String(number);
// let newString = '';
// for(i = 0; i < string.length ; i++){
//     newString += `${string[i]} `;
// };
// console.log(newString);
=======
let firstNumber = +prompt('введіть перше число');
let secondNumber = +prompt('введіть друге число');
let thirdNumber = +prompt('введіть третє число');
let arithmeticMean = `${(firstNumber+secondNumber+thirdNumber)/3}`;
alert(arithmeticMean);

const SECONDS_IN_HOUR = 3600;
let hours = +prompt('введіть кількість годин які хочете перевести в секунди');
let seconds = `${hours * SECONDS_IN_HOUR} секунд`;
alert(seconds);

let condition = false;
let getUserLengthArray;
do {
    getUserLengthArray = prompt("Введіть довжину масиву");
    if (isNaN(getUserLengthArray) === true) {
        //return "Please imput a number.";
        alert("Будь ласка, введіть число");
        condition = false;
    } else {
        condition = true;
    }
} while (condition === false);

const newArray = [];
for (let i = 0; i < getUserLengthArray; i++) {
    newArray[i] = prompt(`Введіть елемент масиву № ${i + 1}`);
    if (newArray[i] === "" || newArray[i] === null) {
        delete newArray[i];
    } else if (!isNaN(+newArray[i])) {
        newArray[i] = Number(newArray[i]);
    }
}

console.log(newArray);
console.log(newArray.sort().sort((a, b) => a - b));
newArray.splice(1, 3);
console.log(newArray);



