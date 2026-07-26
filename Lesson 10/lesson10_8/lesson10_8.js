let numLines = document.getElementById('line');
let numBoxes = document.getElementById('box');
let items = document.getElementById('item');
let button = document.getElementById('button');
let table = document.getElementById('table');

button.addEventListener('click', function (event) {

    event.preventDefault();

    const lineValue = +numLines.value;
    const boxValue = +numBoxes.value;
    const boxItem = items.value;

    table.innerHTML = '';

    for (let i = 0; i < lineValue; i++) {
        let tr = document.createElement('tr');

        for (let j = 0; j < boxValue; j++) {
            let td = document.createElement('td');
            td.textContent = boxItem;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
})