// Створити та описати сутності Багатоквартирного будинку, квартири, мешканця.

// Додати можливість створювати нові будинки на певну кількість квартир.

// Не обмежувати кількість мешканців у квартирі

class House {
    apartmentsArray
    constructor(params) { 
        this.city = params.city
        this.street = params.street
        this.houseNumber = params.houseNumber
        this.numberOfApartments = params.numberOfApartments
        this.apartmentsArray = [];
    }
    apartmentNumber = 0;
    addApartment( areaOfApartment, numberOfRooms, apartmentNumber = this.apartmentNumber+1){
        if(this.apartmentNumber < this.numberOfApartments){
            this.apartmentsArray.push(new Apartment(areaOfApartment, numberOfRooms, apartmentNumber))
            this.apartmentNumber++
        } return this.apartmentsArray
    }
    getHouseInfo(){
        console.log(`Будинок на ${this.numberOfApartments} квартир знаходиться за адресою:  Місто ${this.city}, вулиця ${this.street},${this.houseNumber}`);
        return this
    }
    getApartmentInfo (number){
        console.log(`
        Інформація про квартиру номер ${number}\n
        Площа квартири: ${this.apartmentsArray[number-1].areaOfApartment} м²
        Кількість кімнат: ${this.apartmentsArray[number-1].numberOfRooms}
        Кількість мешканців: ${this.apartmentsArray[number-1].numberOfResidentsArray.length}\n
        Дані про мешканців:
        `)
        for(let i=0; i<this.apartmentsArray[number-1].numberOfResidentsArray.length; i++){
            console.log(`
            Прізвище: ${this.apartmentsArray[number-1].numberOfResidentsArray[i].firstName}
            Ім'я: ${this.apartmentsArray[number-1].numberOfResidentsArray[i].lastName}
            По батькові: ${this.apartmentsArray[number-1].numberOfResidentsArray[i].surname}
            Стать: ${this.apartmentsArray[number-1].numberOfResidentsArray[i].sex}
            Вік: ${this.apartmentsArray[number-1].numberOfResidentsArray[i].age}
            `)
        }
        return this.apartmentsArray[number-1]
    }
}  
class Apartment{
    apartmentNumber;
    areaOfApartment;
    numberOfRooms;
    numberOfResidentsArray;
    constructor(areaOfApartment, numberOfRooms, apartmentNumber) {
        this.numberOfRooms = numberOfRooms
        this.apartmentNumber = apartmentNumber
        this.areaOfApartment = areaOfApartment
        this.numberOfResidentsArray = []
    } 
    addResident(firstName, lastName, surname, sex, age){
        this.numberOfResidentsArray.push(new Resident(firstName, lastName, surname, sex, age))
        return this.numberOfResidentsArray
    }
}   
class Resident{
    constructor(firstName, lastName, surname, sex, age){
        this.firstName = firstName;
        this.lastName = lastName
        this.surname = surname
        this.sex = sex
        this.age = age
    }
}  
const houseOne = new House({
    city: 'Київ',
    street: 'Володимирівська',
    houseNumber: 24,
    numberOfApartments: 6
})

console.log(houseOne);
houseOne.addApartment(120, 4);
houseOne.addApartment(82, 3);
houseOne.addApartment(61, 2);
houseOne.addApartment(44, 1);
houseOne.addApartment(62, 2);
houseOne.addApartment(46, 1);
houseOne.apartmentsArray[0].addResident('Торопайко', 'Василь', 'Іванович', 'чоловіча', 54)
houseOne.apartmentsArray[0].addResident('Торопайко', 'Світлана', 'Федорівна', 'жіноча', 44)
houseOne.apartmentsArray[0].addResident('Торопайко', 'Ольга', 'Василівна', ' чоловіча', 20)
houseOne.apartmentsArray[1].addResident('Черезтинногузадерищенко', 'Олександр', 'Іванович', 'чоловіча', 33)
houseOne.apartmentsArray[1].addResident('Черезтинногузадерищенко', 'Лариса', 'Павлівна', 'жіноча', 31)
houseOne.apartmentsArray[2].addResident('Нагорна', 'Христина', 'Павлівна', 'жіноча', 31)
houseOne.apartmentsArray[2].addResident('Нагорний', 'Петро', 'Олексійович', 'чоловіча', 31)
houseOne.apartmentsArray[2].addResident('Нагорна', 'Антоніна ', 'Петрівна', 'жіноча', 10)
houseOne.apartmentsArray[2].addResident('Нагорний', 'Євгенія ', 'Петрович', 'чоловіча', 12)
houseOne.apartmentsArray[3].addResident('Павлюк', 'Єфросинія', 'Павлівна', 'жіноча', 22)
houseOne.apartmentsArray[4].addResident('Козак', 'Катерина', 'Артемівна', 'жіноча', 31)
houseOne.apartmentsArray[4].addResident('Козак', 'Василь', 'Іванович', 'чоловіча', 31)
houseOne.apartmentsArray[5].addResident('Калнишевський', 'Петро', 'Павлівна', 'чоловіча', 70)


houseOne.getHouseInfo()
houseOne.getApartmentInfo(4)
houseOne.getApartmentInfo(3)



// <----=====---->

const houseTwo = new House({
    city: 'Вінниця',
    street: 'Коцюбинського',
    houseNumber: 12,
    numberOfApartments: 20
})
console.log(houseTwo);
houseTwo.addApartment(96, 3);
houseTwo.addApartment(82, 3);
houseTwo.addApartment(61, 2);

houseTwo.apartmentsArray[0].addResident('Торопайко', 'Василь', 'Іванович', 'чоловіча', 54)
houseTwo.apartmentsArray[0].addResident('Торопайко', 'Світлана', 'Федорівна', 'жіноча', 44)
houseTwo.apartmentsArray[0].addResident('Торопайко', 'Ольга', 'Василівна', ' чоловіча', 20)
houseTwo.apartmentsArray[1].addResident('Черезтинногузадерищенко', 'Олександр', 'Іванович', 'чоловіча', 33)
houseTwo.apartmentsArray[1].addResident('Черезтинногузадерищенко', 'Лариса', 'Павлівна', 'жіноча', 31)

houseTwo.getHouseInfo()
houseOne.getApartmentInfo(1)
houseOne.getApartmentInfo(2)