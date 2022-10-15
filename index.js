// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// Знайти суму та кількість позитивних елементів.

const arrNumbers = [
    16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
    76, -4, 12, -35, 4, 47,
];
let amountPositiveElements = 0;
const arrNumbersSum = arrNumbers.reduce((accum, item) => {
    if (item > 0) {
        return accum + item;
        amountPositiveElements++;
    }
    return accum;
}, 0);
console.log(arrNumbersSum);
console.log(amountPositiveElements);

// Знайти мінімальний елемент масиву та його порядковий номер.

let arrNumbers1 = [
    16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
    76, -4, 12, -35, 4, 47,
];
let sequenceNumberMinEl;
let minArrayElement = arrNumbers1.reduce((accum, item, index) => {
    if (item < accum) {
        return accum = item;
        sequenceNumberMinEl = index;
    }
    return accum;
});
console.log(minArrayElement);
console.log(sequenceNumberMinEl);

// Знайти максимальний елемент масиву та його порядковий номер

let arrNumbers2 = [
    16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
    76, -4, 12, -35, 4, 47,
];
let sequenceNumberMaxEl;
let maxArrayElement = arrNumbers2.reduce((accum, item, index) => {
    if (item > accum) {
        return accum = item;
        sequenceNumberMaxEl = index;
    }
    return accum;
});
console.log(maxArrayElement);
console.log(sequenceNumberMaxEl);

// Визначити кількість негативних елементів.

let arrNumbers3 = [
    16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
    76, -4, 12, -35, 4, 47,
];
let amountNegativeElements = 0;
arrNumbers3.sort((item) => {
    if (item < 0) {
        amountNegativeElements++;
    }
    return accum;
});
console.log(amountNegativeElements);

// Знайти кількість непарних позитивних елементів.

let arrNumbers4 = [
    16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
    76, -4, 12, -35, 4, 47,
];
let amountOddPositiveEl = 0;
arrNumbers4.sort((item) => {
    if (item > 0 && item % 2 !== 0) {
        amountOddPositiveEl++;
    }
    return accum;
});
console.log(amountOddPositiveEl);

// Знайти кількість парних позитивних елементів.

let arrNumbers5 = [
    16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
    76, -4, 12, -35, 4, 47,
];
let amountEvenPositiveEl = 0;
arrNumbers5.sort((item) => {
    if (item > 0 && item % 2 === 0) {
        amountEvenPositiveEl++;
    }
    return accum;
});
console.log(amountEvenPositiveEl);

// Знайти суму парних позитивних елементів.

let arrNumbers6 = [
    16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
    76, -4, 12, -35, 4, 47,
];
let sumEvenPositiveEl = arrNumbers6.reduce((accum, item) => {
    if (item > 0 && item % 2 === 0) {
        return accum + item;
    }
    return accum;
});
console.log(sumEvenPositiveEl);

// Знайти суму непарних позитивних елементів.

let arrNumbers7 = [
    16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
    76, -4, 12, -35, 4, 47,
];
let sumOddPositiveEl = arrNumbers7.reduce((accum, item) => {
    if (item > 0 && item % 2 !== 0) {
        return accum + item;
    }
    return accum;
});
console.log(sumOddPositiveEl);

// Знайти добуток позитивних елементів.

let arrNumbers8 = [
    16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
    76, -4, 12, -35, 4, 47,
];
let productPositiveEl = arrNumbers8.reduce((accum, item) => {
    if (item > 0) {
        return accum * item;
    }
    return accum;
});
console.log(productPositiveEl);

// Знайти найбільший серед елементів масиву, остальні обнулити.

let arrNumbers9 = [
    16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
    76, -4, 12, -35, 4, 47,
];
let maxEl = 0;
let biggestElArr = arrNumbers9.reduce((accum, item, index) => {
    if (item > accum) {
        accum = item;
        arrNumbers9[maxEl] = 0;
        maxEl = index;
    } else {
        arrNumbers9[index] = 0;
    }
    return accum;
}, 0);
console.log(biggestElArr);
console.log(arrNumbers9);
