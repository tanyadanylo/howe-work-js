// task 1
// let areaOfRectangle =  (a, b) =>  a * b
// console.log(areaOfRectangle(5,4))

// task 2
//
// let areaOfCircle = (radius) => 2 * Math.PI * radius;
// console.log(areaOfCircle(5, 5));

// task 3
//
// let areaOfCylinder = (r, h) => 2 * Math.PI * r * h;
// console.log(areaOfCylinder(2, 8));

// task 4

// let showArray = (arr) => {
//     for (const item of arr) {
//         console.log(item)
//     }
// }
//
// showArray([1, 2, 3, 4, 5]);

// task 5

// let makeText = (text) => {
//     document.write(`<p> ${text} </p>`);
// }
//
// makeText('Hello World !');
// makeText('Hello World !');

// task 6

// document.write(`<ul>`)
// let makeList = (text) =>  {
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
// }
// (`</ul>`)
//
// makeList('Hello, World!')

// task 7

// document.write(`<ul>`)
// let makeSpecialList = (text, n) =>  {
//     for (let i = 1; i <= n; i++) {
//         document.write(`<li>${text}</li>`)
//     }
// }
// (`</ul>`)
//
// makeSpecialList('Hello, World!', 5)

// task 7

// let primitiveList = (arr) => {
//     for (const item of arr) {
//         document.write(`<li>${item}</li>`);
//     }
// }
// primitiveList(['kkk', 846, 'yyyy', -8955, 1, 'sdd'])

// task 8 bovDJDTIjt

// let usersList = (users) => {
//     for (const user of users ){
//         document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
//     }
// }
//
// usersList([
//     {id:8, name:"John",age:25},
//     {id:9, name:"Joe",age:25},
//     {id:10, name:"John",age:25},
//     {id:11, name:"Joe",age:25},
//     {id:12, name:"Joe",age:25},
//     {id:13, name:"Joe",age:25},
//     {id:14, name:"Joe",age:25},
//     {id:15, name:"Joe",age:25},
//     {id:16, name:"Joe",age:25},
// ]);

//  task 9 pghbnSB

// let minNumber = (arr) => {
//     let num = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < num) {
//             num = arr[i];
//         }
//     }
//     return num;
// }
// console.log(minNumber([1,2,3, -6588, 5, 9, -7]));

// task 10 EKRNVPM

// let sumElements = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log((sumElements([1, 2, 10])));

// task 11 kpsbSQCt2Lf

// let swapSymbol = (arr, index1, index2) => {
//     let temp = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = temp;
//
//     return arr;
// }
//
// console.log(swapSymbol([0, 1, 2, 3, 4, 5, 6,], 2, 3));

// task 12 mkGDenYnNjn.html

let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    if(exchangeCurrency === 'USD'){
        let USD = sumUAH/currencyValues[0].value;
        console.log(USD);
    } else if (exchangeCurrency === 'EUR'){
        let EUR = sumUAH / currencyValues[1].value;
        console.log(EUR);
    }
}

exchange(10000,[{currency: 'USD',value:25},{currency:'EUR',value:42}],'USD')