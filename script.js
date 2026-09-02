const messageButton = document.getElementById("messageButton");
const message = document.getElementById("message");

const modeButton = document.getElementById("modeButton");

const colorButton = document.getElementById("colorButton");

const dateTimeButton = document.getElementById("dateTimeButton");
const dateTime = document.getElementById("dateTime");


// =================================================
// MESSAGE BUTTON
// SHOW / HIDE MESSAGE
// =================================================

messageButton.addEventListener("click", function () {

    if (message.innerHTML !== "") {

        message.innerHTML = "";

    } else {

        message.innerHTML =
            "Hello! Welcome to Japhet Dipanyo's student profile. Thank you for visiting!";

    }

});


// =================================================
// DARK / LIGHT MODE
// =================================================

modeButton.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        modeButton.textContent = "Dark Mode";

    } else {

        modeButton.textContent = "Light Mode";

    }

});


// =================================================
// CHANGE COLOR
// MOSS GREEN <-> BABY BLUE
// =================================================

colorButton.addEventListener("click", function () {

    document.body.classList.toggle("baby-blue");

});


// =================================================
// DATE & TIME BUTTON
// SHOW / HIDE DATE & TIME
// =================================================

dateTimeButton.addEventListener("click", function () {

    if (dateTime.innerHTML !== "") {

        dateTime.innerHTML = "";

    } else {

        dateTime.innerHTML =
            "<p><strong>Date & Time:</strong></p>" +
            "<p>" + new Date().toLocaleString() + "</p>";

    }

});
