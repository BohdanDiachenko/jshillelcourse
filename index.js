// Створити сутність людини:
// ім'я
// вік
// Метод виведення даних

// Створити сутність автомобіля:

// Характеристики автомобіля окремими властивостями

// Методи:

// Виведення на екран даних про цей автомобіль

// Привласнення цього автомобіля власнику (записати в автомобіль об'єкт власника)

// Всі дані про людину та про автомобіль отримувати від користувача. Реалізувати необхідні перевірки на коректність введення (порожні поля, вік > 18 для людини та ін. за необхідності)

// Максимально використовувати функції



class Human {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getHumanInfo() {
        return `ім'я: ${this.name}
                     вік:  ${this.age}`;
    }
}

class Car {
    make;
    model;
    yearOfRegistration;
    numberPlate;
    owner;

    constructor(make, model, yearOfRegistration, numberPlate) {
        this.make = make;
        this.model = model;
        this.yearOfRegistration = yearOfRegistration;
        this.numberPlate = numberPlate;
    }

    assignOwner(instanceHuman) {
        instanceHuman.age >= 18
            ? (this.owner = instanceHuman)
            : console.log("Приходь коли виповниться 18");
        return this.owner;
    }
    getCarInfo() {
        console.log(`
            Інформація про автомобіль\n
            марка: ${this.make}
            модель: ${this.model}
            рік виписку: ${this.yearOfRegistration}
            номерний знак: ${this.numberPlate}
            власник: ${this.owner ? this.owner.getHumanInfo() : "без власника"}
        `);
    }
}

const human1 = new Human("Сергій", 31);
const human2 = new Human("Петро", 19);
const human3 = new Human("Денис", 12);

const audi = new Car("audi", "a4", 2015, "AS 45-344 DS");
const volvo = new Car("volvo", "v90", 2019, "AE 22-344 DA");
const opel = new Car("opel", "vivaro", 2012, "AL 26-323 DU");

audi.assignOwner(human1);
volvo.assignOwner(human2);
opel.assignOwner(human3);

audi.getCarInfo();
volvo.getCarInfo();
opel.getCarInfo();
