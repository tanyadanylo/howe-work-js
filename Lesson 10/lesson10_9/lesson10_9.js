let boxNumber = document.getElementById('box-number');

let currentNumber = +localStorage.getItem('boxNumber') || 90;
let time = +localStorage.getItem('time') || 0;

let currentTime = new Date().getTime();
if (currentTime - time > 10000 ) {
    currentNumber += 10;

    localStorage.setItem('boxNumber', currentNumber);
    localStorage.setItem('time', currentTime.toString());
}
localStorage.setItem('boxNumber', currentNumber);

boxNumber.innerHTML = currentNumber;

