let ageInput = document.getElementById("user-age");
let button = document.getElementById("button");

button.addEventListener("click", function() {
    let userAge = +ageInput.value;
    if (userAge >= 18) {
        alert("Good");
    }else if(userAge < 18 && userAge > 0) {
        alert("Bad");
    } else {
        alert("Incorrect");
    }
})