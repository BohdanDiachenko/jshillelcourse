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



let arithmeticOperations;
let oneNumber;
let twoNumber
switch (arithmeticOperations = prompt('що ви хочете зробити(add, sub, mult, div)?')) {

    case a = "add":
        oneNumber = +(prompt('введіть перше число'));
        twoNumber = +(prompt('введіть друге число'));
        alert(`${oneNumber} + ${twoNumber} = ${oneNumber + twoNumber}`);
        break;

    case "sub":
        oneNumber = +(prompt('введіть перше число'));
        twoNumber = +(prompt('введіть друге число'));
        alert(`${oneNumber} - ${twoNumber} = ${oneNumber - twoNumber}`);
        break;

    case "mult":
        oneNumber = +(prompt('введіть перше число'));
        twoNumber = +(prompt('введіть друге число'));
        alert(`${oneNumber} * ${twoNumber} = ${oneNumber * twoNumber}`);;
        break;

    case "div":
        oneNumber = +(prompt('введіть перше число'));
        twoNumber = +(prompt('введіть друге число'));
        alert(`${oneNumber} / ${twoNumber} = ${oneNumber / twoNumber}`);;
        break;
        
    default:
        alert("Читай умову!");
        break;
};