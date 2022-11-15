const listOfLists = [1, 2, [1, 2, 3], 3, 4, [1, 2, [1, 2, 3],3,4], 5, 6, 7,[1,2,3,4,5,6,[1,2,[1,2],3,4],7],8];
function generateList(array, prefix = []){
    const ul = document.createElement('ul');

    for (let i=0; i<=array.length; i++){
        if (i === array.length) {
            prefix.splice(prefix.length - 1, 1);
            return ul;
        }
        const li = document.createElement('li'); 
        ul.appendChild(li) 
        if (typeof array[i] == 'object'){
            prefix.push(array[i-1])            
            li.appendChild(generateList(array[i], prefix));
        }else{            
            if(prefix.length === 0){
                li.innerHTML = array[i];                
            }else{
                li.innerHTML =`${prefix.join('.')}.${array[i]}`;
            }
        }
    }
    return ul
};
document.querySelector('#container').appendChild(generateList(listOfLists));