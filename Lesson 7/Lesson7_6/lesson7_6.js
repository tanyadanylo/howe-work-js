function Car(model, maker, yearOfManufacture, maxSpeed, capacityEngine) {
    this.model = model;
    this.maker = maker;
    this.yearOfManufacture = yearOfManufacture;
    this.maxSpeed = maxSpeed;
    this.capacityEngine = capacityEngine;

    this.drive = function() {
        return `їдемо зі швидкістю ${this.maxSpeed} на годину`;
    }

    this.info = function(){
        return `Model: ${this.model}, maker by ${this.maker}, 
        year of manufacture: ${this.yearOfManufacture}, 
        max speed: ${this.maxSpeed}, 
        capacity engine: ${this.capacityEngine}`;
    }

    this.increaseMaxSpeed = function(newSpeed){
        return this.maxSpeed = this.maxSpeed + newSpeed;
    }

    this.changeYear = function (newYear){
        this.yearOfManufacture = newYear;
        return newYear;
    }

    this.addDriver = function (driver){
        this.driver = driver;
    }
}

let myCar = new Car('Benz','Mercedes', 2018, 250, 2.0);

let driverObj = {
    name: 'Oleg',
    age: 28,
    experience: 5
};

console.log(myCar.drive());
console.log(myCar.info());

console.log(myCar.increaseMaxSpeed(20));
console.log(myCar);

console.log(myCar.changeYear(2020));
console.log(myCar);

myCar.addDriver(driverObj);
console.log(myCar);

