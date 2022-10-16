
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

