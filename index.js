// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

const array = [1, 2, 3, 4, 5, 6, 7];
function removeElement(getArray, numberDelete) {
    const index = getArray.indexOf(numberDelete);
    if (index !== -1) {
        getArray.splice(index, 1);
    }
}

removeElement(array, 5);
console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]
