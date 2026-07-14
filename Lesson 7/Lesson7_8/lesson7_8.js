class Cinderella{
    constructor(name, age, legSize) {
        this.name = name;
        this.age = age;
        this.legSize = legSize;
    }
}

let girls = [
    new Cinderella('Anna', 18, 32),
    new Cinderella('Liza', 22, 39),
    new Cinderella('Melisa', 17, 33),
    new Cinderella('Kamila', 19, 37),
    new Cinderella('Elizabet', 16, 30),
    new Cinderella('Sara', 22, 38),
    new Cinderella('Vika', 20, 40),
    new Cinderella('Tanya', 19, 34),
    new Cinderella('Katya', 20, 36),
    new Cinderella('Margo', 20, 35),
];

class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

let boys = [
    new Prince('Arthur', 21, 30),
    new Prince('Leon', 25, 39),
    new Prince('Max', 20, 33),
    new Prince('Edward', 23, 37),
    new Prince('Charles', 22, 32),
    new Prince('Henry', 24, 38),
    new Prince('William', 26, 40),
    new Prince('Richard', 21, 34),
    new Prince('James', 23, 36),
    new Prince('George', 22, 35)
];

for (let i = 0; i < girls.length; i++) {
    let currenCinderella = girls[i];
    for (let j = 0; j < boys.length; j++) {
        let currentPrince = boys[j];
        if (currentPrince.shoeSize === currenCinderella.legSize) {
            console.log(`Matching ${currenCinderella.name} & ${currentPrince.name}`);

        }
    }
}

let searchCinderella = girls.find(girl => girl.legSize === 36);
console.log(searchCinderella);