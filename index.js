// -Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
// Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

let getMathOperator = prompt('введіть математичний оператор:  +, -, *, /, %, ^');
let x = +prompt("Введіть перше число");
let y;
getMathOperator === '%' ? y = +prompt('Введіть число процент якого від першого числа ви хочете дізнатися') : y = +prompt('Введіть друге число');

const mathOperation = function doMath(x, znak, y) {
    switch (znak){
        case '+':
        case '-':
        case '*':
        case '/':
            alert(`${x} ${znak} ${y} = `+ eval(`${x} ${znak} ${y}`));
            return 
        case '%':
            alert(`${(y * 100)/x}%`);
            return 
        case '^':
            alert(`${x**y}`);
            return 
        default:
            alert('Ви ввели невірний оператор');
            return
    }
};
let result = mathOperation(x, getMathOperator, y);




// -Дан масив з елементами різних типів. Створити функцію яка вираховує
//  середнє арифметичне лише числових елементів даного масиву.

// const array = [24, 'арифметичне', 65, 'даного', 43, 'x', 12, undefined, NaN, {x: true, y: false}];
// const arithmeticMean = function calcArithmeticMean(arr){
//     const arrNumbers = arr.filter(currentValue => (!(isNaN(+currentValue))));
//     const result = arrNumbers.reduce((accum, elArr) =>  accum += elArr / arrNumbers.length, 0)
//     return result
// };
// console.log(arithmeticMean(array))




// Написати функцію заповнення даними користувача двомірного масиву.
//  Довжину основного масиву і внутрішніх масивів задає користувач.
//  Значення всіх елементів всіх масивів задає користувач.

// function dataFillTwoDimArray() {
//     let twoDimArray = [];
//     let lengthMainArray = +prompt("Введіть довжину основного масиву");
//     for (i = 0; i < lengthMainArray; i++) {
//         let elMainArray = prompt(`Введіть ${i + 1}-ий елемент основного масиву. Якщо хочете створити внутрішній масив введіть [] `);
//         if (elMainArray === "[]") {
//             let lengthIntArray;
//             twoDimArray[i] = [];
//             lengthIntArray = +prompt(`Введіть довжину внутрішнього масиву`);
//             for (j = 0; j < lengthIntArray; j++) {
//                 let elIntArray = prompt(`Введіть ${j + 1}-ий елемем внутрішнього масиву`);
//                 if (!isNaN(+elIntArray)) {
//                     twoDimArray[i].push(+elIntArray);
//                 } else {
//                     twoDimArray[i].push(elIntArray);
//                 }
//             } 
//         } else if (!isNaN(+elMainArray)) {
//             twoDimArray.push(+elMainArray);
//         } else {
//             twoDimArray.push(elMainArray);
//         }
//     }
//     return twoDimArray
// }
// const result = dataFillTwoDimArray();
// console.log(result)




// -Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
//  Вихідний рядок та символи для видалення задає користувач

// const getString = prompt('Введіть рядок');
// const getSymbolsRemove = prompt('Введіть символи для видалення')
// const arraySymbols = getSymbolsRemove === null ? [] : getSymbolsRemove.split("");

// function helloWorld (string, arr) {
//         let result = string.split('');
//         for(let i = 0; i<arr.length; i++){
//             for(let j = 0; j<string.length; j++) {
//                 if(arr[i] === string[j]){
//                     result.splice(result.indexOf(arr[i]),1)
//                 };
//             }
//         }
//         return result.join('');

// };
// alert(helloWorld(getString, arraySymbols));