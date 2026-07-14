class Car{
    constructor(model, maker, yearOfManufacture, maxSpeed, capacityEngine){
        this.model = model;
        this.maker = maker;
        this.yearOfManufacture = yearOfManufacture;
        this.maxSpeed = maxSpeed;
        this.capacityEngine = capacityEngine;
    }

    drive(){
        return `їдемо зі швидкістю ${this.maxSpeed} на годину`;
    }
    info(){
        return `Model: ${this.model}, maker by ${this.maker}, 
        year of manufacture: ${this.yearOfManufacture}, 
        max speed: ${this.maxSpeed}, 
        capacity engine: ${this.capacityEngine}`;
    }
    increaseMaxSpeed(newSpeed){
        return this.maxSpeed = this.maxSpeed + newSpeed;
    }
    changeYear(newYear){
        this.yearOfManufacture = newYear;
        return newYear;
    }
    addDriver(driver){
        this.driver = driver;
    }

}

let car = new Car('m5 f90', 'BMW', 2019, 250,4.4 );
console.log(car);
console.log(car.drive());
console.log(car.info());

console.log(car.increaseMaxSpeed(55));
console.log(car.info());

console.log(car.changeYear(2020));

let driverObj = {
    name: 'Vlad',
    age: 22,
    experience: 1
}

car.addDriver(driverObj);
console.log(car);