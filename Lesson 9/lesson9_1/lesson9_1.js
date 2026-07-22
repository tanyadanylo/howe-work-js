//task 9_1
let element = document.createElement('div');
element.classList.add('wrap', 'collapse', 'alpha', 'beta');
element.textContent = 'Hello, World!';
element.style.backgroundColor = 'red';
element.style.color = 'yellow';
element.style.fontSize = '24px';
document.body.appendChild(element);

let copyElement = element.cloneNode(true);
document.body.appendChild(copyElement);

