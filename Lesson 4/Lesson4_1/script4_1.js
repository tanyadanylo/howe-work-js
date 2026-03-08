// task 1
function square(a, b) {
    return a * b;
}
console.log(square(5, 6));

// task 2
function roundSquare(r){
    let result = 3.14 * r * r;
    return result;
}
console.log(roundSquare(5));

// task 3
function squareCylindre(radius, height){
    return 2*3.14*radius * height;
}
console.log(squareCylindre(5, 10));

// task 4
function arr (array){
    for(const item of array){
        console.log(item);
    }
}
(arr([5, 10, 15, 20, 25]));

//task 5

function createParagraph(symbol){
    return document.write(`<p>${symbol}</p>`);
}
createParagraph("hello world");

//task 6

function footbar(text){
    document.write(`<ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    </ul>`)

}
footbar("jfjfiorkoe")

//task 7

function foobar (text, counter){
    document.write('<ul>');
    for (let i = 0; i < counter; i++ ){
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}

//task 8
function printUser (users){
    for (const user of users ){
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
    }
}
printUser([
    {id:8, name:"John",age:25},
    {id:9, name:"Joe",age:25},
    {id:10, name:"John",age:25},
    {id:11, name:"Joe",age:25},
    {id:12, name:"Joe",age:25},
    {id:13, name:"Joe",age:25},
    {id:14, name:"Joe",age:25},
    {id:15, name:"Joe",age:25},
    {id:16, name:"Joe",age:25},
]);

//task 9
function minNumber (numbers){
    let min = numbers[0];
    for(const number of numbers){
        if(number < min){
            min = number;
        }
    }
    return min;
}

console.log(minNumber([56, 8, -55, 5]));

//task 10
function sumArray (arr){
    let count = 0;

    for(const a  of arr){
        count = count + a;
        }
    return count;
}

console.log(sumArray([1,2,3,4,5]));

//task 11
function swap(arr, index1, index2){
    if (index1 < arr.length && index2 < arr.length){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    }
    return arr;
}

console.log(swap([1,2,3,4,5], 2, 0));
