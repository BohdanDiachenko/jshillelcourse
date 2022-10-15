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
