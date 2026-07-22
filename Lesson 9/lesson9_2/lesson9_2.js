// task 9_2

let array = ['Main', 'Products', 'About us', 'Contacts'];
let container = document.createElement('ul');
for (let element of array) {
    let li = document.createElement('li');
    li.textContent = element;
    container.appendChild(li);
}

document.body.appendChild(container);