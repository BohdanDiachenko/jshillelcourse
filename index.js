// Вивести на сторінку таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється за допомогою JavaScript).

// У HTML файлі для тих, хто забув, наведено приклад, як виглядає структура таблиці

const container = document.createElement('div');
container.style.cssText = `max-width: 1200px; height: 100vh; margin: 0 auto; background-color: #76d5cc3d; font-size: 20px; display: flex; flex-direction: column; justify-content: center;align-items: center;`
document.body.prepend(container);


const table = function(row, column, startingNumber){
    let currentNumber = startingNumber
    const table = document.createElement('table');
    table.style.cssText = 'border-collapse: collapse; border: 3px solid; margin: 10px 0 30px; background-color: #d72fc91e;'
    container.prepend(table)
    const title = document.createElement('h1')
    title.innerText = `Таблиця від ${currentNumber} до ${row*column+currentNumber-1}`
    title.style.cssText = `color: #f16b11`
    table.before(title)
    if (currentNumber <= row*column){
        for(i = 0; i < row; i++){
            const tr = document.createElement('tr');
            table.append(tr);
            for( j = 0; j < column; j++){
                const td = document.createElement('td');
                tr.append(td)
                td.innerText = `${currentNumber}`;
                currentNumber++
                td.style.cssText = 'border: 3px solid #6ccbe7; text-align: center; padding: 10px 15px; color: #ff6851';
            }
        }
    }
}
const row = 10;
const column = 10;
const startingNumber = 1;
table(row, column, startingNumber)