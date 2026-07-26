let boxNumber = document.getElementById('box-number');

let currentNumber = +localStorage.getItem('boxNumber') || 0;
currentNumber += 1;
localStorage.setItem('boxNumber', currentNumber);

document.addEventListener('DOMContentLoaded', function () {
})


boxNumber.innerHTML = currentNumber;