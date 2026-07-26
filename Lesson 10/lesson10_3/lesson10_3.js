let userName = document.getElementById("name");
let userSurname = document.getElementById("surname");
let userAge = document.getElementById("age");
let button = document.getElementById("confirm-button");
let container = document.querySelector('.users-box')


button.addEventListener("click", function() {
    let newObj = document.createElement('div')
    newObj.innerText = `Name: ${userName.value}, Surname: ${userSurname.value}, Age: ${userAge.value}`;
    container.append(newObj)
})
