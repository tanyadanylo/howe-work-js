let sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];
let container = document.getElementById('container');

for (let date of sessionsList){
    let content = document.createElement('div');
    content.innerText = date;

    container.appendChild(content)
}