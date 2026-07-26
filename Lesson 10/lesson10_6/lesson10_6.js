let kilogram = document.getElementById('input-value');
let container = document.getElementById('container');

let result = document.createElement('h2');
kilogram.addEventListener('input', function() {
    let conversion = +kilogram.value * 2.2046;

    result.innerText = conversion.toString();
    container.appendChild(result)
})