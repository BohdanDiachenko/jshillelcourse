let cityOfResidence;
let sportLegend;
let currentYear = 2022;
let answer;

let getAge = +prompt('Введіть рік вашого народження');
if (getAge === 0){
    alert('Шкода, що Ви не захотіли ввести свій рік народження')
};

let getResidence = prompt('Введіть ваше місце проживання');
if (getResidence === null){
    alert('Шкода, що Ви не захотіли ввести свіє місце проживання');
};

let getKindOfSport = prompt('Введіть ваш улюблений вид спорту');
if (getKindOfSport === null){
    alert('Шкода, що Ви не захотіли ввести свій улюбленний вид спорту');
};

switch (getResidence) {
    case 'Київ':
        cityOfResidence = 'Ти живеш у столиці України\n';
        break;
    case 'Вашингтон':
        cityOfResidence = 'Ти живеш у столиці Сполучених Штатів Америки\n';
        break;
    case 'Лондон':
        cityOfResidence = 'Ти живеш у столиці Англії\n';
        break;
    case null:
        cityOfResidence = '';
        break;

    default: cityOfResidence = `Ти живеш місті ${getResidence}\n`;
        break;
};
switch (getKindOfSport) {
    case 'футбол':
        sportLegend = 'Круто! Хочеш стати як Андрій Шевченко?';
        break;
    case 'баскетбол':
        sportLegend = 'Круто! Хочеш стати як Майкл Джордан?';
        break;
    case 'теніс':
        sportLegend = 'Круто! Хочеш стати як Роджер Федерер?';
        break;
    case null:
        sportLegend = '';
        break;

    default: sportLegend = '';
        break;
};

answer = (getAge ? `Ваш вік ${currentYear - getAge}.\n` : '') +  `${cityOfResidence}${sportLegend}`;

if(getAge || cityOfResidence || sportLegend){
    alert(answer);
};
