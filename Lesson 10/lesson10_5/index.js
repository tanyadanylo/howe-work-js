let sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];

let currentDate = new Date();
sessionsList.push(currentDate)
localStorage.setItem('sessionsList', JSON.stringify(sessionsList))