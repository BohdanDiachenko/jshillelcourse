// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. span>
// Наприклад:
// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
// const key = generateKey(16, characters);
// console.log(key); // eg599gb60q926j8i




const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

const key = function generateKey(keyLength, getKeyFrom) {
    let keyResult = "";
    for (let i = 0; i < keyLength; i++)
        keyResult += getKeyFrom[Math.floor(Math.random() * getKeyFrom.length)];

    return keyResult;
};

console.log(key(16, characters));