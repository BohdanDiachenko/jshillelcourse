// - Вивести на сторінку в один рядок через кому числа від 10 до 20

let cityOfResidence;
let sportLegend;
let currentYear = 2022;
let answer;

let getAge = +prompt('Введіть рік вашого народження');
if (getAge === 0){
    alert('Шкода, що Ви не захотіли ввести свій рік народження')
};

let getResidence = prompt('Введіть ваше місце проживання');
if (getResidence === null){
    alert('Шкода, що Ви не захотіли ввести свіє місце проживання');
};

let getKindOfSport = prompt('Введіть ваш улюблений вид спорту');
if (getKindOfSport === null){
    alert('Шкода, що Ви не захотіли ввести свій улюбленний вид спорту');
};

switch (getResidence) {
    case 'Київ':
        cityOfResidence = 'Ти живеш у столиці України\n';
        break;
    case 'Вашингтон':
        cityOfResidence = 'Ти живеш у столиці Сполучених Штатів Америки\n';
        break;
    case 'Лондон':
        cityOfResidence = 'Ти живеш у столиці Англії\n';
        break;
    case null:
        cityOfResidence = '';
        break;

    default: cityOfResidence = `Ти живеш місті ${getResidence}\n`;
        break;
};
switch (getKindOfSport) {
    case 'футбол':
        sportLegend = 'Круто! Хочеш стати як Андрій Шевченко?';
        break;
    case 'баскетбол':
        sportLegend = 'Круто! Хочеш стати як Майкл Джордан?';
        break;
    case 'теніс':
        sportLegend = 'Круто! Хочеш стати як Роджер Федерер?';
        break;
    case null:
        sportLegend = '';
        break;

    default: sportLegend = '';
        break;
};

answer = (getAge ? `Ваш вік ${currentYear - getAge}.\n` : '') +  `${cityOfResidence}${sportLegend}`;

if(getAge || cityOfResidence || sportLegend){
    alert(answer);
};


// 1/2
let result = '';
for (let i = 10; i <= 20; i++){
    result =  `${result + i}, `;
}
document.write(result); 


// 2/2
// const ten = 10;
// const twenty = 20;
// let result = '';
// for (let i = 1; i <= twenty; i++){
//     if(i > ten){
//         result =  `${result + i}, `;
//     }
// }
// document.write(result); 


// - Вивести квадрати чисел від 10 до 20


// let result = '';
// for (let i = 10; i <= 20; i++){
//     result +=  `${i ** 2}, `;
// };
// document.write(result); 



// - Вивести таблицю множення на 7

// const numberTen = 10;
// const numberSeven = 7;

// for (let x = 1; x <= numberTen; x++){
//     document.write(`${x} * ${numberSeven} = ${x*numberSeven}<br>`)
// }





// -Знайти суму всіх цілих чисел від 1 до 15

// const numberFifteen = 15;
// let sumOfIntegers = 0;
// for (let x = 1; x <= numberFifteen; x++){
//     sumOfIntegers += x;
// }
// alert(sumOfIntegers);



// -Знайти добуток усіх цілих чисел від 15 до 35

// const numberFifteen = 15;
// const numberThirtyFive = 35;
// let sumOfIntegers = 0;
// for (let x = 1; x <= numberThirtyFive; x++){
//     if(x >= numberFifteen) {
//         sumOfIntegers += x;
//     }
// }
// alert(sumOfIntegers);



// -Знайти середнє арифметичне всіх цілих чисел від 1 до 500

// 1/2

// const numberFiveHundred = 500;
// let arithmeticMean = 0;
// let sumOfIntegers = 0;
// for (let x = 1; x <= numberFiveHundred; x++){
//     sumOfIntegers += x;
//     arithmeticMean = sumOfIntegers / x
// }
// alert(arithmeticMean);


// 2/2
// const numberFiveHundred = 500;
// let arithmeticMean = 0;

// for (let x = 1; x <= numberFiveHundred; x++){
//     arithmeticMean += x;
//     if (x === numberFiveHundred){
//         arithmeticMean /= x;
//     }
// }
// alert(arithmeticMean);


// -Вивести суму лише парних чисел в діапазоні від 30 до 80

// 1/2
// const numberFifteen = 30;
// const numberEighty = 80;
// let sumOfIntegers = 0;
// for (let x = 1; x <= numberEighty; x++){
//     if (x >= numberFifteen && x % 2 === 0){
//         sumOfIntegers += x;
//     }
// }
// alert(sumOfIntegers);


// 2/2
// const numberEighty = 80;
// let sumOfIntegers = 0;
// for (let x = 30; x <= numberEighty; x += 2){
//     sumOfIntegers += x
// }
// alert(sumOfIntegers);


// - Вивести всі числа в діапазоні від 100 до 200 кратні 3


// const oneHundred = 100;
// const twoHundred = 200;
// let sumOfIntegers = '';
// for (let x = 1; x <= twoHundred; x++){
//     if (x >= oneHundred && x % 3 === 0){
//         sumOfIntegers = `${sumOfIntegers + x} `;
//     }
// }
// alert(sumOfIntegers);





// -Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// -Визначити кількість його парних дільників.
// -Знайти суму його парних дільників.


// let aNaturalNumber = Math.floor(Math.random() * 1000) + 1;
// let result = '';
// let numberOfEvenDivisors = 0;
// let sumOfEvenDivisors = 0;

//     for (let x = 1; x <= aNaturalNumber / 2; x++){
//         if(aNaturalNumber % x === 0){
//             result = `${result + x}, `;
//             if(x % 2 === 0){
//                 numberOfEvenDivisors ++;
//                 sumOfEvenDivisors += x;
//             }
//         }
//     }
//     document.write(`${aNaturalNumber} натуральне число<br>`);
//     document.write(`${result} всі його дільники<br>`);
//     document.write(`${numberOfEvenDivisors} - кількість його парних дільників<br>`);
//     document.write(`${sumOfEvenDivisors} сума його парних дільників`);





// -Надрукувати повну таблицю множення від 1 до 10


// 1/2
// Щоб код працював коректно, потрібно розкоментувати main в index.html

// let number = 10;
// let indent = '<br>';
// let result = '';
// for (let x = 1; x <= number; x++) {
//     for (let y = 1; y <= number; y++) {
//            result += `${x} * ${y} = ${x*y}<br>`
//     };
//     document.getElementById(`cell-${x}`).innerHTML = result;
//     document.getElementById(`cell-${x}`).style.background = `rgb(${x*17}, ${x*18}, 225, 0.3)`;
//     result = '';
// };


// 2/2

// let number = 10;
// let indent = '<br>';
// for (let x = 1; x <= number; x++) {
//     for (let y = 1; y <= number; y++) {
//             document.write(`${x} * ${y} = ${x*y}<br>`)
//     }
//     document.write(indent);
// }