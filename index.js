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
    addApartament(apartament) {
        if (apartament.apartmentNumber > this.numberOfApartments) {
            console.log('Квартири з таким номером в даному будинку не існує');
            return;
        } else {
            this.apartmentsArray[apartament.apartmentNumber - 1] = apartament; 
        } 
    }
    logHouseInfo(){
        console.log(`Будинок на ${this.numberOfApartments} квартир знаходиться за адресою:  Місто ${this.city}, вулиця ${this.street},${this.houseNumber}`);
        return this
    }
    logApartmentInfo (number){
        console.log(`
        Інформація про квартиру номер ${number}\n
        Кількість кімнат: ${this.apartmentsArray[number-1].numberOfRooms}
        Площа квартири: ${this.apartmentsArray[number-1].areaOfApartment} м²
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
        return this.apartmentsArray[number]
    }
    
}  
class Apartment{
    areaOfApartment;
    numberOfRooms;
    apartmentNumber;
    numberOfResidentsArray;
    constructor(areaOfApartment, numberOfRooms, apartmentNumber) {
        this.numberOfRooms = numberOfRooms
        this.apartmentNumber = apartmentNumber
        this.areaOfApartment = areaOfApartment
        this.numberOfResidentsArray = []
    } 
    addResident(resident){
        this.numberOfResidentsArray.push(resident)
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

const apartment1 = new Apartment(78, 2, 1);
const apartment2 = new Apartment(60, 2, 2);
const apartment3 = new Apartment(121, 3, 3);
const apartment4 = new Apartment(44, 1, 4);
const apartment5 = new Apartment(65, 3, 5);
const apartment6 = new Apartment(46, 2, 6);

apartment1.addResident(new Resident('Торопайко', 'Василь', 'Іванович', 'чоловіча', 54));
apartment1.addResident(new Resident('Торопайко', 'Світлана', 'Федорівна', 'жіноча', 44));
apartment1.addResident(new Resident('Торопайко', 'Ольга', 'Василівна', ' чоловіча', 20));
apartment2.addResident(new Resident('Черезтинногузадерищенко', 'Олександр', 'Іванович', 'чоловіча', 33));
apartment2.addResident(new Resident('Черезтинногузадерищенко', 'Лариса', 'Павлівна', 'жіноча', 31));
apartment3.addResident(new Resident('Нагорна', 'Христина', 'Павлівна', 'жіноча', 31));
apartment3.addResident(new Resident('Нагорний', 'Петро', 'Олексійович', 'чоловіча', 31));
apartment3.addResident(new Resident('Нагорна', 'Антоніна ', 'Петрівна', 'жіноча', 10));
apartment3.addResident(new Resident('Нагорний', 'Євгенія ', 'Петрович', 'чоловіча', 12));
apartment4.addResident(new Resident('Павлюк', 'Єфросинія', 'Павлівна', 'жіноча', 22));
apartment5.addResident(new Resident('Козак', 'Катерина', 'Артемівна', 'жіноча', 31));
apartment5.addResident(new Resident('Козак', 'Василь', 'Іванович', 'чоловіча', 31));
apartment6.addResident(new Resident('Калнишевський', 'Петро', 'Павлівна', 'чоловіча', 70));

houseOne.addApartament(apartment1);
houseOne.addApartament(apartment2);
houseOne.addApartament(apartment3);
houseOne.addApartament(apartment4);
houseOne.addApartament(apartment5);
houseOne.addApartament(apartment6);

console.log(houseOne);

houseOne.logHouseInfo()

houseOne.logApartmentInfo(1)
houseOne.logApartmentInfo(2)
houseOne.logApartmentInfo(3)
houseOne.logApartmentInfo(4)
houseOne.logApartmentInfo(5)
houseOne.logApartmentInfo(6)
