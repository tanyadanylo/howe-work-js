// task 1 #dFeorS3m7u

// let a =  'hello world';
// let b =  'lorem ipsum';
// let c =  'javascript is cool';
// console.log(a.length);
// console.log(b.length);
// console.log(c.length);

// task 2 #8lld9HMxXWB

// let a =  'hello world';
// let b =  'lorem ipsum';
// let c =  'javascript is cool';
//
// console.log(a.toUpperCase());
// console.log(b.toUpperCase());
// console.log(c.toUpperCase());

// task 3 #ClDsAm7xba7
//
// let s1 = 'HELLO WORLD';
// console.log(s1.toLowerCase());
// let s2 = 'LOREM IPSUM';
// console.log(s2.toLowerCase());
// let s3 = 'JAVASCRIPT IS COOL';
// console.log(s3.toLowerCase());

// task 4 #0b89BkYZwu

// let str = ' dirty string ';
// let strNew = str.trim();
// console.log(strNew);

// task 5 #bfoJuse4ZzP

// function stringToarray(str){
//     if (str){
//         const split = str.split(' ');
//         return split;
//     }
//     return [''];
// }
// console.log(stringToarray('Ревуть воли як ясла повні'));
// console.log(stringToarray(null));

// task 6 #Rbr5kEQ

// let someArray = [10,8,-7,55,987,-1011,0,1050,0];
// let newArray = someArray.map((item) => String(item))
// console.log(newArray);

// task 7 #5hqyKTfmc

// function sortNums(array, direction) {
//     if (direction === 'ascending') {
//         array.sort((a, b) => a - b);
//     } else if (direction === 'descending') {
//         array.sort((a, b) => b - a);
//     } return array;
// }
//
// console.log(sortNums([11,21,3], 'ascending'));
// console.log(sortNums([11,21,3], 'descending'));

// task 8 #yo06d74c1C

// let coursesAndDurationArray = [
//     { title: 'JavaScript Complex', monthDuration: 5 },
//     { title: 'Java Complex', monthDuration: 6 },
//     { title: 'Python Complex', monthDuration: 6 },
//     { title: 'QA Complex', monthDuration: 4 },
//     { title: 'FullStack', monthDuration: 7 },
//     { title: 'Frontend', monthDuration: 4 }
// ];
//
// let courseNew = coursesAndDurationArray
//     .sort((a, b) => b.monthDuration - a.monthDuration)
//     .filter(month => month.monthDuration > 5)
//     .map((item, index) => {
//         return{
//             id: index + 1,
//             title: item.title,
//             monthDuration: item.monthDuration,
//         }
//     });
//
// console.log(courseNew);

// task 9 #4LJn7zBx

// let courses = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js'],
//         logo: '',
//         price: 0,
//         rating: 5,
//         avgResult: 99
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced'],
//         logo: '',
//         price: 0,
//         rating: 4.998,
//         avgResult: 97
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'python core',
//             'python advanced'],
//         logo: '',
//         price: 0,
//         rating: 4.812,
//         avgResult: 98
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'QA/QC'],
//         logo: '',
//         price: 0,
//         rating: 4.65,
//         avgResult: 97
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java'],
//         logo: '',
//         price: 0,
//         rating: 4.772,
//         avgResult: 100
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass'],
//         logo: '',
//         price: 0,
//         rating: 4.53,
//         avgResult: 90
//     }
// ];
//
// let includeSass = courses.filter((course) => course.modules.includes('sass'));
// console.log(includeSass);
// let includeDocker  = courses.filter((course) => course.modules.includes('docker'));
// console.log(includeDocker);

// task 10 #bolvdlhP

let cardSuit = ['spade', 'diamond', 'heart', 'club'];
let cardValue = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
let cardColor;
let cards = [];

for (let suit of cardSuit) {
    for (let value of cardValue) {
        if (suit === 'diamond' || suit === 'heart') {
            cardColor = 'red';
        } else {
           cardColor = 'black';
        }
        let singleCard = {
            cardSuit: suit,
            value: value,
            color: cardColor,
        }
        cards.push(singleCard);
    }

}
console.log(cards);

let findAce = cards.find(card => (card.value === 'ace' && card.cardSuit === 'spade'));
console.log(findAce);

let allCard6 = cards.filter(card => (card.value === '6'));
console.log(allCard6);

let allRedCards = cards.filter(card => (card.color === 'red'));
console.log(allRedCards);

let allDiamondCards = cards.filter(card => (card.cardSuit === 'diamond'));
console.log(allDiamondCards);

let someClubCards = cards.filter(card => (card.cardSuit === 'club' && card.value !== '8' && card.value !== '7'&& card.value !== '6' ));
console.log(someClubCards);


// task 11 #EP5I1UUzAX

let totalCards = cards.reduce((total, card) => {
    if (card.cardSuit === 'spade'){
        total.spades.push(card);
    } else if (card.cardSuit === 'diamond'){
        total.diamonds.push(card);
    } else if (card.cardSuit === 'heart'){
        total.hearts.push(card);
    } else if (card.cardSuit === 'club'){
        total.clubs.push(card);
    }
    return total;
}, { spades: [], diamonds: [], hearts: [], clubs: [] });

console.log(totalCards);