let firstNumber = +prompt('введіть перше число');
let secondNumber = +prompt('введіть друге число');
let add = `${firstNumber}+${secondNumber} = ${firstNumber + secondNumber}`;
let sub = `${firstNumber}-${secondNumber} = ${firstNumber - secondNumber}`;
let mult = `${firstNumber}*${secondNumber} = ${firstNumber * secondNumber}`;
let div = `${firstNumber}/${secondNumber} = ${firstNumber / secondNumber}`;
let resolt = `Ваш результат:\n${add}\n${sub}\n${mult}\n${div}`;
alert(resolt);