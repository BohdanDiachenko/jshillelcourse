// - Вивести на сторінку в один рядок через кому числа від 10 до 20

// let out = document.getElementById('out') 
// let result = '';
// for (let i = 10; i <= 20; i++){
//     result =  `${result + i}, `;
// }
// out.innerHTML = result


// - Вивести квадрати чисел від 10 до 20

// let out = document.getElementById('out') 
// let result = '';
// for (let i = 10; i <= 20; i++){
//     result +=  `${i ** 2}, `;
//     out.innerHTML = result
// };



// - Вивести таблицю множення на 7



let nomber = 10;
let indent = '';
for (let x = 1; x <= nomber; x++) {
    for (let y = 1; y <= nomber; y++) {
        if (y <= nomber) {
            document.write(`${x} * ${y} = ${x*y} \n`)
            // console.log (x  + '*' + y + '=' +  x*y + '\n')
        }
    }
    console.log(indent);
}




